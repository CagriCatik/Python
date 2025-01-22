# Getting Started

<details>
  <summary>Introduction to GitHub Actions for Python Projects</summary>
  
  - [x] Introduction
  - [x] What Is CI/CD?
    - [x] Continuous Integration (CI)
    - [x] Continuous Delivery (CD)
    - [x] Continuous Deployment (CDP)
    - [x] Why Is CI/CD Important?
    - [x] Key Components of CI/CD
  - [ ] The Tale of DevCity: How CI/CD Transformed the Way They Built
    - [ ] Continuous Integration (CI)
    - [ ] Continuous Deployment (CDP)
    - [ ] The Transformation
  - [ ] Project Directory Structure for Following Lessons
  - [ ] Sample CI/CD Pipeline for Python Projects
    - [ ] Setting Up CI
    - [ ] Setting Up CD
</details>

<details>
  <summary>Setting Up GitHub Actions CI for FastAPI: Intro to Taskfile and Pre-Jobs</summary>
  
  - [ ] The Importance of CI in Modern Software Development
  - [ ] What Readers Will Learn in This Post
  - [ ] Configuring Your Development Environment
    - [ ] Can You Test a CI Pipeline Locally?
  - [ ] Project Directory Structure for Following Lessons
  - [ ] Taskfile for Automation
    - [ ] Overview of `Taskfile.yml`
    - [ ] Tasks Breakdown
      - [ ] `deps`: Install Dependencies
      - [ ] `lint`: Lint the Code
      - [ ] `test`: Run Tests
  - [ ] Setting Up the CI Pipeline
    - [ ] Defining the CI Workflow
    - [ ] Understanding Jobs in GitHub Actions
    - [ ] Deep Dive into Jobs and Pre-Jobs
      - [ ] What Is the Importance of Pre-Jobs?
</details>

<details>
  <summary>Enhancing GitHub Actions CI for FastAPI: Build, Test, and Publish</summary>
  
  - [ ] What Readers Will Learn in This Post
  - [ ] Configuring Your Development Environment
    - [ ] Can You Test a CI Pipeline Locally?
  - [ ] Project Directory Structure for Following Lessons
  - [ ] Building and Testing Your FastAPI Application
    - [ ] Define the `build-and-test` Job
    - [ ] Checkout the Repository
    - [ ] Set Up Python
    - [ ] Install Task
    - [ ] Install Dependencies
    - [ ] Set `PYTHONPATH`
    - [ ] Lint with Flake8
    - [ ] Run Tests with PyTest
    - [ ] Upload Test Coverage Reports (XML)
    - [ ] Upload Test Coverage Reports (HTML)
    - [ ] Summary
  - [ ] Publishing Test Results
  - [ ] Publish Release
    - [ ] Defining the Job
    - [ ] Checkout the Repository
    - [ ] Set Up the Python Environment
    - [ ] Install Task Automation and Dependencies
    - [ ] Install Wheel and Twine (Packaging Tools)
    - [ ] Build the Python Package
    - [ ] Set the Package Path for Upload
    - [ ] Create and Find GitHub Release
    - [ ] Upload the Package to GitHub Release
    - [ ] Generate and Update the Changelog
</details>

<details>
  <summary>FastAPI with GitHub Actions and GHCR: Continuous Delivery Made Simple</summary>
  
  - [ ] Transition to Continuous Deployment (CDP)
  - [ ] Why Continuous Deployment Matters for FastAPI Projects
  - [ ] Configuring Your Development Environment
  - [ ] Project Directory Structure for Following Lessons
  - [ ] What Is GitHub Container Registry (GHCR)?
  - [ ] Breaking Down the `cd.yml` Workflow: Automating Continuous Deployment for FastAPI
    - [ ] Triggering the Workflow
    - [ ] Concurrency Control
    - [ ] Environment Variables
    - [ ] Job Definition: Build and Package
    - [ ] Checkout the Repository
    - [ ] Set Up Python Runtime
    - [ ] Install Task Runner and Tools
    - [ ] Tagging the Docker Image
    - [ ] Convert Repository Name to Lowercase
    - [ ] Set Up Docker Buildx
    - [ ] Log in to GitHub Container Registry (GHCR)
    - [ ] Build and Push Docker Image
    - [ ] Clean Up Old Docker Images
    - [ ] Scan Docker Image
    - [ ] Generate BOM (Bill of Materials) Reports
    - [ ] Store Generated Reports
  - [ ] Streamlining Docker Image Management in GHCR
    - [ ] Why Is Cleanup Necessary?
    - [ ] Step-by-Step Code Breakdown
      - [ ] Key Functionality
      - [ ] Setting Up API Headers and Base URLs
      - [ ] Fetching Docker Image Versions
      - [ ] Handling the Response
      - [ ] Deleting Old Docker Images
</details>




https://pyimagesearch.com/2024/09/30/introduction-to-github-actions-for-python-projects/