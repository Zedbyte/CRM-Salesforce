# Project Overview

The Tours & Travels CRM project is aimed at developing a Salesforce-based Customer Relationship Management system tailored for global travel agencies. It addresses operational challenges such as manual bookings, fragmented communication, and lack of visibility across customer interactions, finance, and employee coordination.

By leveraging Salesforce's automation, data modeling, UI customization, and reporting capabilities, the CRM will enable travel companies to manage bookings, communicate with customers in real time, assign agents and guides, automate follow-ups, and gain insights through dashboards — all within a centralized and secure system.

# Objectives
The core objective of this project is to design and implement a CRM system that streamlines travel agency operations from inquiry to feedback, reduces manual workload, and enhances customer satisfaction.
By aligning Salesforce tools with real-world business challenges, the system will:
- Improve customer relationship management through structured onboarding, booking, and feedback workflows.
- Enable streamlined operations by automating repetitive tasks and enabling collaboration between teams.
- Provide business intelligence through reporting on KPIs such as monthly revenue, retention rates, and service quality.
- Ensure data security and role-based access for users such as agents, guides, finance, and administrators.


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

### Functional Objectives (Phase 1)
- Identify and translate business processes into Salesforce CRM logic
- Establish a clear understanding of user expectations and business constraints
- Create a foundation for future implementation (data models, workflows, security)

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

## 5. Data & Security Model

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

## 6. Project Roadmap & Milestones

| Phase                            | Deliverables                                        | Timeline |
|----------------------------------|-----------------------------------------------------|----------|
| Phase 1: Requirement Analysis  | Stakeholder map, user needs, business requirements  | Week 1   |
| Phase 2: System Design         | Data model diagrams, security plan, architecture    | Week 2   |
| Phase 3: Implementation        | Apex code, automation, LWC, object setup            | Week 3–4 |
| Phase 4: Testing               | Functional testing, unit test classes, bug fixing   | Week 5   |
| Phase 5: Deployment & Handover | Reports, dashboards, user training, documentation   | Week 6   |

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

## 3. Tabs
[!https://drive.google.com/file/d/13yZbLr09OJtpVFduVNbd5mgX3OuyDFgN/view?usp=sharing]

## 4. Fields & Relationships
[!https://drive.google.com/drive/folders/1CIbPOVx0Fnfs9mmvUtf5AJjJmRqutnqS?usp=sharing]

## 5. Field Dependencies
[!https://drive.google.com/drive/folders/1L1MnNcS6gOgorsmZ9c3OvUXqhWw0pcNZ?usp=sharing]
