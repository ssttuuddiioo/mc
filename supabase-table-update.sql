-- SQL Script to Update Supabase Markers Table to Match Your Exact CSV Structure
-- Run this in your Supabase SQL Editor

-- Step 1: Backup existing data (optional but recommended)
CREATE TABLE IF NOT EXISTS markers_backup AS SELECT * FROM markers;

-- Step 2: Drop the existing markers table and recreate with simplified structure
DROP TABLE IF EXISTS markers;

-- Step 3: Create new markers table that matches your CSV exactly (no empty columns)
CREATE TABLE markers (
    id SERIAL PRIMARY KEY,
    "Label" TEXT,
    "Facility Name" TEXT,
    "Coordinates" TEXT,
    "Address" TEXT,
    "Category" TEXT,
    "Size/Capacity" TEXT,
    "Description" TEXT,
    "Key Features" TEXT,
    "Location" TEXT,
    "image" TEXT,
    
    -- Additional computed columns for app functionality
    lat DECIMAL(10,8),          -- Parsed from Coordinates
    lng DECIMAL(11,8),          -- Parsed from Coordinates
    color TEXT,                 -- Generated from Category
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 4: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_markers_label ON markers("Label");
CREATE INDEX IF NOT EXISTS idx_markers_category ON markers("Category");
CREATE INDEX IF NOT EXISTS idx_markers_facility_name ON markers("Facility Name");
CREATE INDEX IF NOT EXISTS idx_markers_lat_lng ON markers(lat, lng);

-- Step 5: Enable Row Level Security
ALTER TABLE markers ENABLE ROW LEVEL SECURITY;

-- Step 6: Create policy for anonymous read access (matches your existing setup)
CREATE POLICY "Enable read access for all users" ON markers
    FOR SELECT USING (true);

-- Step 7: Add comments to document the table structure
COMMENT ON TABLE markers IS 'Marker data imported from CSV with exact column structure';
COMMENT ON COLUMN markers."Label" IS 'Marker identifier (shows on map marker)';
COMMENT ON COLUMN markers."Facility Name" IS 'Display name for info panel title';
COMMENT ON COLUMN markers."Coordinates" IS 'Original coordinate string from CSV';
COMMENT ON COLUMN markers."Address" IS 'Full address for info panel';
COMMENT ON COLUMN markers."Category" IS 'Category for marker coloring and grouping';
COMMENT ON COLUMN markers."Size/Capacity" IS 'Size information for info panel';
COMMENT ON COLUMN markers."Description" IS 'Detailed description for info panel';
COMMENT ON COLUMN markers."Key Features" IS 'Pipe-separated features (Feature1|Feature2|Feature3)';
COMMENT ON COLUMN markers."Location" IS 'Location context information';
COMMENT ON COLUMN markers."image" IS 'Image URL - Supabase Storage or external URL';
COMMENT ON COLUMN markers.lat IS 'Parsed latitude for map positioning';
COMMENT ON COLUMN markers.lng IS 'Parsed longitude for map positioning';
COMMENT ON COLUMN markers.color IS 'Hex color code generated from category';

-- Step 8: Create a function to auto-parse coordinates and set color
CREATE OR REPLACE FUNCTION update_marker_computed_fields()
RETURNS TRIGGER AS $$
BEGIN
    -- Parse coordinates if provided
    IF NEW."Coordinates" IS NOT NULL THEN
        DECLARE
            coord_parts TEXT[];
        BEGIN
            coord_parts := string_to_array(NEW."Coordinates", ',');
            IF array_length(coord_parts, 1) = 2 THEN
                NEW.lat := CAST(trim(coord_parts[1]) AS DECIMAL(10,8));
                NEW.lng := CAST(trim(coord_parts[2]) AS DECIMAL(11,8));
            END IF;
        EXCEPTION WHEN OTHERS THEN
            -- Keep existing lat/lng if coordinate parsing fails
        END;
    END IF;
    
    -- Set color based on category
    NEW.color := CASE LOWER(NEW."Category")
        WHEN 'main buildings & workspaces' THEN '#4A90E2'
        WHEN 'making & building spaces' THEN '#E74C3C'
        WHEN 'testing & innovation zones' THEN '#9B59B6'
        WHEN 'drone & aerial technology' THEN '#27AE60'
        WHEN 'data & technology infrastructure' THEN '#5DADE2'
        WHEN 'strategic location advantages' THEN '#F39C12'
        ELSE '#4A90E2'
    END;
    
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 9: Create trigger to auto-update computed fields
CREATE TRIGGER trigger_update_marker_computed_fields
    BEFORE INSERT OR UPDATE ON markers
    FOR EACH ROW
    EXECUTE FUNCTION update_marker_computed_fields();

-- Step 10: Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'markers' 
ORDER BY ordinal_position;

-- Now you can import your CSV directly:
-- 1. Go to Supabase Dashboard → Table Editor → markers table
-- 2. Click "Insert" → "Import data from CSV" 
-- 3. Upload your CSV file
-- 4. The lat, lng, and color columns will auto-populate via the trigger!
