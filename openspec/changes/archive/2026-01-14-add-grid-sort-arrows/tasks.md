## 1. Implementation

- [x] 1.1 Create a new component or modify `AttrTags` to support sort arrow display mode
  - Add a prop to control whether to show tags or sort arrows
  - Create sort arrow component that shows up/down arrows
  - Arrows should be dimmed by default for sortable columns
  - Arrows should be highlighted when sort is active

- [x] 1.2 Parse current sort state from search form
  - Extract sort expressions from the sort field in search form
  - Determine which field is currently sorted and in which direction (asc/desc)
  - Pass this information to DocumentList component

- [x] 1.3 Update `List.tsx` table view columns to use sort arrows instead of "ST" tag
  - Replace AttrTags "ST" tag with sort arrows for sortable attributes in table view
  - Show dimmed arrows for sortable columns that are not currently sorted
  - Show highlighted arrow (up for asc, down for desc) for the active sort column
  - Maintain other attribute tags (FL, SC) as they are

- [x] 1.4 Update document page to pass sort information to DocumentList
  - Extract sort state from search form or route params
  - Pass sort information as props to DocumentList component
  - Ensure sort state is available when rendering table view

- [x] 1.5 Style the sort arrows appropriately
  - Use appropriate icons (up/down arrows)
  - Apply dimmed styling (lower opacity) for inactive sortable columns
  - Apply highlighted styling (full opacity, possibly different color) for active sort
  - Ensure arrows are visually clear and accessible

- [x] 1.6 Ensure grid view remains unchanged
  - Verify that grid view behavior remains as before
  - Only table view should show sort arrows
  - Maintain backward compatibility

## 2. Validation

- [x] 2.1 Verify sort arrows display correctly for sortable attributes in table view
- [x] 2.2 Verify dimmed arrows appear for sortable columns that are not currently sorted
- [x] 2.3 Verify active sort arrow is highlighted when a column is sorted
- [x] 2.4 Verify grid view still shows "ST" tag (no regression)
- [x] 2.5 Verify other attribute tags (FL, SC) still display correctly in table view
- [x] 2.6 Verify sort arrows update correctly when sort state changes
- [x] 2.7 Verify visual clarity: arrows are easy to see and understand
