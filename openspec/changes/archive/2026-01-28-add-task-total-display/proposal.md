# Change: Add Task Total Display

## Why

Users need to see the total number of tasks matching their current filters at a glance. This information is already available in the API response, so displaying it would provide valuable context without additional performance cost.

## What Changes

- Display the total count of tasks matching current filters
- Position the total count between the filter section and the task table
- Use the `total` field from the Meilisearch API response
- Add internationalization support for the total display label

## Impact

- Affected specs: `task-list`
- Affected code:
  - `src/routes/ins/$insID/_layout/tasks.tsx` - Extract total from API response
  - `src/components/block/task/List.tsx` - Accept and display total prop (or create new component)
  - `src/locales/en/task.json` - Add translation key for total
  - `src/locales/zh/task.json` - Add translation key for total
