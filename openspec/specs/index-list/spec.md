# index-list Specification

## Purpose
This specification defines requirements for displaying the index list in the application, including task count indicators and layout stability to ensure action buttons remain accessible regardless of indexing status.
## Requirements
### Requirement: Index List Task Indicators
The index list SHALL display task count indicators for each index showing the number of incomplete (pending/processing) tasks, and the layout SHALL ensure action buttons remain easily accessible regardless of indexing status display.

#### Scenario: Display task count on tasks button
- **WHEN** an index has one or more tasks with status "enqueued" or "processing"
- **THEN** the tasks button SHALL display a badge showing the count of incomplete tasks
- **AND** the badge SHALL be visually distinct but not intrusive
- **AND** the count SHALL update automatically when task statuses change

#### Scenario: Layout stability with indexing status
- **WHEN** the "Indexing..." tag is displayed for an index
- **THEN** the tasks button and settings button SHALL remain in a fixed position
- **AND** the buttons SHALL NOT be pushed to the right by the indexing tag
- **AND** the buttons SHALL remain easily clickable

#### Scenario: Task count tooltip
- **WHEN** a user hovers over the tasks button that has a task count badge
- **THEN** the tooltip SHALL display the number of pending/processing tasks
- **AND** the tooltip text SHALL be localized (English and Chinese)

#### Scenario: No task count when no incomplete tasks
- **WHEN** an index has no tasks with status "enqueued" or "processing"
- **THEN** the tasks button SHALL NOT display a task count badge
- **AND** the button SHALL display normally without any count indicator

#### Scenario: Task count updates
- **WHEN** task statuses change (e.g., from "processing" to "succeeded" or new tasks are enqueued)
- **THEN** the task count badge SHALL update automatically to reflect the current count
- **AND** the update SHALL occur without requiring manual page refresh

