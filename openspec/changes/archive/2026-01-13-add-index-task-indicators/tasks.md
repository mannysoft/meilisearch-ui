## 1. Implementation

- [x] 1.1 Create a custom hook `useIndexTaskCounts` to fetch task counts for multiple indexes
  - Hook should accept an array of index UIDs
  - Query tasks with statuses: "enqueued" and "processing"
  - Return a map of index UID to task count
  - Use TanStack Query for caching and automatic refetching

- [x] 1.2 Update `IndexList` component to use the new hook
  - Call `useIndexTaskCounts` with all index UIDs from the list
  - Store task counts in component state or use query result directly

- [x] 1.3 Fix the layout issue in `IndexList` component
  - Restructure the flex container to prevent "Indexing..." from pushing buttons
  - Use CSS Grid or better flex layout to ensure buttons stay in fixed position
  - Ensure "Indexing..." tag doesn't affect button positioning

- [x] 1.4 Add task count badge to tasks button
  - Display task count as a badge on the tasks button when count > 0
  - Show count for pending/processing tasks only
  - Style the badge to be visible but not intrusive

- [x] 1.5 Add translation keys for task count display
  - Add keys to `src/locales/en/index.json`
  - Add keys to `src/locales/zh/index.json`
  - Include tooltip text explaining what the count represents

- [x] 1.6 Update tooltip for tasks button
  - Show task count in tooltip when available
  - Update tooltip text to indicate pending/processing tasks

## 2. Validation

- [ ] 2.1 Verify layout fix: tasks button remains clickable when "Indexing..." is displayed
- [ ] 2.2 Verify task count displays correctly for indexes with pending/processing tasks
- [ ] 2.3 Verify task count badge updates when tasks change status
- [ ] 2.4 Verify performance: task count queries don't cause excessive API calls
- [ ] 2.5 Verify translations display correctly in both English and Chinese
