import { Question } from "../types";

// Mock questions
export const questions: Question[] = [
  {
    id: "q1",
    text: "Which AWS service is used for storing objects?",
    options: [
      "EC2",
      "S3",
      "RDS",
      "DynamoDB"
    ],
    correctOption: 1,
    explanation: "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
    category: "cat3",
    difficulty: "easy",
    tags: ["storage", "s3"],
  },
  {
    id: "q2",
    text: "Which AWS service provides resizable compute capacity in the cloud?",
    options: [
      "EC2",
      "S3",
      "Lambda",
      "RDS"
    ],
    correctOption: 0,
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.",
    category: "cat2",
    difficulty: "easy",
    tags: ["compute", "ec2"],
  },
  {
    id: "q3",
    text: "Which AWS service is a managed NoSQL database?",
    options: [
      "RDS",
      "Redshift",
      "DynamoDB",
      "Neptune"
    ],
    correctOption: 2,
    explanation: "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.",
    category: "cat4",
    difficulty: "medium",
    tags: ["database", "dynamodb", "nosql"],
  },
  {
    id: "q4",
    text: "Which AWS service allows you to run code without provisioning servers?",
    options: [
      "EC2",
      "ECS",
      "Lambda",
      "Batch"
    ],
    correctOption: 2,
    explanation: "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.",
    category: "cat2",
    difficulty: "medium",
    tags: ["compute", "lambda", "serverless"],
  },
  {
    id: "q5",
    text: "What is the default storage class for S3?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA",
      "S3 Glacier"
    ],
    correctOption: 0,
    explanation: "S3 Standard is the default storage class. It offers high durability, availability, and performance object storage for frequently accessed data.",
    category: "cat3",
    difficulty: "medium",
    tags: ["storage", "s3"],
  },
  {
    id: "q6",
    text: "Which service would you use to create a virtual network in AWS?",
    options: [
      "EC2",
      "VPC",
      "Route 53",
      "DirectConnect"
    ],
    correctOption: 1,
    explanation: "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    category: "cat5",
    difficulty: "easy",
    tags: ["networking", "vpc"],
  },
  {
    id: "q7",
    text: "Which AWS service is used to distribute incoming application traffic across multiple targets?",
    options: [
      "CloudFront",
      "API Gateway",
      "Elastic Load Balancing",
      "Route 53"
    ],
    correctOption: 2,
    explanation: "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, IP addresses, and Lambda functions.",
    category: "cat5",
    difficulty: "medium",
    tags: ["networking", "elb"],
  },
  {
    id: "q8",
    text: "Which AWS service provides managed relational databases?",
    options: [
      "DynamoDB",
      "RDS",
      "ElastiCache",
      "Neptune"
    ],
    correctOption: 1,
    explanation: "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.",
    category: "cat4",
    difficulty: "easy",
    tags: ["database", "rds"],
  },
  {
    id: "q9",
    text: "Which AWS service manages user access and permissions to AWS resources?",
    options: [
      "IAM",
      "Security Groups",
      "WAF",
      "KMS"
    ],
    correctOption: 0,
    explanation: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.",
    category: "cat6",
    difficulty: "easy",
    tags: ["security", "iam"],
  },
  {
    id: "q10",
    text: "Which of the following is NOT a type of EC2 instance purchasing option?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Premium Instances"
    ],
    correctOption: 3,
    explanation: "Premium Instances is not a valid EC2 instance purchasing option. The correct options are On-Demand, Reserved, Spot, Dedicated Hosts, and Capacity Reservations.",
    category: "cat2",
    difficulty: "medium",
    tags: ["compute", "ec2"],
  },
]; 