# Change: Add received documents column to task list

## Why

Users performing bulk document operations need to quickly see how many documents were received in each task without opening the task detail modal. This information is already available in the task's `details` field from the Meilisearch API but is not displayed in the task list table.

Reference: [GitHub Issue #244](https://github.com/eyeix/meilisearch-ui/issues/244)

## What Changes

- Add a new "Received Documents" column to the task list table
- Display the `details.receivedDocuments` value from the Meilisearch Task API response
- Show "-" when the value is not available (e.g., for non-document tasks like index creation)
- Add internationalization support for the new column header (English and Chinese)

## Impact

- Affected specs: `task-list`
- Affected code:
  - `src/components/block/task/List.tsx` - Add new column definition
  - `src/locales/en/task.json` - Add English translation
  - `src/locales/zh/task.json` - Add Chinese translation
