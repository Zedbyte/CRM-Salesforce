# Phase 1: Requirement Analysis & Planning
This phase served as the foundation of the Tours & Travels CRM project. It involved understanding the travel industry’s pain points, identifying stakeholders, and transforming operational challenges into system requirements. By conducting research on real-world CRM usage in the travel domain, this phase laid out the scope, user needs, and the Salesforce tools necessary for implementation. It also defined the system's data model and security structure.

---

## Understanding Business Requirements
The first milestone centered on identifying the operational inefficiencies that travel agencies commonly face. These included manual booking processes, delayed communications with customers, lack of centralized feedback tracking, and poor collaboration across teams. Key stakeholders—such as travel agents, finance officers, and customers—were analyzed to identify their specific needs within the CRM. Common pain points were translated into system-level requirements like automation of bookings, centralized customer data, and real-time notification workflows.

Through this milestone, I learned how to align real-world business problems with technical requirements. It strengthened my understanding of the travel sector and clarified how Salesforce CRM can be positioned as a unified platform to address fragmented operations. It also helped me practice stakeholder analysis and needs prioritization.


## Defining Project Scope & Objectives
This milestone was focused on outlining the boundaries and goals of the CRM system. The system needed to manage the complete lifecycle from booking inquiries to feedback collection. It had to scale for global usage and include support for group bookings, membership tiers, pricing variations, and secure data access based on roles. Objectives were tied to operational improvements like automation, faster communication, and analytics reporting.

Defining the scope sharpened my skills in requirement delimitation. I learned the importance of clearly stating what the system will and will not do, especially in a time-boxed development cycle. This clarity guided development choices later and ensured focus on high-priority features.


## Gathering & Analyzing User Needs
This milestone addressed the behaviors and expectations of each user group within the CRM ecosystem—customers, travel agents, guides, finance users, and admins. User personas were developed to simulate real interactions, and tools like Miro boards and forms were used to visualize workflows and identify process bottlenecks. Key needs such as dynamic pricing, follow-ups, group travel handling, and multi-language support were captured.

By working through user simulations, I learned how important it is to empathize with users before designing solutions. The process emphasized mapping user journeys, identifying friction points, and ensuring the CRM offers value to every stakeholder group. It reinforced user-centric thinking in system design.


## Identifying Key Salesforce Features & Tools Required
Based on the requirements, this milestone focused on selecting the right Salesforce features to fulfill each business need. Custom objects like Booking, TravelPackage, and Feedback were planned alongside automation tools such as Flows, Process Builders, and Approval Processes. Programmatic features like Apex Triggers, Batch Apex, and LWCs were also identified. Security would be enforced through Profiles, Permission Sets, and Sharing Rules.

This task helped me match each business requirement with the corresponding Salesforce tool. It was an important step in learning how to balance declarative and programmatic capabilities, ensuring maintainability while enabling complex logic. It also highlighted the value of Salesforce’s built-in features in building robust enterprise applications.


## Designing Data Model and Security Model
The data model was carefully designed to reflect relational connections between objects. Booking was linked to Customer Info, TravelPackage, and Employee (Guide). Supporting objects like BookingGuest and Feedback ensured a 360-degree view of customer interactions. The security model was constructed with role hierarchies (Manager > Agent > Guide), field-level protections (e.g., billing data for Finance only), and record-level access control via Sharing Rules.

This milestone taught me how to design for both functionality and compliance. I gained a deeper understanding of Salesforce's data sharing architecture and how security requirements can impact usability. It was crucial in ensuring that only the right users access the right data without compromising performance or compliance.

---

# Phase 2: Salesforce Development – Backend & Configurations
This phase focused on configuring the backend data model and business logic of the Tours & Travels CRM using both declarative and programmatic tools in Salesforce. The goal was to define custom entities, enforce validation, automate booking workflows, and ensure scalable system behavior via Apex, Flows, Process Builder, and more. A total of 12 technical milestones were executed, each playing a role in building a reliable backend structure.

---

## Milestone 1: Salesforce Account Setup
A Salesforce Developer Edition account was created to serve as the secure and isolated environment for development, configuration, and testing. This allowed for full admin access and a clean slate to model the CRM from scratch.

This milestone introduced me to Salesforce's sandbox approach to development. I learned how crucial it is to isolate testing environments to prevent deployment of half-baked features or incorrect configurations into production. It also helped me get familiar with Developer Edition limitations and capabilities.

## Milestone 2: Custom Object Creation
Seven custom objects were created to represent CRM entities: `Customer_Info__`c, `Booking__c`, `BookingGuest__c`, `TravelPackage__c`, `BookingPayment__c`, `Employee__c`, and `Feedback__c`. Each object included primary fields and lookups to reflect business relationships such as bookings being linked to customers and travel packages.

This milestone deepened my understanding of Salesforce’s object schema. I learned how custom objects are more than just data holders—they define relationships, automation triggers, and UI behaviors across the platform.

## Milestone 3: Tab Creation
Each custom object was assigned a tab in the Lightning App to make them accessible through the UI. Tabs were grouped under a dedicated app for user convenience.

I discovered that thoughtful UI organization significantly improves user navigation. Even technical configurations like tab visibility directly impact business usability.

## Milestone 4: Custom Fields & Global Picklists
Custom fields, formulas, picklists, and roll-up summaries were added to each object. Notable logic includes:

```apex
// Age Calculation on Customer Info
FLOOR((TODAY() - Date_Of_Birth__c) / 365.25)

// Travel Amount Calculation
Total_Travel_Amount__c = Number_of_Travelers__c * Travel_Cost_Per_Person__c

// Accommodation Pricing
CASE(TEXT(Preferred_Accommodation__c),
  "Hotel", 3000,
  "Guest House", 4000,
  "Resort", 5000,
  ...
)
```
Creating these formulas taught me how to translate business pricing models and booking logic into executable Salesforce formulas. Every field defined here later powered reports, automation, and UI behavior.

## Milestone 5: Field Dependencies
Dependencies were set between picklists to control which values were shown based on prior selections. For example:


- If `Membership = VIP`, then `Preferred Accommodation = Luxury Hotel`

- If `Country = India`, then `City = Hyderabad, Delhi`


This milestone taught me how to improve UX and prevent invalid data entry by controlling data flow through intelligent dependencies.

## Milestone 6: Validation Rules
Validation rules ensured clean, logical, and mandatory data entry. Examples include:

```apex
// Phone must be 10 digits
LEN(Phone__c) <> 10

// Booking Status must be "Pending" on creation
AND(ISNEW(), NOT(ISPICKVAL(Status__c, "Pending")))
```

This step helped me grasp how small logical conditions can enforce business integrity at scale. It emphasized proactive error prevention during data entry.

## Milestone 7: Approval Process
An approval process was implemented for Booking Cancellations. When a user sets the status to "Cancelled" and confirms, a multi-step approval is triggered:


If approved: `Approval_Status__c` = Approved and customer gets a confirmation email

If rejected: Status reverts to "Confirmed" and a rejection email is sent


This milestone showed me how Salesforce can orchestrate managerial workflows with notifications and conditional field updates—all without manual tracking.

## Milestone 8: Flows
A Record-Triggered Flow prevented overbooking by validating the number of `BookingGuest__c` records against the `Number_of_Travelers__c` field on `Booking__c`. If the guest count exceeded the allowed number, the flow blocked the save and displayed an error.

This taught me how flows can enforce rules across related records dynamically. I realized Flows are essential for handling real-time business validations without code.

## Milestone 9: Workflow Rule
A workflow rule was created to generate follow-up tasks after a trip ends. When a booking’s status becomes "Completed", a task is auto-assigned to the agent:

Due Date: 3 days after trip end

Task Subject: “Follow up for feedback”

This automation reinforced the importance of customer feedback and follow-through. It showed me how even simple workflows can improve service quality.

## Milestone 10: Process Builder
A Process Builder was configured to update the booking status automatically:

Trigger: When `BookingPayment__c.Payment_Status__c = "Completed"`

Action: Update related `Booking__c.Status__c = "Confirmed"`

This milestone helped me automate handoffs between departments (e.g., Finance to Travel). I saw how cross-object updates can eliminate manual coordination.

Milestone 11: Apex Triggers
Two triggers were developed in `BookingTrigger` with a helper class:

```apex
// Auto-create Booking Payment
payment.Booking__c = booking.Id;
payment.Payment_Status__c = 'Pending';

// Auto-create Guests
for (Integer i = 1; i <= booking.Number_of_Travelers__c; i++) {
  guest.Name = 'Guest ' + i;
}
```

By modularizing logic via BookingTriggerHandler, I learned how to write clean, testable Apex code. I also practiced governor limit awareness and bulk-safe patterns.

## Milestone 12: Asynchronous Apex
Three types of async logic were added to improve performance and scalability:

1. Future Method (Booking Confirmation)
```apex
@future
public static void sendBookingConfirmation(Set<Id> bookingIds) { ... }
```
Triggered when booking status changes to "Confirmed", this sends confirmation emails in the background.

2. Queueable + Schedulable (Tour Reminder)
```apex
System.schedule('Daily Reminder', '0 0 6 * * ?', new BookingReminderScheduler());
```
Sends a reminder 3 days before the tour using a scheduled job.

3. Batchable + Schedulable (Payment Reminder)
```apex
global void execute(Database.BatchableContext BC, List<Booking__c> bookings) {
    // Email logic
}
```
Sends payment reminders for pending bookings created yesterday.

This milestone introduced me to Salesforce's background processing model. It was a highlight in terms of architecture learning. I grasped how to optimize long-running jobs while respecting limits and ensuring timely customer communication.

---

# Phase 3: UI/UX Development & Customization

This phase focuses on user interface setup, layout optimization, dynamic form behavior, role-based user configuration, report creation, dashboard visualizations, and Lightning Web Component (LWC) development. These milestones were implemented to ensure the Salesforce Tours & Travels CRM delivers a user-friendly, dynamic, and data-rich experience for all roles.

---

## Milestone 13: The Lightning App

A custom Lightning App named **Tours & Travels CRM** was created using the App Manager to serve as the central UI for all end users, especially system admins, agents, and managers.

**Steps Followed:**

- Navigated to App Manager → Clicked *New Lightning App*
- Entered App Name: `Tours & Travels CRM`
- Uploaded a relevant travel-themed logo
- Left default settings under App Options and Utility Items
- Moved objects to Selected Items: `Customer Info`, `TravelPackages`, `Booking`, `Booking Payments`, `BookingGuests`, `Employees`, `Feedback`, `Task`, `Reports`, `Dashboards`
- Assigned to `System Administrator` profile

The app provided a unified workspace integrating all tabs, reports, and custom components into one cohesive experience.

This milestone introduced the importance of App-level visibility control, branding, and navigation in Lightning. It laid the foundation for role-based app access and UI simplification for future users.

## Milestone 14: Editing of Page Layouts

Page layouts for all major objects were restructured to group similar fields and enhance UI clarity. This included:

- `Customer Info`, `BookingGuest`, `TravelPackage`, `Employee`, `Booking`, `Booking Payment`, and `Feedback`

**Key Changes Made:**

- Grouped similar data using sections (e.g., Contact Info, Booking Metadata)
- Reordered fields so that critical ones (e.g., `Booking Status`, `Customer`) appear on top
- Removed clutter and blank spaces for better readability

Thoughtful layout design boosts efficiency and usability. I realized that non-technical users rely on clean forms to enter accurate data, so structuring layouts logically is essential.

## Milestone 15: Dynamic Forms

Dynamic Forms were enabled on the `Booking` object to conditionally show or hide fields based on status.

**Steps Taken:**

- Opened a Booking record → Gear icon → *Edit Page*
- Upgraded to Dynamic Forms → Selected `Booking PageLayout`
- Set conditional visibility:
  - Show `Cancellation Date`, `Cancel Confirmation`, `Approval Status` **only if** `Booking Status = Cancelled`

The record page became responsive, showing only relevant fields based on context.

Dynamic Forms are powerful for decluttering the UI. They help tailor forms based on business logic, making them less confusing for end users.

## Milestone 16: Users

Created user records to simulate real-world usage and enforce role-based security. Steps included:

- Setup → Users → *New User*
- Example User: Michael Jackson (Role: Travel Agent Manager, Profile: Travel Agent)
- Created several other users with `Travel Agent Role`

User creation is central to simulating role-based operations. It also plays a key part in permissions, testing, and workflows across the CRM.

## Milestone 17: Reports

Created actionable reports to support financial and operational insights.

**Key Reports:**

- **Monthly Revenue Report** (Pie Chart with bucketed Total Billing Amount)
- **Pending Payments** – Filtered for `Payment_Status__c = 'Pending'`
- **Top Travel Packages** – Grouped by `TravelPackage__r.Name`
- **Employee Role Distribution** – Grouped by `Role__c`

5 more reports covering feedback analysis, customer segmentation, and agent performance.

Salesforce Reports offer powerful real-time analytics. I learned to apply groupings, filters, and bucketing to meet business KPIs and share insights with specific roles.

## Milestone 18: Dashboards

A main dashboard titled **Tours & Travels Dashboard** was created and integrated into the app. Widgets added:

- **Monthly Revenue** – Pie chart
- **Pending Payments**
- **Top Travel Packages**
- **Employee Role Breakdown**

**Other Dashboards:**

- Created 2 more dashboards based on reports from Milestone 17
- Tailored for specific teams (e.g., Finance, Operations)

Dashboards bring insights to life. By selecting the right visualization (pie, bar, table), I improved how users interpret and act on data.


## Milestone 19: Lightning Web Component (LWC) Creation

A custom LWC named `travelPackageSelector` was developed to display travel packages based on country selection.

**Use Case:**  
Customer selects a country → LWC displays matching `TravelPackage__c` records.

**Key Apex Logic:**

```apex
public static List<TravelPackage__c> getPackagesByCountry(String country) {
    return [SELECT Name, Duration_in_Days__c FROM TravelPackage__c WHERE Country__c = :country];
}
```

**Component Features:**

- `lightning-combobox` to select country
- Dynamically loads travel packages using `getPackagesByCountry()`
- Displays package details: name, duration, transport, guide, etc.

**Frontend Sample Logic:**

```apex
handleCountryChange(event) {
    this.selectedCountry = event.detail.value;
    getPackagesByCountry({ country: this.selectedCountry })
      .then(result => { this.packages = result; })
      .catch(error => { this.error = error.body.message; });
}
```

This milestone was my entry into LWC development. I gained experience in frontend-backend integration, data binding, and dynamic display of records.

---

## Milestone 20: Lightning App Page Creation

The `travelPackageSelector` LWC was embedded into a dedicated App Page:

- Created App Page: `Travel Package Selector`
- Layout: Single Region
- Dragged and dropped the LWC component
- Activated and linked to the `Tours & Travels CRM` App

From the App Launcher, both the CRM and LWC App Page are accessible. Users can now interactively explore packages by country.

App Pages offer flexibility in UX design. Embedding reusable LWCs allows users to get real-time results without navigating across records or tabs.

---

## Milestone Summary Table

| Milestone     | Key Deliverable                                                        |
|---------------|------------------------------------------------------------------------|
| Milestone 13  | Created Lightning App with relevant tabs and admin access              |
| Milestone 14  | Customized page layouts for all major objects                          |
| Milestone 15  | Enabled Dynamic Forms with conditional visibility for Booking records  |
| Milestone 16  | Created user records with appropriate roles and profiles               |
| Milestone 17  | Built revenue, operations, and user performance reports                |
| Milestone 18  | Designed multiple dashboards with key charts and KPIs                  |
| Milestone 19  | Developed and deployed a dynamic LWC to filter Travel Packages         |
| Milestone 20  | Created a custom App Page and embedded the LWC for easy access         |

---

# Phase 4: Data Migration, Testing & Security

This phase focuses on migrating critical data, validating system functionality, and implementing security controls to ensure operational integrity in the Salesforce Tours & Travels CRM. By leveraging tools like Field History Tracking, Matching Rules, Profiles, Roles, and Apex Test Classes, this phase ensures that the CRM system is both robust and secure.

---

## Milestone 21: Field History Tracking

Field History Tracking was enabled to maintain an audit trail of key business data changes. On the `Booking` object, history tracking was activated for:
- `Number of Travelers`
- `Booking Status`
- `Travel Package`

On the `TravelPackage` object, it was enabled for:
- `Price Per Person`
- `Availability Status`

This ensures all stakeholders and administrators can track what changes were made, when, and by whom, using the History related list.

Tracking field history plays an essential role in operational transparency. It gives business teams and auditors the tools needed to review changes over time and troubleshoot discrepancies effectively.

---

## Milestone 22: Duplicate & Matching Rules

To ensure the integrity of customer data, Matching and Duplicate Rules were created for the `Customer Info` object.

**Matching Rule:**
- Fields: `Email`, `Phone`
- Method: Exact
- Purpose: Match records with identical phone and email combinations

**Duplicate Rule:**
- Action: Allow but report duplicate
- Alert Message: "Email and Phone must be Unique"

This rule combination prevents redundancy in the customer database while still allowing users to continue working without disruption.
 
Duplicate management is critical in CRM environments. Using matching logic on high-uniqueness fields like phone and email ensures clean data while supporting user workflows.

---

## Milestone 23: Profile Management

Profiles were configured to control baseline access levels for users. Two major custom profiles were created:
- `Travel Agent Profile`
- `Travel Agent Manager Profile`

Each profile was customized with:
- Object permissions
- Field-level security
- Tab visibility settings

These customizations ensured users only accessed what was necessary based on their job role.

Profiles provide the foundation for access control in Salesforce. This exercise helped me understand the principle of least privilege—grant only the permissions needed, nothing more.

---

## Milestone 24: Roles & Role Hierarchy

A top-down role hierarchy was implemented:
- Travel Agent Manager (top)
- Travel Agent
- Tour Guide

Managers can see records owned by subordinates, but peer access is restricted. Tour Guides have limited visibility, promoting data confidentiality.

Role hierarchies are not just about reporting; they determine data visibility. Proper role design aligns with organizational structure while maintaining control.

---

## Milestone 25: Permission Sets

A `Permission Set` named **Extra Permission For Travel Agent Manager** was created to allow flexibility without editing profiles.

- Object: `TravelPackage`
- Permissions: Read, Edit, Create, Delete
- Assigned To: Users with Travel Agent Manager Role

Permission Sets add modularity to security management. They allow scalable, targeted permissions without reworking entire profile structures.

---

## Milestone 26: Sharing Settings

**Organization-Wide Defaults:**
- `Customer Info`: Set to Private

**Sharing Rule Created:**
- Label: `Customer records auto-shared with Tour Guide Role`
- Shared by: Travel Agent Role
- Shared with: Tour Guide Role
- Access: Read Only

This ensures guides see only relevant customer information for trips they’re assigned to.

OWDs and Sharing Rules go hand-in-hand to protect sensitive data while enabling collaboration where necessary.

---

## Milestone 27: Test Classes

Apex Test Class `BookingTriggerTest` was written to validate Booking automation.

**Key Tests:**
- Created test data for Customer, Package, and Booking
- Validated that:
  - `Booking Payment` record auto-generates with status ‘Pending’
  - Correct number of `BookingGuest` records are created
- Used `System.assertEquals()` for validation

Writing test classes forces you to think through all scenarios. It’s also essential for deploying Apex code and maintaining test coverage.

---

## Milestone 28: Preparing Test Cases & Fixing Defects

A total of **12 test cases** were written and executed across all major modules.

| No. | Test Case Name              | Object(s) Involved       | Steps                                           | Expected Result                                                   | Status |
|-----|-----------------------------|---------------------------|--------------------------------------------------|--------------------------------------------------------------------|--------|
| 1   | Customer Creation           | Customer Info             | Create and save a customer                       | Customer record is created and visible in list view                | Passed |
| 2   | Booking Creation            | Booking, Payment, Guests  | Create a booking                                 | Auto-creation of Booking Payment and BookingGuest records          | Passed |
| 3   | Payment Status Update       | Payment, Booking          | Update payment to ‘Completed’                    | Booking status changes to ‘Confirmed’; Email sent                  | Passed |
| 4   | Trip Cancellation UI        | Booking                   | Change status to ‘Cancelled’                     | Cancellation-related fields become visible                         | Passed |
| 5   | Customer Record Updates     | Customer Info             | Edit email or city                               | Validation enforced and changes saved                              | Passed |
| 6   | Duplicate Prevention        | Customer Info             | Duplicate email and phone                        | Warning displayed                                                  | Passed |
| 7   | Payment Reminder Notification | Apex                     | Booking starts in 3 days                         | Email reminder sent                                                | Passed |
| 8   | Booking Update              | Booking                   | Change travelers or package                      | Field calculations update                                          | Passed |
| 9   | Employee Creation           | Employee                  | Add new employee                                 | Record is created and listed                                       | Passed |
| 10  | Report Creation             | Reports                   | Generate booking report                          | Accurate records shown                                             | Passed |
| 11  | Dashboard Creation          | Dashboards                | Create booking/payment dashboard                 | Visual KPIs displayed                                              | Passed |
| 12  | Travel Package Creation     | TravelPackage             | Add new travel package                           | Visible in tab and list view                                       | Passed |

Test case preparation sharpens the focus on both functionality and usability. Defect detection early in the testing phase reduces rework and strengthens system reliability.

---

## Milestone 29: Data Import Wizard

The **Data Import Wizard** was used to import sample data for testing and demonstration purposes.

**Imported Objects:**
- `Customer Info` (20 records)
- `Travel Package` (20 records)
- `Employee` (20 records)

### Step-by-Step Summary

**Step 1: Data Preparation**
- CSVs were created with all required fields, standardized picklists, and lookup references
- Files: `Customer-Info.csv`, `Travel-Packages.csv`, `Employee.csv`

**Step 2: Data Import Wizard**
- Setup → Data Import Wizard → Launch Wizard
- Selected appropriate object and upload CSV
- Selected action: *Add New Records*

**Step 3: Field Mapping**
- Verified auto-mapped fields
- Manually adjusted where needed for:
  - Picklists (e.g., City, Membership)
  - Lookup fields
  - Field-Level Security

**Step 4: Monitor Import Jobs**
- Navigated to Setup → Bulk Data Load Jobs
- Confirmed job status and record count
- Verified imported records in object tabs

Data import is more than just uploading a file—it requires format validation, field mapping, and post-import verification. Proper execution helps set up realistic datasets for testing and demo purposes.

---

# Phase 5: Deployment, Documentation & Maintenance

This final phase focused on the delivery, sustainability, and long-term usability of the Tours and Travels CRM system. It detailed the deployment mechanism, maintenance practices, monitoring procedures, issue resolution strategy, testing methodology, and proposed future enhancements to ensure the system remains robust and adaptable.

---

## Deployment Strategy

The deployment of Salesforce components was managed using **Change Sets**, a native Salesforce deployment tool that enables the transfer of metadata from one Salesforce org to another. Although the development and deployment were executed in a Salesforce Developer Edition, this step was simulated to mirror a real-world transition from a sandbox to production environment.

### Key Components Deployed via Change Set:
- Custom Objects: `Booking`, `TravelPackage`, `Customer Info`, etc.
- Custom Fields and Relationships
- Validation Rules, Flows, Workflow Rules, and Process Builders
- Apex Triggers and Classes
- Lightning Pages and Custom Tabs
- Reports and Dashboards
- Profiles, Roles, and Permission Sets

This approach allowed bundling and migrating related components together, ensuring consistency and reducing deployment errors. In a production scenario, Change Sets would be augmented by the Salesforce CLI or third-party tools like Gearset or Copado for DevOps support.

Deployment isn't just about pushing components—it requires dependency analysis, version tracking, and validation. Understanding the Change Set lifecycle enhanced my readiness for real-world team-based Salesforce deployments.

---

## Maintenance, Monitoring & Troubleshooting

To ensure long-term reliability, a structured maintenance and monitoring approach was outlined.

### Maintenance Activities:
- Regularly review and update Flows, Triggers, and Process Builders.
- Modify TravelPackage and Booking data based on new destinations or pricing.
- Adjust permission sets and profiles as team roles evolve.
- Review field history tracking logs for data integrity assurance.

### Monitoring Mechanisms:
- Use **Apex Jobs** to monitor scheduled background tasks.
- Utilize **Debug Logs** and **Developer Console** to investigate failures.
- Track **Workflow and Process Builder Logs** to validate automation activity.
- Check test coverage metrics before any code deployment.

### Troubleshooting Approach:
- Use Flow Debug Mode and log analysis to detect and resolve logic errors.
- Simulate user interactions to reproduce and isolate issues.
- Correct edge case failures in formulas, email templates, or trigger logic.
- Leverage Apex logs to pinpoint exact failure lines and fix them accordingly.

Proactive monitoring minimizes downtime and improves user experience. This milestone taught me how to handle real-time issues through Salesforce’s built-in tools while balancing between user access and system health.

---

## Testing Approach

Testing was an integral part of every development activity. Both **manual** and **automated** testing approaches were adopted to ensure full coverage across business processes and technical components.

| Feature                         | Test Type         | Method                                   |
|---------------------------------|-------------------|------------------------------------------|
| Object Record Creation          | Manual            | Form-based data entry and validation     |
| Booking Automation              | Apex Test Class   | `BookingTriggerTest` with assertions     |
| Guest Count Validation (Flow)   | Manual & Flow Debug | Simulated mismatches and error handling |
| Approval Process                | Manual            | Walkthrough of Booking Cancellation      |
| Process Builder & Workflows     | Manual            | Triggered via record updates             |
| Reports & Dashboards            | Manual            | Filter-based data accuracy checks        |
| Dynamic Forms Visibility        | Manual            | Conditional field rendering test         |
| Data Import                     | Manual            | Salesforce Data Import Wizard validation |

Screenshots were collected to demonstrate both input conditions and output results. These visual proofs were embedded throughout the project documentation to enhance traceability and understanding.

Testing is iterative. Even minor configuration changes can introduce regressions, and it’s essential to test both typical and edge case user actions. The use of test classes also helped maintain deployment readiness by satisfying Salesforce’s coverage requirements.

---

## Documentation Highlights

Comprehensive documentation was developed for each project milestone, structured for both technical and non-technical audiences. It served as the single source of truth for system behavior, architecture, and configuration.

### Key Inclusions:
- **Data Models** and relationship diagrams
- **Automation Blueprints** including validation rules, flows, and formula breakdowns
- **Apex Codebase** with triggers, classes, helper methods, and unit test reports
- **Role Hierarchy and Permission Maps** to explain access control
- **Report and Dashboard Snapshots** with contextual summaries
- **Screenshots** showcasing the input and output of every Salesforce feature (e.g., LWC, Approval Processes, Email Alerts)

Proper documentation makes a system maintainable. It bridges the gap between developer intent and user understanding, which is essential when handing over the solution to stakeholders or other team members.

---

## Future Enhancements

Several forward-looking improvements were proposed to future-proof the system and deliver more personalized customer experiences.

| Feature                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Chatbot Integration         | Connect Einstein Bot for real-time booking support and FAQs                 |
| AI-Based Recommendations    | Suggest travel packages based on customer preferences and behavior          |
| Mobile Optimization         | Create mobile-first layouts for improved usability on small devices         |
| Real-Time Travel APIs       | Integrate third-party APIs for live weather, traffic, and transport updates |
| Sentiment Analysis          | Use AI to assess customer feedback and derive satisfaction scores           |

A system’s value multiplies with thoughtful enhancements. Salesforce provides scalable options—from AI tools to mobile customization—that can evolve the platform beyond its initial implementation.

---

# Final Summary & Conclusion

The **Tours and Travels CRM** capstone project demonstrated the full end-to-end lifecycle of implementing a customized CRM application on the Salesforce platform. Starting from domain research and requirement gathering, the project progressed through structured development, dynamic UI/UX customization, rigorous testing, and deployment simulation. Each phase not only added technical depth but also reflected real-world business workflows and stakeholder needs.

From designing data models and setting up security roles to building complex automation with Apex and Flow, the project incorporated nearly every core feature of Salesforce — including objects, validation rules, approval processes, reports, dashboards, and Lightning Web Components (LWC). Every implementation choice was made with a focus on user experience, scalability, and maintainability.

Beyond the technical deliverables, a major emphasis was placed on **documentation**, testing, and future planning. The project included:
- Detailed testing scenarios with screenshots
- Debugging strategies using Salesforce tools
- Deployment plans using Change Sets
- Role-specific access control mechanisms
- Real-world automation using asynchronous Apex

The CRM successfully simulated a functioning travel agency ecosystem — managing bookings, travel packages, agents, customers, and payments — all while ensuring data integrity, business automation, and user accessibility.

## What I Learned

This capstone pushed me to apply both **declarative and programmatic features** of Salesforce in a cohesive way. I learned how to:
- Translate user and business requirements into technical specifications
- Use tools like Data Import Wizard, Flow Builder, and Apex Scheduler effectively
- Handle debugging, exception handling, and test class creation in Apex
- Maintain user-centric design through Lightning App pages, dynamic forms, and reports
- Adopt real-world deployment strategies and best practices for CRM maintenance

The entire project serves as both a **portfolio showcase** and a **learning archive** that reflects hands-on Salesforce development, end-user empathy, and enterprise-grade solution architecture.

---

With the foundation now in place, this CRM system can be enhanced with features such as AI recommendations, chatbot integration, and API connectivity to elevate it into a more intelligent, connected platform for global travel businesses.

**End of Documentation**

## References

- Salesforce Data Modeling Guide  
- Salesforce Official Documentation  
- Travel Industry Blogs and CRM Use Cases  
- ChatGPT (for business analysis synthesis and content drafting)

---
