# Change: Fix Null Date Handling

## Why

Currently, when date fields in documents or task metadata are `null`, they are incorrectly displayed as "1970-01-01" (Unix epoch timestamp). This occurs because:

1. Date formatting functions don't properly validate null/undefined values before processing
2. Components like `CountUp` and `TimeAgo` receive null dates without proper guards
3. The `isValidDateTime` function may return Date objects even for null values
4. When `dayjs(null)` is called, it may create invalid dates that default to epoch

This creates a poor user experience where null dates appear as valid historical dates from 1970, which is misleading and confusing.

## What Changes

- **MODIFIED**: Date formatting utilities (`getTimeText`, `getTimeAgo`) to properly handle null/undefined values
- **MODIFIED**: `TimeAgo` component to display fallback text (e.g., "-" or "...") for null dates
- **MODIFIED**: `CountUp` component to handle null dates gracefully
- **MODIFIED**: `isValidDateTime` function to return `false` for null/undefined values
- **MODIFIED**: `ValueDisplay` component to handle null date values in document fields
- **MODIFIED**: Task list date columns to display appropriate fallback for null dates

## Impact

- Affected specs: `date-display` (new capability)
- Affected code:
  - `src/utils/text.ts` - Date formatting utilities
  - `src/components/common/Timeago.tsx` - Time display component
  - `src/components/common/CountUp.tsx` - Count-up timer component
  - `src/components/biz/document/List.tsx` - Document value display
  - `src/components/block/task/List.tsx` - Task list date columns
