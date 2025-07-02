
# Phase 1: Requirement Analysis & Planning


### Objective
This phase focuses on understanding the business domain of the Tours & Travels industry, identifying pain points in existing operations, and clearly defining the functional and non-functional requirements for a CRM system. The goal is to ensure the CRM solution is user-centric, scalable, and aligned with real-world business needs.


## 1. Understanding Business Requirements

### Industry Context

Travel agencies globally face operational complexity due to scattered processes, manual bookings, poor visibility across teams, and lack of automation. These inefficiencies impact customer satisfaction and scalability. A centralized CRM built on Salesforce can help overcome these limitations and digitize core operations.

### Stakeholders Analyzed

- Travel Agents: Manage tour bookings, handle inquiries, coordinate with guides.

- Customer Service Managers: Address customer issues, monitor service quality, manage post-trip feedback.

- Finance Teams: Track revenue, manage invoices, oversee payment confirmation.

- System Admins: Configure the Salesforce environment, manage roles and access.

- Customers (End Users): Book trips, make payments, track booking status, and provide feedback.

### Pain Points in Existing Systems
> Derived from industry analysis, end-user behavior patterns, and stakeholder process studies.


| Challenge                    | Description                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| **Manual Booking Processes** | Booking via phone, email, or spreadsheets leads to delays, errors, and duplication           |
| **Delayed Communication**    | Customers are not informed in real-time about bookings, payment updates, or changes          |
| **Lack of Feedback Loop**    | Feedback is not consistently captured or tracked, leading to lost insights                   |
| **Disjointed Collaboration** | Travel agents, guides, and finance teams operate in silos without a common platform          |
| **No Real-Time Reporting**   | Agencies struggle to monitor performance metrics like customer retention and monthly revenue |



### Approach to Requirement Gathering

- Interview-Based Analysis of user roles (simulated via research tools like ChatGPT and domain literature).

- Study of Real-Time Use Cases using publicly available travel platforms and CRM evaluations.

- Reference Materials:
  - Salesforce Official Documentation
  - Trailhead Modules (CRM Basics, Travel Industry Use Cases, Data Modeling)
  - Google Search and Industry Blogs
  - ChatGPT for synthesizing general domain and process knowledge


### Key Business Requirements Identified

| Category                   | Requirement                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| Global Operations       | Support customers and travel packages across multiple countries         |
| Booking Flexibility     | Allow booking for families, groups, solo, and corporate packages        |
| Automation              | Automate booking status updates, payment reminders, feedback collection |
| Real-Time Communication | Send notifications for booking confirmation, payment status             |
| Task Management         | Assign agents and guides for trips using the Salesforce Task object     |
| Reporting & Analytics   | Monitor revenue, feedback scores, customer retention metrics            |
| Role-Based Access       | Define access by role: agents, guides, admins, finance team             |


## 2. Project Scope & Objectives

### Scope of the CRM Solution
- Develop a scalable Salesforce CRM tailored for global travel agencies.
- Manage the end-to-end booking lifecycle: inquiry → booking → payment → feedback.
- Implement custom objects, automation, UI, and analytics features.
- Ensure role-based access for different user groups.

### Key Objectives
- Reduce manual work through automation of key business workflows.
- Improve customer engagement via personalized, timely communication.
- Increase operational visibility with reporting dashboards and analytics.
- Enable collaboration between travel agents, guides, and finance departments.

## 3. Gathering & Analyzing User Needs

### User Groups Identified
- Customers
- Travel Agent Team
- Tour Guides
- Finance Department
- Admin Team

### Key Functional Requirements
| Function        | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| Onboarding      | Simplified onboarding and package selection for customers     |
| Booking Flow    | Transport and accommodation-based booking process             |
| Dynamic Pricing | Adjust pricing based on number of people and membership level |
| Confirmation    | Immediate confirmation via email for booking and payment      |
| Feedback Loop   | Follow-up tasks for collecting post-trip feedback             |


### Tools Used During Requirement Gathering
- Google Forms: Simulated method for gathering inputs
- Miro Boards: For visualizing user journeys and identifying process bottlenecks
- User Personas: Applied design thinking principles to guide system design

## 4. Identified Salesforce Tools & Features
| Category            | Tools/Features                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Custom Objects**  | `Booking__c`, `TravelPackage__c`, `Customer__c`, `Employee__c`, `BookingPayment__c`, `Feedback__c`, `BookingGuest__c` |
| **Standard Object** | `Task` (for follow-ups and assignment)                                                                                |
| **Automation**      | Flows, Workflow Rules, Process Builders, Approval Processes                                                           |
| **Apex**            | Triggers, Future Methods, Batch Apex, Queueable Apex, Test Classes                                                    |
| **UI Components**   | Lightning App Page, Dynamic Forms, Lightning Web Components                                                           |
| **Security**        | Profiles, Permission Sets, Field-Level Security, Record-Level Sharing                                                 |
| **Analytics**       | Custom Reports and Dashboards                                                                                         |
| **Email Services**  | Email Alerts and Templates for confirmations and reminders                                                            |

## 5. Data & Security Model (Planned)

### Data Model Structure
- Booking is linked to:
  - Customer__c
  - TravelPackage__c
  - Employee__c (as assigned guide)

- TravelPackage__c includes: destinations, transportation, availability, pricing
- BookingPayment__c stores: payment confirmation, amount, and billing details
- Feedback__c and BookingGuest__c support after-trip feedback and guest info

### Security Model Highlights

- Role Hierarchy: Travel Manager > Travel Agent > Guide
- Profiles: Separate profiles for Admin, Finance, Agent, Guide, CSR
- Permission Sets: Granular access to reports and object records
- Field-Level Security: Sensitive fields (like billing) restricted to Finance only
- Record-Level Security: Sharing rules allow guides to view only relevant customer records

## References
- Salesforce Data Modeling Guide
- Salesforce Official Documentation
- Travel Industry Reports and Use Cases via Google
- ChatGPT


# Phase 2: Requirement Analysis & Planning

## 1. Salesforce Account
[!https://drive.google.com/file/d/1L_wUXLt7vhW3J4OI-KXTJKMU2z6oLGRw/view?usp=sharing]

## 2. Objects Creation
[!https://drive.google.com/file/d/1lazdVg8_UjE4ydnFRQ_enWFsqYqmTcaF/view?usp=sharing]
