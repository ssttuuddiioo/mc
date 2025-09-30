# Supabase MCP - Step-by-Step Setup

## Finding Your Connection String

The connection string is typically in a different section. Try these options:

### Option 1: Database Settings Page
1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/hzzcioecccskyywnvvbn
2. Click **Settings** (gear icon in sidebar)
3. Click **Database**
4. **Scroll down** on that page - you should see a section called **Connection string** or **Connection info**
5. Look for tabs like: `URI`, `Postgres`, `JDBC`, etc.
6. Select the **Connection pooling** or **Session pooling** option
7. Choose **Transaction mode**

### Option 2: Project API Settings
1. In your Supabase Dashboard, go to **Settings** → **API**
2. Scroll down to find database connection details

### Option 3: Build It Manually

Since I know your project ref is `hzzcioecccskyywnvvbn`, here's what your connection string should look like:

**Format:**
```
postgresql://postgres.hzzcioecccskyywnvvbn:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```

You need to:
1. **Get your database password** - If you don't know it, click "Reset database password" on the page you're on
2. **Find your region** - This is usually shown in your project URL or settings (e.g., `us-west-1`, `us-east-1`, `eu-west-1`)

## Quick Test: Finding Your Region

Your Supabase URL is: `https://hzzcioecccskyywnvvbn.supabase.co`

To find your region:
1. In the Supabase Dashboard, click **Settings** → **General**
2. Look for "Region" - it will show something like "West US (North California)" or similar
3. This maps to regions like:
   - West US (North California) → `us-west-1`
   - East US (North Virginia) → `us-east-1`
   - Central Europe → `eu-central-1`
   - etc.

## Once You Have Everything:

Your MCP config will be:

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-supabase",
        "postgresql://postgres.hzzcioecccskyywnvvbn:[YOUR-DB-PASSWORD]@aws-0-[YOUR-REGION].pooler.supabase.com:6543/postgres"
      ]
    }
  }
}
```

## Where to Put This Config in Cursor:

1. **Open Cursor Settings**: Press `Cmd+,` (or `Ctrl+,` on Windows/Linux)
2. **Search for "mcp"** in the search bar at the top
3. You should see **"Model Context Protocol"** settings
4. Click **"Edit in settings.json"** (or look for a JSON editor)
5. Add the `mcpServers` configuration to your settings

OR

1. Go to **Cursor** → **Settings** → **Cursor Settings**
2. Find the **Features** section
3. Look for **MCP Servers** or **Model Context Protocol**
4. Add the configuration there

## Alternative: Direct Connection Info

If you still can't find the connection string section, please tell me:
1. What **region** your Supabase project is in (from Settings → General)
2. Have you set/reset your database password?

And I'll construct the exact connection string for you!





