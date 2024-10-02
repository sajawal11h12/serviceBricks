ServiceBricks Documentation
Introduction
ServiceBricks is a powerful microservices platform designed to streamline the development, deployment, and maintenance of distributed systems. By leveraging Domain-Driven Design (DDD), Event-Driven Architecture (EDA), and a range of advanced features, ServiceBricks empowers teams to build robust, scalable, and highly customizable services tailored to their specific business domains.

View the following sections to learn more about the ServiceBricks platform.

Learning
What are Microservices: Learn about microservices and their benefits.
ServiceBricks Key Features: Learn about the key features of the ServiceBricks platform.
Architecture
Domain-Driven Design and Major System Components: Describes the major system components and how data flows through the system.
Event-Driven Architecture: Describes how Event-Driven Architecture (EDA) is used when processing methods.
SQL and NoSQL Database Engine Support: Describes the standard relational (SQL) and document (NoSQL) database engines we support and how to incorporate others.
Classic vs Modern REST API Design: Describes the differences between Classic and Modern REST API Design implementations and how to configure their usage.
NuGet Package Architecture: Describes the NuGet package design.
Deployment Scenarios: Describes the most common deployment scenarios for your microservices foundation.
Features
API Clients, Controllers and Services: API Controllers, clients, services, methods and policies. Classic and Modern modes of operation.
Background Tasks and Timers: Background task processing using hosted services and timers in the platform.
Business Rules and the Business Rule Engine: Create, registering and executing business rules,
Data Transfer Object: The Data Transfer Object (DTO) and enabling storage agnostic, repository-based APIs.
Broadcasts and Service Bus Communication: Broadcasting data using Service Bus and communicating with other microservices.
Domain Objects, Broadcasts, Events, Process: Domain objects are the core object of the platform and how to use and extend them.
DomainRepository and StorageRepository: Understanding domain business logic and storage data access.
Exceptions: How to handle exceptions in the platform.
Modules and AutoMapper Mappings: Registering a module with ServiceBricks and using AutoMapper mappings.
Request and Response Objects: Request and response objects, their usage and importance.
ServiceQuery: Dynamically query SQL and NoSQL database engines over REST APIs.
Getting Started with Examples
Examples and Quickstart Applications: View all our examples to create your own applications quickly.
Official Pre-Built Microservices
We have developed several pre-built microservices to help get you started. View the following repositories for more information:

Cache Microservice: This repository is a temporary generic data storage microservice.
Logging Microservice: This repository is a service-scoped or centralized application and web request logging microservice.
Notification Microservice: This repository is a notification and delivery of emails and SMS messages microservice.
Security Microservice: This repository is an authentication, authorization and application security microservice supporting JWT token membership for all ServiceBricks microservices.
Developing Your Own Microservices
We recommend that you start with the Cache Microservice as it is very simple key/value pair storage microservice. It contains a single DTO that maps to a single database table/collection with a couple properties. Depending on the storage provider, a primary key and other properties might be needed. Otherwise, the cache key is translated to the DTO StorageKey property.

Setup Development Environment: In order to develop ServiceBricks microservices, these are the tools you should have installed.
Xunit Testing Framework: Test and verify your microservice is working correctly in the platform.
Setup GitHub CI/CD Builds and Code Coverage: Setup CI/CD builds and code coverage for your microservice.
License
ServiceBricks is released under the MIT License.