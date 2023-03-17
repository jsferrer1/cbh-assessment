# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add custom id field to Agents table

Acceptance criteria:
- A new field named custom_id is added to the Agents table in the database.
- The custom_id field is a string field with a maximum length of 50 characters.
- The custom_id field is unique for each Agent.

Time/effort estimate: 2 hours

Implementation details:
- Create a new migration file to add the custom_id field to the Agents table.
- Update the Agents model to include the custom_id field.
- Update the Agents controller to handle the custom_id field in the create and update methods.
- Update the Agents view to display the custom_id field in the list of Agents.

Ticket 2: Update getShiftsByFacility function to use custom id

Acceptance criteria:
- The getShiftsByFacility function is updated to include the custom_id field for each Agent in the Shifts list.
- If a custom id is not available for an Agent, the internal database id is used instead.

Time/effort estimate: 4 hours

Implementation details:
- Update the getShiftsByFacility function to join the Agents table to the - Shifts table and include the custom_id field in the result set.
- Modify the generateReport function to use the custom_id field if it is available, otherwise use the internal database id.

Ticket 3: Update generateReport function to use custom id

Acceptance criteria:
- The generateReport function is updated to use the custom_id field for each Agent in the Shifts list.
- If a custom id is not available for an Agent, the internal database id is used instead.

Time/effort estimate: 4 hours

Implementation details:
- Modify the generateReport function to use the custom_id field if it is available, otherwise use the internal database id.