# Change: Fix Task Column Widths

## Why

On the Tasks view page, the "Indexes" and "Types" columns are compressed too much on wide screens (around 1300px width), making the content difficult to read. The issue is resolved at wider screen sizes (around 1450px), but users with moderately wide screens experience poor usability.

The root cause is that these two columns do not have explicit width constraints defined, causing them to be compressed when the table layout algorithm distributes space among columns with fixed widths (UID, Status, Duration, etc.) and those without.

## What Changes

- **MODIFIED**: Task list table column definitions to add appropriate minimum widths for "Indexes" and "Types" columns
- **MODIFIED**: Ensure columns maintain readable widths across common screen sizes (1300px and wider)

## Impact

- Affected specs: `task-list` (new capability)
- Affected code:
  - `src/components/block/task/List.tsx` - Task list table column definitions
