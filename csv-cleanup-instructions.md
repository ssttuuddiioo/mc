# CSV Cleanup Instructions

## Problem
Your CSV has empty columns that Supabase can't import.

## Solution: Clean Your CSV Before Import

### Step 1: Remove Empty Columns
In your spreadsheet:
1. **Delete the empty column** (the one between "Facility Name" and "Coordinates")
2. **Delete the "_1" column** (unless it has important data)

### Step 2: Your Final CSV Should Have These Columns:
```
Label,Facility Name,Coordinates,Address,Category,Size/Capacity,Description,Key Features,Location,image
```

### Step 3: Export Clean CSV
1. **File** → **Export** → **CSV**
2. Make sure column headers match exactly:
   - `Label` (not "Label")
   - `Facility Name` (not "Facility Name")
   - `Coordinates` (not "Coordinates")
   - etc.

### Step 4: Test with Sample Data
Create a test CSV with just 2-3 rows first:

```csv
Label,Facility Name,Coordinates,Address,Category,Size/Capacity,Description,Key Features,Location,image
1,The Station,"42.3289, -83.0776",Detroit MI,Main Buildings & Workspaces,18 floors,Historic train station,Ford teams|Google programs,Central campus,
2,The Factory,"42.3311, -83.0724",Detroit MI,Making & Building Spaces,40000 sq ft,Manufacturing space,3D printing|Prototyping,Building A,
```

## Alternative: Let Me Create a Clean CSV for You

I can create a properly formatted CSV file with your data that will import cleanly into Supabase.

Would you like me to:
1. **Create a clean CSV file** with your data?
2. **Or help you clean your existing spreadsheet?**
