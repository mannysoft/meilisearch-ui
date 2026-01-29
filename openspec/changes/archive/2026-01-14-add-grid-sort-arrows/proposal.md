# Change: Add Sort Arrows to Table View

## Why

Currently, the table view displays a "ST" tag to indicate sortable attributes, which is not intuitive and doesn't clearly show the current sort state. Users cannot easily see which columns are sortable or which column is currently being sorted. This change addresses issue #238 by replacing the "ST" tag with visual sort arrows that clearly indicate sortable columns and the active sort state, similar to how datatables displays sortable columns.

## What Changes

- Replace "ST" tag with up/down sort arrows in the table view for sortable attributes
- Display dimmed sort arrows for all sortable columns to indicate they can be sorted
- Highlight the active sort arrow when a column is currently being sorted
- Maintain the existing behavior in grid view (no change to grid view)
- Improve visual clarity and user experience for sorting in table view

## Impact

- Affected specs: `document-display` (new capability)
- Affected code:
  - `src/components/biz/document/List.tsx` - Modify table view columns to show sort arrows instead of "ST" tag
  - `src/components/biz/document/AttrTags.tsx` - May need to add a prop to control display mode (tag vs arrows) or create a new component
  - `src/routes/ins/$insID/_layout/index/$indexUID/_layout/documents/index.tsx` - Pass sort state to DocumentList component
