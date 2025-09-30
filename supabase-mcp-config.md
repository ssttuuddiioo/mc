# Supabase MCP Integration Guide

## Configuration for Cursor

Add this to your Cursor MCP settings (Settings → Features → MCP):

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-supabase",
        "postgres://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
      ]
    }
  }
}
```

## Your Supabase Connection Details

Based on your code, your Supabase project is:
- **Project URL**: `https://hzzcioecccskyywnvvbn.supabase.co`
- **Project Ref**: `hzzcioecccskyywnvvbn`

You'll need:
1. Your Supabase **database password** (the one you set when creating the project, NOT the anon key)
2. Your **connection pooler** string

## Getting Your Connection String

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/hzzcioecccskyywnvvbn
2. Navigate to **Settings** → **Database**
3. Scroll to **Connection string** section
4. Select **Connection pooling** tab (important!)
5. Choose **Transaction mode**
6. Copy the connection string (it should look like the format above)

## Example Configuration

Once you have your connection string, your config should look like:

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-supabase",
        "postgresql://postgres.hzzcioecccskyywnvvbn:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
      ]
    }
  }
}
```

## What This Enables

Once configured, the MCP server will allow you to:
- Query your `markers` table directly through natural language
- Execute SQL queries against your database
- Inspect table schemas and data
- Perform CRUD operations on your database

## Your Current Database Schema

You have a `markers` table with these columns:
- `id` (SERIAL PRIMARY KEY)
- `Label` (TEXT)
- `Facility Name` (TEXT)
- `Coordinates` (TEXT)
- `Address` (TEXT)
- `Category` (TEXT)
- `Size/Capacity` (TEXT)
- `Description` (TEXT)
- `Key Features` (TEXT)
- `Location` (TEXT)
- `image` (TEXT)
- `lat` (DECIMAL)
- `lng` (DECIMAL)
- `color` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Testing the Integration

After configuring, restart Cursor and you should be able to ask questions like:
- "Show me all markers in the database"
- "What markers are in the 'main buildings & workspaces' category?"
- "Query the markers table for all entries with lat > 42.3"

The MCP server will handle these queries directly against your Supabase database.





