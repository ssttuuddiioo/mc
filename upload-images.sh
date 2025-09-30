#!/usr/bin/env bash
set -euo pipefail

API_URL="https://hzzcioecccskyywnvvbn.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6emNpb2VjY2Nza3l5d252dmJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODQ3NzUyOCwiZXhwIjoyMDc0MDUzNTI4fQ.vOagL69U71OZqckoV6iiOSFMA8pJpp0gtNQ7KuIqZqY"
BUCKET="marker-images"
SRC_DIR="uploads"

if [ ! -d "$SRC_DIR" ]; then
  echo "Create a folder named '$SRC_DIR' and drop images there. Filename should match Facility Name or ID.jpg"
  exit 1
fi

urlencode() { jq -nr --arg v "$1" '$v|@uri'; }

get_mime() {
  case "${1##*.}" in
    jpg|jpeg) echo "image/jpeg" ;;
    png) echo "image/png" ;;
    webp) echo "image/webp" ;;
    gif) echo "image/gif" ;;
    *) file -b --mime-type "$1" 2>/dev/null || echo application/octet-stream ;;
  esac
}

for f in "$SRC_DIR"/*; do
  [ -e "$f" ] || continue
  base=$(basename "$f")
  name_no_ext="${base%.*}"
  mime=$(get_mime "$f")
  enc_name=$(urlencode "$base")
  public_url="$API_URL/storage/v1/object/public/$BUCKET/$enc_name"

  echo "Uploading $base → $BUCKET/$base ($mime)";
  curl -s -X POST "$API_URL/storage/v1/object/$BUCKET/$enc_name" \
    -H "Authorization: Bearer $SERVICE_KEY" \
    -H "apikey: $SERVICE_KEY" \
    -H "x-upsert: true" \
    -H "Content-Type: $mime" \
    --data-binary @"$f" >/dev/null

  # Find marker id either by numeric filename or Facility Name match
  id=""
  if [[ "$name_no_ext" =~ ^[0-9]+$ ]]; then
    id="$name_no_ext"
  else
    enc_facility=$(urlencode "$name_no_ext")
    id=$(curl -s "$API_URL/rest/v1/markers?select=id&Facility%20Name=eq.$enc_facility" \
      -H "apikey: $SERVICE_KEY" -H "Authorization: Bearer $SERVICE_KEY" | jq -r '.[0].id // empty')
  fi

  if [ -n "$id" ]; then
    echo "Updating markers.id=$id image → $public_url"
    payload=$(jq -n --arg img "$public_url" '{image:$img}')
    curl -s -X PATCH "$API_URL/rest/v1/markers?id=eq.$id" \
      -H "apikey: $SERVICE_KEY" -H "Authorization: Bearer $SERVICE_KEY" \
      -H "Content-Type: application/json" -d "$payload" >/dev/null
  else
    echo "⚠️  Could not find marker for '$name_no_ext' — uploaded only"
  fi
  echo "✔ Done: $base"
done

echo "All uploads processed."
