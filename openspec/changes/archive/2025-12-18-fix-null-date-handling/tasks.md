## 1. Update Date Utility Functions

- [x] 1.1 Modify `getTimeText` in `src/utils/text.ts` to check for null/undefined before calling dayjs
- [x] 1.2 Modify `getTimeAgo` in `src/utils/text.ts` to check for null/undefined before calling dayjs
- [x] 1.3 Modify `isValidDateTime` in `src/utils/text.ts` to return `false` for null/undefined/empty string values

## 2. Update Date Display Components

- [x] 2.1 Update `TimeAgo` component in `src/components/common/Timeago.tsx` to handle null dates and display fallback text
- [x] 2.2 Update `CountUp` component in `src/components/common/CountUp.tsx` to validate date before using it
- [x] 2.3 Update `ValueDisplay` component in `src/components/biz/document/List.tsx` to handle null date values properly

## 3. Update Task List Date Handling

- [x] 3.1 Update task list date columns in `src/components/block/task/List.tsx` to handle null dates in `enqueuedAt`, `startedAt`, and `finishedAt` fields
- [x] 3.2 Fix `CountUp` usage in duration column to handle null dates

## 4. Validation

- [ ] 4.1 Test with documents containing null date fields
- [ ] 4.2 Test with tasks that have null `enqueuedAt`, `startedAt`, or `finishedAt` values
- [ ] 4.3 Verify that null dates display as "-" or appropriate fallback text instead of "1970-01-01"
- [ ] 4.4 Verify that valid dates still display correctly
