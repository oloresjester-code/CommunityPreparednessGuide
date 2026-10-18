# Prompt Log — Community Preparedness Guide

> Important: Fill in the “Actual Copilot Output,” observations, and verification results after running each prompt. Do not invent Copilot responses. Save earlier versions before replacing code.

# Task 1 — Sector Selection

**Sector:** Disaster Risk Reduction / Climate Change Adaptation

**Local challenge:** Residents may not know which basic supplies and plans to prepare before an emergency.

**Target users:** Households and community residents.

**Proposed project:** Community Preparedness Guide

**Key features:** Interactive preparedness checklist, emergency kit guide, general evacuation reminders.

## Task 2 — Zero-Shot Prompting

**Objective:** Observe what Copilot creates from a simple prompt without examples.

**Exact Prompt:**
> Create a simple webpage that helps residents prepare for emergencies.

**Actual Copilot Output:**
[Paste the actual Copilot response or write the source file path, for example: outputs/zero-shot.html]

**What Worked:**
[Write what worked after checking the actual result.]

**What Needs Improvement:**
[Write what was missing or unclear.]

**Next Action / Verification:**
[Save a copy of the first result before changing it.]

## Task 3 — Structured Prompt (Prompt Anatomy)

**Objective:** Improve relevance by specifying role, task, context, constraints, expected output, and acceptance criteria.

**Exact Prompt:**
> Act as a frontend web developer. Create a responsive single-page Community Preparedness Guide for households in Marinduque, Philippines. Include an interactive preparedness checklist, emergency kit information, and general evacuation reminders. Use semantic HTML, CSS, and vanilla JavaScript in separate index.html, style.css, and script.js files. Do not use frameworks, a backend, a database, external APIs, live hazard data, or real-time warnings. Checklist items must be selectable with a mouse and keyboard, and a progress count must update when items are checked. Include a reset button. Make the page readable on mobile screens, use clear headings and labels, and explain how to test the result. Keep the project small and beginner-friendly.

**Actual Copilot Output:**
[Paste the actual response or reference saved files.]

**What Worked:**
[Compare this result with the zero-shot version.]

**What Needs Improvement:**
[Record real issues you found.]

**Next Action / Verification:**
[Test checklist behavior, keyboard access, and mobile layout.]

## Task 4A — Few-Shot Prompting

**Objective:** Use examples to make checklist items follow a consistent format.

**Exact Prompt:**
> Add preparedness checklist items using this format:
>
> Example 1:
> Item: Emergency flashlight
> Category: Emergency Kit
> Description: Keep a working flashlight available.
>
> Example 2:
> Item: Drinking water
> Category: Emergency Kit
> Description: Prepare a safe drinking-water supply.
>
> Generate four additional general preparedness items using the same format and display them as an accessible checklist in my existing Community Preparedness Guide. Keep the current project scope and do not add a backend or external API.

**Actual Copilot Output:**
[Paste the actual response or reference saved output.]

**What Worked:**
[Did the new items follow the example format consistently?]

**What Needs Improvement:**
[Record anything inconsistent or inaccurate.]

**Next Action / Verification:**
[Check that each item has a label and can be selected.]

## Task 4B — Role Assignment

**Objective:** Review the same interface from a specialized perspective.

**Exact Prompt:**
> Act as a frontend accessibility reviewer. Examine my Community Preparedness Guide code. Identify issues involving HTML semantics, keyboard access, form labels, focus visibility, contrast, and mobile readability. Recommend the three most important targeted improvements without changing the project scope. Refer to the specific code or element involved and explain how I can verify each recommendation.

**Actual Copilot Output:**
[Paste the actual Copilot response.]

**What Worked:**
[Which accessibility concerns were useful and relevant?]

**What Needs Improvement:**
[Did any recommendation seem unnecessary or unsupported by the code?]

**Next Action / Verification:**
[Apply at least one suitable improvement and test it.]

## Task 5 — Structured Analysis and Refinement

**Objective:** Diagnose and verify a specific implementation issue.

**Exact Prompt:**
> Review my current Community Preparedness Guide against the original requirements. Check whether the checklist count updates correctly, whether reset clears every checkbox, whether semantic HTML and accessible labels are used, and whether the layout works on narrow screens. Identify the two most important issues you can support from the code, suggest the smallest appropriate corrections, and give a step-by-step test for each. Do not claim a fix works until it has been tested.

**Actual Copilot Output:**
[Paste the actual Copilot response.]

**Selected Correction:**
[Describe the correction you actually applied.]

**Verification Result:**
[Write the exact tests you performed and whether they passed.]

## Task 6 — Comparison and Reflection

| Technique | Observation |
|---|---|
| Zero-shot | [What did the first prompt omit or assume?] |
| Structured prompt | [What improved after adding context and constraints?] |
| Few-shot | [What became more consistent after examples?] |
| Role assignment | [What specialist concerns were identified?] |
| Structured analysis | [What correction did you test and verify?] |

**Final Reflection:**
[Write a short reflection based on what actually happened during your experiments.]

## Suggested manual test checklist

- [ ] Open the page in a browser.
- [ ] Check one item and confirm the progress count changes.
- [ ] Check all items and confirm the completion message changes.
- [ ] Click Reset checklist and confirm all items are unchecked.
- [ ] Use Tab and Space to navigate and toggle checkboxes.
- [ ] Resize the browser to a narrow/mobile width.
- [ ] Check the browser console for JavaScript errors.
- [ ] Keep copies of earlier outputs in the `outputs` folder.
