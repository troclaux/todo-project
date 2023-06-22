# Todo Project

## Description
A simple web application that functions as a todo list. This project aims to implement DevOps principles such as:

1. Continuous Integration
2. Continuous Delivery
2. Continuous Deployment
3. Infrastructure as Code
4. Automation

## Kanban Board

### To Do
- Landing page
- Integrate frontend with backend
- Learn how to test PERN stack
- Write Pipeline that builds application
    - Build application with Kubernetes .yaml file
    - Setup Kubernetes cluster over aws cloud with Terraform and Ansible
    - Connect Kubernetes cluster with Jenkins that triggers on git push
        - Jenkins should:
            - Build docker image
            - Push to docker repository
            - Deploy to Kubernetes cluster
- Write tests for PERN stack
    - React
    - Node.js
- Code Jenkins pipeline
    - Build
        - Build with Dockerfile or docker-compose.yml?
    - Test
    - Deploy
        - Include Terraform in Jenkins Pipeline

### In Progress

### Done
- Make Dockerfile for frontend
- Make Dockerfile for backend
- Learn basics of Tailwind
- Learn basics of next.js
- Learn steps to setup server and DB
- Connect RDS instance with node server
- Define DB model
- Create RDS instance
- Create tables
- Connect RDS instance with DBeaver
- Implement POST request for tasks
