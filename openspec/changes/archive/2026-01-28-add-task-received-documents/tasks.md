## 1. Implementation

- [x] 1.1 Add "received_documents" translation key to English locale (`src/locales/en/task.json`)
- [x] 1.2 Add "received_documents" translation key to Chinese locale (`src/locales/zh/task.json`)
- [x] 1.3 Add "Received Documents" column to task list table (`src/components/block/task/List.tsx`)
  - Position the column after "Types" column for logical grouping with document-related information
  - Display `details.receivedDocuments` value or "-" if not available
  - Use appropriate column width (100px) to accommodate numeric values

## 2. Verification

- [x] 2.1 Verify column displays correctly with document addition/update tasks
- [x] 2.2 Verify column shows "-" for non-document tasks (e.g., index creation, settings update)
- [x] 2.3 Verify translations display correctly in both English and Chinese
