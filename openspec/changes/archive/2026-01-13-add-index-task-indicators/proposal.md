# Change: Add Task Indicators to Index List

## Why

Currently, the index list has a UI issue where the tasks icon button is pushed to the right when the "Indexing..." text is displayed, making it difficult to click. Additionally, users cannot see which indexes have pending or processing tasks without navigating to the tasks page. This change addresses issue #240 by improving the layout and adding task count indicators.

## What Changes

- Fix the layout issue where "Indexing..." text pushes the tasks icon button to the right
- Add visual indicators showing which indexes have pending/processing tasks
- Display the count of incomplete (pending/processing) tasks for each index
- Improve the overall UX of the index list by making task status more visible

## Impact

- Affected specs: `index-list` (new capability)
- Affected code:
  - `src/components/biz/IndexList.tsx` - Main component to modify
  - `src/hooks/` - May need a new hook to fetch task counts per index
  - `src/locales/en/index.json` and `src/locales/zh/index.json` - Add new translation keys
