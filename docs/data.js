window.ITCO603_LECTURES = {
  1: {
    title: "Systems Analysis Foundations",
    kicker: "From organizational need to system opportunity",
    summary: "Understand an information system as a coordinated combination of people, processes, data, and technology, then frame the problem before proposing a solution.",
    objectives: [
      "Distinguish a business problem from a proposed technical solution.",
      "Identify system boundaries, external actors, inputs, processes, outputs, and feedback.",
      "Explain the responsibilities and communication role of a systems analyst.",
      "Evaluate whether a proposed feature contributes to organizational value."
    ],
    concepts: [
      ["Information system", "An information system is not only software. It combines people, procedures, data, technology, and controls to support work and decisions."],
      ["Problem versus solution", "A problem describes an undesirable condition or missed opportunity. A solution is one possible response. Jumping directly to a solution can hide the real need."],
      ["System boundary", "The boundary defines what the proposed system controls. External people, organizations, and systems exchange information with it but remain outside."],
      ["Business value", "A project must improve something that matters: time, quality, cost, risk, compliance, service, access, or decision making."],
      ["Systems thinking", "A local improvement can create problems elsewhere. Analysts examine interactions, feedback, constraints, and downstream consequences."],
      ["Analyst role", "The analyst investigates evidence, facilitates agreement, models the current and desired work, communicates trade-offs, and protects traceability."]
    ],
    handsOn: [
      ["Observe", "Choose a familiar university service and describe what users currently do without proposing new screens."],
      ["Frame", "Write one problem statement containing the affected stakeholder, current condition, consequence, and evidence needed."],
      ["Bound", "List what belongs inside the system and what must remain an external actor, policy, or supporting service."]
    ],
    mcqs: [
      {q:"Which statement best describes a business problem?",options:["The university needs a mobile application","Students wait several days for advising confirmation during peak registration","The system should use QR codes","The database should be moved to the cloud"],answer:1,why:"The waiting time states an observable condition and consequence without prematurely selecting a solution."},
      {q:"Which element is normally outside the boundary of an advising appointment system?",options:["Appointment record","Validation rule","Student using the service","Function that saves an appointment"],answer:2,why:"The student interacts with the system as an external actor; the other items are controlled within the system."},
      {q:"Which result is the strongest expression of business value?",options:["A modern interface","A new programming language","Reducing unresolved advising cases by 30%","Adding more menu options"],answer:2,why:"It describes an outcome that can be measured and linked to organizational performance."},
      {q:"What should an analyst do before recommending automation?",options:["Select the database","Understand the current process and its evidence","Design the home page","Estimate the number of code files"],answer:1,why:"A justified solution begins with investigation of the current work, stakeholders, problems, and constraints."}
    ],
    trueFalse: [
      {q:"A system boundary and an organizational boundary are always identical.",answer:false,why:"A system may support only part of an organization and exchange data with actors or services inside the same organization."},
      {q:"A stakeholder can be affected by a system without directly operating it.",answer:true,why:"Managers, regulators, support staff, and people represented in reports may be stakeholders without being direct users."},
      {q:"A requirement that names a preferred technology is automatically a business need.",answer:false,why:"Technology is usually a design choice unless a verified policy or constraint makes it mandatory."}
    ],
    problems: [
      {title:"Separate the problem from the proposed solution",level:"Problem framing",question:"A department requests an AI chatbot because students repeatedly email the same questions and wait up to two days for replies. Write a problem statement, one measurable objective, and two solution-neutral questions.",solution:"Problem: students experience delayed and inconsistent answers to recurring service questions. Objective: reduce the median response time for routine questions from two days to less than five minutes while maintaining approved information. Questions should investigate which questions recur, when delays occur, who approves answers, and which cases require staff judgment. A chatbot remains only one possible solution."},
      {title:"Define a defensible system boundary",level:"Scope reasoning",question:"A proposed event-registration system accepts registrations, checks capacity, collects payment through an external gateway, and sends confirmation through an email service. Identify what is inside the system and name two external systems.",solution:"Inside: registration capture, capacity rules, registration status, payment request initiation, and confirmation orchestration. Outside: the payment gateway and email service. The system stores their responses but does not control their internal processing."},
      {title:"Diagnose a local optimization",level:"Systems thinking",question:"A service desk reduces call time by forcing every request into one short category. Calls become faster, but technicians reopen many tickets because important details are missing. Explain the systems problem and propose one balanced measure.",solution:"The change optimized call duration while damaging information quality and downstream resolution. A balanced measure should combine intake time with first-contact resolution, reopen rate, or total time to resolution."}
    ],
    recap:"A good systems project begins with evidence about a meaningful problem, a clear boundary, and a value claim—not with a favorite technology.",
    takeaways:["Describe the problem before naming the solution.","Treat people, process, data, technology, and controls as one system.","Make the boundary explicit so scope decisions can be defended.","Express value with measurable organizational outcomes.","Check downstream effects before optimizing one part of a process."]
  },
  2: {
    title: "Project Selection and Feasibility",
    kicker: "Choose projects that are valuable and achievable",
    summary: "Compare system proposals using strategic alignment, feasibility evidence, costs, benefits, risks, and constraints rather than enthusiasm alone.",
    objectives:["Build a concise and evidence-based business case.","Apply operational, technical, economic, and schedule feasibility.","Distinguish tangible, intangible, one-time, and recurring effects.","Compare projects using transparent criteria and assumptions."],
    concepts:[
      ["Strategic alignment","A strong proposal supports an organizational goal, obligation, service priority, or risk-reduction need."],
      ["Operational feasibility","Determines whether the proposed system fits real work, stakeholder capability, policies, support arrangements, and willingness to change."],
      ["Technical feasibility","Examines skills, integration, data, infrastructure, security, scalability, and technology maturity."],
      ["Economic feasibility","Compares expected costs and benefits over a defined period while making assumptions and uncertainty visible."],
      ["Schedule feasibility","Tests whether required work, approvals, procurement, dependencies, and adoption can be completed by the required date."],
      ["Project portfolio decision","Projects compete for limited people, time, attention, and funding; selection should use agreed criteria rather than isolated ROI."]
    ],
    handsOn:[["Screen","Write a one-sentence reason the project supports a university or service objective."],["Test","List one strong and one weak piece of evidence for each feasibility dimension."],["Compare","Score two projects with the same weighted criteria, then challenge the most uncertain score."]],
    mcqs:[
      {q:"Which concern is primarily operational feasibility?",options:["The team lacks API experience","Advisors may not adopt the new workflow","The project costs AED 80,000","The accreditation deadline is in four months"],answer:1,why:"Adoption and fit with actual work are operational concerns."},
      {q:"Which item is a recurring cost?",options:["Initial data migration","One-time training design","Annual cloud hosting","Prototype development"],answer:2,why:"Hosting continues across operating periods."},
      {q:"A project has high value but depends on an unavailable identity service. What is the best conclusion?",options:["Approve immediately","Reject all digital projects","Record a technical dependency and investigate alternatives","Ignore the dependency until coding"],answer:2,why:"Feasibility is evidence-based; the dependency should be investigated and treated as a risk or constraint."},
      {q:"Why use weighted selection criteria?",options:["To guarantee the cheapest project wins","To make organizational priorities explicit","To eliminate judgment","To avoid collecting evidence"],answer:1,why:"Weights make the relative importance of value, risk, urgency, feasibility, and other criteria visible."}
    ],
    trueFalse:[
      {q:"A positive financial return automatically makes a project feasible.",answer:false,why:"Operational, technical, schedule, legal, and other constraints may still make the project unsuitable."},
      {q:"Intangible benefits can be important even when they are difficult to express in money.",answer:true,why:"Trust, service quality, compliance, reputation, and decision quality may materially affect selection."},
      {q:"Feasibility assumptions should be recorded and revisited as evidence changes.",answer:true,why:"Feasibility is a current judgment based on evidence, not a permanent label."}
    ],
    problems:[
      {title:"Compare two candidate projects",level:"Selection decision",question:"Project A reduces manual processing and has clear savings but depends on a difficult legacy integration. Project B improves student access, has lower technical risk, but uncertain financial benefit. Propose four weighted criteria and explain what evidence would decide between them.",solution:"Suitable criteria include strategic value, operational benefit, technical feasibility, and risk or urgency. Evidence should include process volumes and costs for A, access barriers and service outcomes for B, integration assessment, stakeholder adoption evidence, and realistic schedules. The recommendation should show scores and uncertainty rather than hiding judgment."},
      {title:"Challenge a schedule promise",level:"Feasibility analysis",question:"A sponsor requires launch in eight weeks. Procurement needs three weeks, security review needs two weeks after architecture approval, and user testing needs two weeks after a working prototype. Explain whether eight weeks is proven feasible.",solution:"It is not yet proven. The dependencies, architecture effort, prototype effort, fixes, and approvals must be placed on a schedule. Some work may overlap, but the critical path and resource availability must be demonstrated. The eight-week date is a constraint or target until supported by a credible plan."},
      {title:"Correct a weak business case",level:"Business case",question:"A proposal says, 'Everyone will like the new portal, it will save time, and it should be inexpensive.' Identify four evidence gaps.",solution:"Missing: target stakeholders and current pain evidence; baseline and expected time saving; scope and cost categories; feasibility and risks; measurable benefits; assumptions and alternatives. The revised case should quantify or clearly qualify each claim."}
    ],
    recap:"Project selection is a transparent argument about value, feasibility, risk, evidence, and organizational priority.",
    takeaways:["A business case connects the problem, evidence, options, cost, benefit, risk, and recommendation.","Feasibility has several dimensions; none should be replaced by optimism.","Separate one-time from recurring costs and tangible from intangible effects.","Use common criteria when comparing projects.","Record uncertainty and revisit assumptions as the project learns."]
  },
  3: {
    title:"Managing Systems Projects",kicker:"Turn scope into coordinated work",summary:"Plan and control systems work using deliverables, dependencies, critical paths, estimates, resources, milestones, risks, and evidence-based corrective action.",
    objectives:["Build a deliverable-oriented work breakdown structure.","Represent task dependencies using Gantt and network views.","Identify a critical path and explain the effect of slack.","Choose proportionate responses to schedule and project risks."],
    concepts:[
      ["Work breakdown structure","Decomposes the project into manageable deliverables and work packages. It describes all required work without confusing tasks with vague phases."],
      ["Dependency","A dependency explains why one task constrains another. Finish-to-start is common, but not every activity must wait for all previous work."],
      ["Critical path","The longest duration path through the dependency network determines the earliest completion date. Delay on a critical task delays the project unless corrective action changes the network."],
      ["Slack","Slack is the time a noncritical activity can move without delaying the project finish. Slack is a management resource, not evidence that the task is unimportant."],
      ["Monitoring and control","Compare actual progress and evidence with the baseline, investigate variance, forecast consequences, and make controlled changes."],
      ["Risk management","Identify uncertain events, estimate probability and impact, assign ownership, define triggers, and choose avoidance, mitigation, transfer, acceptance, or contingency."]
    ],
    handsOn:[["Decompose","Turn one project deliverable into work packages with observable completion criteria."],["Network","Place tasks, durations, and predecessors into a dependency network; calculate the controlling path."],["Respond","Choose whether to crash, fast-track, reassign, reduce scope, or accept a delay—and state the new risk."]],
    mcqs:[
      {q:"Which task is necessarily critical?",options:["The most expensive task","A task with zero slack on the controlling path","The task with the largest team","Every testing task"],answer:1,why:"Criticality depends on network timing, not cost, team size, or task category."},
      {q:"What is the main purpose of a work breakdown structure?",options:["Assign blame","Decompose all project work into manageable deliverables","Replace the schedule","Eliminate uncertainty"],answer:1,why:"The WBS defines the complete work scope at manageable levels."},
      {q:"Fast-tracking normally means:",options:["Adding budget to shorten one task","Overlapping tasks that were planned sequentially","Removing every test","Extending the deadline"],answer:1,why:"Fast-tracking overlaps work, usually increasing coordination and rework risk."},
      {q:"A risk trigger is:",options:["The final project report","Observable evidence that a risk may be occurring","A completed task","A guaranteed failure"],answer:1,why:"A trigger tells the owner when a planned response or escalation should begin."}
    ],
    trueFalse:[
      {q:"Shortening a noncritical task always shortens the project.",answer:false,why:"It may only increase slack; the project finish changes only when the controlling path is shortened."},
      {q:"A baseline should never change after approval.",answer:false,why:"Controlled rebaselining may be justified after approved scope or constraint changes; uncontrolled change is the problem."},
      {q:"Risk probability and impact should both influence priority.",answer:true,why:"A likely minor risk and a rare catastrophic risk require different treatment and escalation."}
    ],
    problems:[
      {title:"Find the critical path",level:"Network reasoning",question:"Tasks are A(3 days), B(4) after A, C(2) after A, D(5) after B, and E(3) after C. The project ends after D and E. Find both paths, project duration, and slack on the shorter path.",solution:"Paths: A-B-D = 3+4+5 = 12 days; A-C-E = 3+2+3 = 8 days. The project duration is 12 days, A-B-D is critical, and the shorter path has 4 days of slack if no other constraints apply."},
      {title:"Choose a compression strategy",level:"Trade-off analysis",question:"A project must finish three days earlier. A critical testing task can be crashed by two days for AED 6,000; design and development can overlap to save two days but increases rework risk. Recommend a plan and the evidence needed.",solution:"Either option alone may be insufficient depending on the network after compression. Evaluate the new critical path after each change. A combined one-day or two-day crash plus limited overlap may meet the target, but cost, resource conflict, test quality, and rework risk must be compared. The recommendation needs current critical-path calculations and risk controls."},
      {title:"Respond to schedule variance",level:"Project control",question:"A requirements task is 60% complete when the baseline expected 90%. Development depends on approved requirements. What should the project manager do before adding people?",solution:"Verify actual remaining work and quality, identify the cause, update the forecast and dependency effect, check whether the task is critical, evaluate focused assistance or scope decisions, and consider communication or approval delays. Adding people without diagnosis may increase coordination cost."}
    ],
    recap:"A project plan is a model of scope, dependencies, time, resources, and uncertainty that must be monitored and revised through controlled decisions.",
    takeaways:["Build the WBS around deliverables and completion evidence.","Dependencies—not visual order in a list—control schedule behavior.","Recalculate the critical path after every compression decision.","Use variance to forecast and act, not merely to report delay.","Every schedule response creates cost, quality, resource, or risk consequences."]
  },
  4: {
    title:"Stakeholders and Investigation",kicker:"Collect evidence without leading the answer",summary:"Identify affected stakeholders and select surveys, interviews, observation, workshops, and document analysis according to the evidence needed and each technique’s limitations.",
    objectives:["Build an inclusive stakeholder map.","Choose elicitation techniques that match information needs.","Design neutral survey and interview questions.","Separate observed evidence, interpretation, assumptions, and unresolved conflicts."],
    concepts:[
      ["Stakeholder analysis","Identify people who use, manage, support, fund, regulate, supply, or are affected by the system; then consider influence, interest, knowledge, and impact."],
      ["Survey","Efficient for patterns across many respondents, but results depend on sampling, wording, response options, completion, and who chooses to respond."],
      ["Interview","Supports probing, explanation, and sensitive detail, but takes time and can be shaped by interviewer behavior or a small sample."],
      ["Observation","Reveals actual work, exceptions, workarounds, interruptions, and tacit knowledge that people may not report accurately."],
      ["Workshop","Builds shared understanding and exposes conflict quickly, but facilitation must prevent dominant voices from controlling the result."],
      ["Triangulation","Confidence increases when different sources and techniques support the same conclusion; disagreement is evidence that requires investigation."]
    ],
    handsOn:[["Map","List direct users, indirect stakeholders, decision makers, support roles, and overlooked affected groups."],["Design","Write one neutral closed survey question and two open follow-up interview questions."],["Challenge","Find one sampling, wording, or interpretation limitation in a small survey summary."]],
    mcqs:[
      {q:"Which question is most neutral?",options:["Don't you agree the new portal is easier?","How satisfied are you with the excellent current service?","Describe what happens when you cannot find an appointment","Why do advisors delay students?"],answer:2,why:"It asks for an experience without embedding blame or a preferred answer."},
      {q:"Which technique best reveals unreported workarounds?",options:["Observation","A yes/no survey only","Reading the proposed solution","Cost estimation"],answer:0,why:"Observation can reveal what people actually do, including tacit steps and interruptions."},
      {q:"A survey has 90% positive responses from 10 volunteers in one class. What is the main caution?",options:["Percentages are never useful","The sample may not represent all users","The result proves universal satisfaction","Open questions are illegal"],answer:1,why:"Volunteer and convenience sampling can overrepresent particular experiences."},
      {q:"When two stakeholder groups disagree, the analyst should first:",options:["Choose the senior person automatically","Hide the disagreement","Record the conflict and investigate goals, constraints, and decision authority","Average the statements"],answer:2,why:"Conflict is a requirements issue that needs evidence and an authorized resolution process."}
    ],
    trueFalse:[
      {q:"A large response count guarantees an unbiased survey.",answer:false,why:"A large but unrepresentative or badly worded survey can produce confidently misleading results."},
      {q:"Stakeholder comments are evidence, not automatically approved requirements.",answer:true,why:"Comments must be interpreted, reconciled, checked, and validated within scope and constraints."},
      {q:"Using several elicitation techniques can reveal contradictions that one technique misses.",answer:true,why:"Triangulation improves understanding and makes disagreement visible."}
    ],
    problems:[
      {title:"Repair a leading survey",level:"Question design",question:"A survey asks, 'Wouldn't the convenient new advising app save you time?' Explain two defects and rewrite it as one closed and one open question.",solution:"Defects include leading wording, assumed convenience, and a predicted benefit. Closed: 'During registration, how long do you usually spend arranging an advising appointment?' with balanced time ranges. Open: 'Describe any difficulty you experience when arranging an advising appointment.'"},
      {title:"Interpret conflicting evidence",level:"Evidence reasoning",question:"A survey reports that 80% of students are satisfied, but observation shows repeated queue abandonment during peak days. Give two plausible explanations and the next investigation step.",solution:"The survey may underrepresent peak-day users, satisfaction may refer to advisor quality rather than access, or the scale may be too broad. Segment responses, examine sampling and question wording, interview users who abandoned the queue, and collect peak-period counts before concluding."},
      {title:"Choose an elicitation mix",level:"Technique selection",question:"A maintenance unit wants a new request system. Managers need reports, technicians use informal phone messages, and requesters cannot see status. Select three techniques and justify each.",solution:"Survey requesters to quantify common access and status problems; observe technicians to identify real triage and workaround behavior; conduct a workshop or interviews with managers and technicians to reconcile reporting, priority, and workflow rules. Each technique answers a different evidence need."}
    ],
    recap:"Good elicitation does not collect opinions indiscriminately; it chooses representative stakeholders, neutral questions, suitable techniques, and explicit limits.",
    takeaways:["Map stakeholders beyond direct users.","Choose the technique based on the evidence needed.","Pilot surveys and remove leading, combined, or ambiguous questions.","Separate findings from interpretations and assumptions.","Treat contradictions as investigation targets, not inconvenient noise."]
  },
  5: {
    title:"Requirements Quality",kicker:"Turn evidence into testable obligations",summary:"Transform stakeholder evidence into clear, atomic, feasible, necessary, consistent, prioritized, verifiable, and traceable requirements.",
    objectives:["Distinguish functional, non-functional, and business-rule statements.","Diagnose common requirement defects.","Rewrite requirements with measurable conditions and outcomes.","Build traceability from source through design and verification."],
    concepts:[
      ["Functional requirement","Describes a service, behavior, calculation, data transformation, or response the system must provide."],
      ["Non-functional requirement","Constrains quality or operation: performance, reliability, availability, usability, security, privacy, accessibility, maintainability, or compliance."],
      ["Business rule","A policy, definition, constraint, or calculation that exists because of the organization or domain, not merely because of software design."],
      ["Atomicity","One requirement should express one obligation so it can be prioritized, changed, traced, and tested independently."],
      ["Verifiability","A requirement needs observable acceptance conditions. Words such as easy, fast, reliable, and user-friendly require measures and context."],
      ["Traceability","Links the requirement to evidence, stakeholder source, priority, model, screen, implementation decision, and test so changes can be assessed."]
    ],
    handsOn:[["Classify","Sort statements into functional requirements, quality requirements, business rules, constraints, and design decisions."],["Diagnose","Label ambiguity, combination, incompleteness, inconsistency, infeasibility, or non-verifiability."],["Rewrite","Add actor or trigger, required behavior, conditions, measurable outcome, and verification method."]],
    mcqs:[
      {q:"Which statement is most verifiable?",options:["The portal shall be easy to use","The portal shall usually respond quickly","At least 90% of first-time users shall complete booking within three minutes without assistance","The interface shall look modern"],answer:2,why:"It defines users, task, success rate, time, and assistance condition."},
      {q:"Which is a business rule?",options:["The system shall use blue buttons","Commission shall not be less than zero","The database shall use PostgreSQL","The page shall have three columns"],answer:1,why:"The nonnegative commission rule comes from domain policy and constrains calculation regardless of interface or technology."},
      {q:"Why is 'The system shall validate and save the form' potentially defective?",options:["It is too measurable","It combines separate obligations","It contains no verb","It is necessarily infeasible"],answer:1,why:"Validation and saving may have different rules, priorities, failure behavior, and tests."},
      {q:"Which link belongs in a traceability record?",options:["Requirement to its source and verification method","Font to developer preference only","Every sentence to the same stakeholder","Requirement to an unrelated screen"],answer:0,why:"Traceability explains origin, downstream realization, and how compliance will be checked."}
    ],
    trueFalse:[
      {q:"A mathematically possible output is automatically valid in the business domain.",answer:false,why:"Business invariants such as nonnegative commission may exclude mathematically possible values."},
      {q:"A non-functional requirement should include a measure and operating condition where practical.",answer:true,why:"Targets such as availability or response time need a workload, period, population, or environment to be testable."},
      {q:"Traceability is useful only after implementation begins.",answer:false,why:"It begins with stakeholder evidence and supports analysis, design, change impact, validation, and testing."}
    ],
    problems:[
      {title:"Rewrite a usability requirement",level:"Quality specification",question:"Rewrite: 'The system shall be easy to use.' Include a target population, task, measure, and condition.",solution:"Example: 'After no more than five minutes of orientation, at least 90% of first-time student users shall complete an appointment-booking task within three minutes without staff assistance.' The exact targets must be justified by the project context."},
      {title:"Prevent negative commission",level:"Business rule",question:"A commission formula is 5% of sales above AED 10,000. A novice implementation returns a negative amount when sales are below the threshold. Write the rule and three boundary tests.",solution:"Rule: Commission = max(0, 0.05 × (sales − 10,000)). Tests: sales 15,000 → 250; sales 10,000 → 0; sales 8,000 → 0. Returns or clawbacks require a separate approved rule."},
      {title:"Specify robustness",level:"Non-functional reasoning",question:"Turn 'The appointment system shall be robust' into three measurable requirements using restart time, event failure rate, and data corruption.",solution:"Examples: restore service within two minutes of an application-server failure; fewer than 0.05% of processed events cause service failure under the stated workload; no incomplete appointment record remains after an interrupted transaction, with corruption probability below an approved threshold. Each requires a defined test environment and observation period."}
    ],
    recap:"Requirements are decision and verification instruments. Quality comes from precise obligations, justified measures, domain rules, and visible traceability.",
    takeaways:["Do not confuse stakeholder statements with validated requirements.","Keep each requirement atomic where possible.","Replace vague quality words with measures and conditions.","Capture domain invariants and boundary behavior explicitly.","Trace every important requirement from evidence to test."]
  },
  6: {
    title:"Use Cases and Workflows",kicker:"Model user goals and system behavior",summary:"Describe who interacts with the system, what goal they pursue, the normal and alternative behavior, and how work flows through decisions and responsibilities.",
    objectives:["Identify actors and user-goal use cases.","Write detailed use-case narratives with alternatives and exceptions.","Model workflows with actions, decisions, concurrency, and responsibility.","Validate consistency among requirements, use cases, activities, and mockup flows."],
    concepts:[
      ["Actor","An actor is an external role that interacts with the system. It represents responsibility or behavior, not a named individual."],
      ["Use case","A use case describes a goal that produces value for an actor through interaction with the system."],
      ["Precondition and trigger","A precondition must already be true; a trigger starts the use case. Confusing them produces incomplete behavior."],
      ["Normal flow","The main successful interaction written as clear actor-system steps."],
      ["Alternative and exception flow","Valid variations and failures are modeled explicitly so design and testing do not cover only the happy path."],
      ["Activity model","Shows workflow sequence, decisions, loops, parallel paths, and responsibility across a process or use case."]
    ],
    handsOn:[["Name goals","Replace interface actions such as 'click button' with actor goals such as 'reschedule appointment'."],["Write flows","Create a normal flow, one alternative, and one failure path for a priority goal."],["Cross-check","Walk through the activity model and mockup to confirm every use-case step has a system response."]],
    mcqs:[
      {q:"Which is the best use-case name?",options:["Appointment button","Manage database","Reschedule advising appointment","Blue screen"],answer:2,why:"It expresses an actor goal with a meaningful outcome."},
      {q:"Which statement is a precondition?",options:["The student selects Confirm","The student has an active appointment","The system displays an error","The advisor receives a notification"],answer:1,why:"It must already be true before rescheduling begins."},
      {q:"Where should an invalid payment response be described?",options:["Only in the title","In an exception or alternative flow","As an actor","Outside every model"],answer:1,why:"The use case must describe how the system responds when the normal success path cannot continue."},
      {q:"What does a decision node represent in an activity model?",options:["A database table","A condition that selects among paths","An actor name","A project milestone"],answer:1,why:"Guards determine which outgoing path is taken."}
    ],
    trueFalse:[
      {q:"A use case should describe interface layout in detail.",answer:false,why:"It should focus on actor-system behavior and outcomes; layout belongs in interaction design."},
      {q:"One person can act in different actor roles in different situations.",answer:true,why:"Actors represent roles, so the same person may be a requester, approver, or administrator."},
      {q:"Alternative flows are optional when the system has validation errors.",answer:false,why:"Important validation, failure, cancellation, and recovery behavior must be represented and tested."}
    ],
    problems:[
      {title:"Repair a screen-oriented use case",level:"Goal modeling",question:"A draft use case is called 'Click Submit Button' and contains: open page, click field, type, click submit. Rewrite the goal and identify information missing from the narrative.",solution:"A goal might be 'Submit maintenance request.' Missing information includes actor, trigger, preconditions, required data, validation, system responses, confirmation, duplicate handling, alternatives, exceptions, postconditions, and related requirements."},
      {title:"Add an exception flow",level:"Behavior analysis",question:"Normal flow: student selects a slot, confirms, and receives an appointment. During confirmation, another student reserves the same slot. Write an exception flow.",solution:"The system detects that the slot is no longer available, does not create a conflicting appointment, informs the student, refreshes available slots, preserves appropriate entered information, and returns the student to selection. The use case ends without an appointment unless another slot is confirmed."},
      {title:"Check model consistency",level:"Cross-model validation",question:"The use case includes advisor approval, but the activity model sends every request directly to confirmation and the mockup has no approval state. Explain the inconsistency and required corrections.",solution:"The same business behavior is represented differently. Confirm whether approval is a validated rule. If required, add the approval decision, pending and rejected paths, notifications, status data, screens, and tests. If not required, remove it from the use case and traceability records through controlled change."}
    ],
    recap:"Use cases and workflows make behavior testable by showing goals, responsibilities, sequence, decisions, alternatives, and system responses.",
    takeaways:["Actors are roles outside the system boundary.","Name use cases by user goals, not interface controls.","Separate triggers, preconditions, steps, and postconditions.","Model alternatives and failures—not only the happy path.","Walk through requirements, use cases, activities, and screens together."]
  },
  7: {
    title:"Domain Models and Interaction Design",kicker:"Keep concepts data behavior and screens consistent",summary:"Discover the important domain concepts and relationships, then design mockups that support validated tasks and improve through usability evidence.",
    objectives:["Identify domain classes without confusing them with screens or database tables.","Represent attributes, associations, multiplicity, and important constraints.","Connect domain information to use cases and mockup screens.","Test Version 1, improve Version 2, and compare the evidence."],
    concepts:[
      ["Domain class","A meaningful business concept about which the system must remember information or enforce behavior, such as Appointment, Student, Advisor, or ActionItem."],
      ["Attribute","A property needed to describe or distinguish an instance. Attributes should be justified by requirements and use cases."],
      ["Association","A meaningful relationship between concepts. Its name and direction should explain the business meaning."],
      ["Multiplicity","States how many instances may participate, revealing rules such as one advisor having many appointments while each appointment has one assigned advisor."],
      ["Interaction design","Organizes information, actions, navigation, feedback, validation, and recovery so users can complete goals safely and efficiently."],
      ["Iterative usability testing","Version 1 is tested with representative users; evidence is prioritized; Version 2 implements meaningful changes; retesting checks whether performance improved."]
    ],
    handsOn:[["Discover","Underline domain nouns in requirements, remove duplicates and interface terms, then define each remaining concept."],["Connect","Check that every screen field and important action has support in the requirements, use case, workflow, and domain model."],["Improve","Run three user tasks on Version 1, record evidence, redesign at least three issues, and compare Version 2 with a retest."]],
    mcqs:[
      {q:"Which is most likely a domain class?",options:["Submit button","Appointment","Blue color","Login screen"],answer:1,why:"Appointment is a persistent business concept; the other choices are interface or design elements."},
      {q:"What does multiplicity 1..* mean?",options:["Zero or one","Exactly one","One or more","Any number including zero"],answer:2,why:"The lower bound is one and the upper bound allows many."},
      {q:"A mockup field has no related requirement, use-case step, or domain attribute. What should the team do?",options:["Keep it because it looks useful","Investigate and either justify or remove it","Hide it in the appendix","Call it a non-functional requirement"],answer:1,why:"Unsupported features create scope and consistency problems; evidence and traceability should justify them."},
      {q:"Which evidence best supports a Version 2 improvement?",options:["The designer prefers it","Three of five users failed the same task and retest users then succeeded","The color is fashionable","The screen contains more fields"],answer:1,why:"Observed task failure and improved retest results provide direct usability evidence."}
    ],
    trueFalse:[
      {q:"Every noun in a requirement should become a separate domain class.",answer:false,why:"Nouns are candidates; analysts remove duplicates, values, roles, events, implementation terms, and irrelevant concepts."},
      {q:"A domain model and an interface mockup should be checked for information consistency.",answer:true,why:"Fields, states, relationships, and actions should be supported by the domain and behavioral models."},
      {q:"Changing colors alone always counts as a meaningful Version 2 improvement.",answer:false,why:"A cosmetic change counts only when usability or accessibility evidence shows it addresses a real problem."}
    ],
    problems:[
      {title:"Build a small domain model",level:"Conceptual modeling",question:"An advising appointment is requested by one student, assigned to one advisor, may contain several agreed action items, and each action item belongs to one appointment. Identify classes and multiplicities.",solution:"Classes: Student, Advisor, Appointment, ActionItem. Student 1 to Appointment 0..*; each Appointment has exactly 1 Student. Advisor 1 to Appointment 0..*; each Appointment has exactly 1 assigned Advisor. Appointment 1 to ActionItem 0..*; each ActionItem belongs to exactly 1 Appointment. Optional status or time values are attributes unless independently modeled."},
      {title:"Trace a screen to the models",level:"Design consistency",question:"A Version 1 screen allows students to assign an advisor rating before an appointment occurs. The requirements mention post-appointment feedback only. Diagnose and correct the design.",solution:"The screen violates timing and state rules. Link feedback to a completed appointment, show the action only after completion, define required data and privacy rules, update the use-case alternative and domain state if needed, and test that premature feedback is prevented."},
      {title:"Compare Version 1 and Version 2",level:"Usability evidence",question:"In Version 1, four of five users cannot find Reschedule under Settings. Version 2 adds a Reschedule action to the appointment card; two retest users complete the task without help. Write the comparison conclusion and one limitation.",solution:"The change is supported by repeated Version 1 failure and successful Version 2 retest, so discoverability appears improved for this task. Limitation: the retest sample is only two users and may include learning effects; further testing with new representative users would strengthen the conclusion."}
    ],
    recap:"A defensible design keeps domain concepts, behavioral models, screens, requirements, and usability evidence aligned through traceability and iteration.",
    takeaways:["Model domain meaning, not interface widgets.","Use multiplicity to express important business constraints.","Every important screen element needs an evidence and model link.","Test tasks without coaching users through the design.","Compare Version 1 and Version 2 using observed evidence and retest results."]
  }
};
