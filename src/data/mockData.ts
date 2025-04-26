import { Question } from "../types";

// Mock questions
export const questions: Question[] = [
  {
    "id": "q1",
    "text": "A gaming website gives users the ability to trade game items with each other on the platform. The platform requires both users' records to be updated and persisted in one transaction. If any update fails, the transaction must roll back. Which AWS solution can provide the transactional capability that is required for this feature?",
    "options": [
      "A. Amazon DynamoDB with operations made with the Consistent Read parameter set to true",
      "B. Amazon ElastiCache for Memcached with operations made within a transaction block",
      "C. Amazon DynamoDB with reads and writes made by using Transact* operations",
      "D. Amazon Aurora MySQL with operations made within a transaction block",
      "E. Amazon Athena with operations made within a transaction block"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q2",
    "text": "A developer has created a Java application that makes HTTP requests directly to AWS services. Application logging shows 5xx HTTP response codes that occur at irregular intervals. The errors are affecting users. How should the developer update the application to improve the application's resiliency?",
    "options": [
      "A. Revise the request content in the application code.",
      "B. Use the AWS SDK for Java to interact with AWS APIs.",
      "C. Scale out the application so that more instances of the application are running.",
      "D. Add additional logging to the application code."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q3",
    "text": "A global company has a mobile app with static data stored in an Amazon S3 bucket in the us-east-1 Region. The company serves the content through an Amazon CloudFront distribution. The company is launching the mobile app in South Africa. The data must reside in the af-south-1 Region. The company does not want to deploy a speci\u0000c mobile client for South Africa. What should the company do to meet these requirements?",
    "options": [
      "A. Use the CloudFront geographic restriction feature to block access to users in South Africa.",
      "B. Create a Lambda@Edge function. Associate the Lambda@Edge function as an origin request trigger with the CloudFront distribution to",
      "C. Create a Lambda@Edge function. Associate the Lambda@Edge function as a viewer response trigger with the CloudFront distribution to",
      "D. Include af-south-1 in the alternate domain name (CNAME) of the CloudFront distribution."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q4",
    "text": "A developer is testing an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM) local CLI. The application that is implemented by the Lambda function makes several AWS API calls by using the AWS software development kit (SDK). The developer wants to allow the function to make AWS API calls in a test AWS account from the developer's laptop. What should the developer do to meet these requirements?",
    "options": [
      "A. Edit the template.yml \u0000le. Add the AWS_ACCESS_KEY_ID property and the AWS_SECRET_ACCESS_KEY property in the Globals section.",
      "B. Add a test pro\u0000le b y using the aws con\u0000gure command with the --pro\u0000le option. Run AWS SAM by using the sam local invoke command with",
      "C. Edit the template.yml tile. For the AWS::Serverless::Function resource, set the role to an IAM role in the AWS account.",
      "D. Run the function by using the sam local invoke command. Override the AWS_ACCESS_KEY_ID parameter and the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q5",
    "text": "A developer designed an application on an Amazon EC2 instance. The application makes API requests to objects in an Amazon S3 bucket. Which combination of steps will ensure that the application makes the API requests in the MOST secure manner? (Choose two.)",
    "options": [
      "A. Create an IAM user that has permissions to the S3 bucket. Add the user to an IAM group.",
      "B. Create an IAM role that has permissions to the S3 bucket.",
      "C. Add the IAM role to an instance pro\u0000le. A ttach the instance pro\u0000le t o the EC2 instance.",
      "D. Create an IAM role that has permissions to the S3 bucket. Assign the role to an 1AM group.",
      "E. Store the credentials of the IAM user in the environment variables on the EC2 instance."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q6",
    "text": "A developer is con\u0000guring an Amazon CloudFront distribution for a new application to provide encryption in transit. The application is running in the eu-west-1 Region. The developer creates a new certi\u0000cate in AWS Certi\u0000cate Manager (ACM) in eu-west-1, but the certi\u0000cate is not visible in the CloudFront distribution settings. What should the developer do to \u0000x this problem?",
    "options": [
      "A. Create the certi\u0000cate for the domain in the same Region as the application. Ensure that the alternate domain name (CNAME) in the",
      "B. Create the certi\u0000cate in the eu-west-1 Region. Ensure that the alternate domain name (CNAME) in the distribution settings matches the",
      "C. Recreate the CloudFront distribution in the same Region as the certi\u0000cate.",
      "D. Specify the ACM certi\u0000cate name as the default root object of the CloudFront distribution."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q7",
    "text": "A developer is building an application that runs behind an Application Load Balancer (ALB). The ALB is con\u0000gured as the origin for an Amazon CloudFront distribution. Users will log in to the application by using their social media accounts. How can the developer authenticate users?",
    "options": [
      "A. Validate the users by inspecting the tokens in an AWS Lambda authorizer on the ALB.",
      "B. Con\u0000gure the ALB to use Amazon Cognito as one of the authentication providers.",
      "C. Con\u0000gure CloudFront to use Amazon Cognito as one of the authentication providers.",
      "D. Validate the users by calling the Amazon Cognito API in an AWS Lambda authorizer on the ALB."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q8",
    "text": "A company has an application that analyzes photographs. A developer is preparing the application for deployment to Amazon EC2 instances. The application's image analysis functions require a mix of GPU instances and CPU instances that run on Amazon Linux. The developer needs to add code to the application so that the functions can determine whether they are running on a GPU instance. What should the functions do to obtain this information?",
    "options": [
      "A. Call the DescribeInstances API operation and \u0000lter on the current instance ID. Examine the ElasticGpuAssociations property.",
      "B. Evaluate the GPU AVAILABLE environment variable.",
      "C. Call the DescribeElasticGpus API operation.",
      "D. Retrieve the instance type from the instance metadata."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q9",
    "text": "A company has an application that uses Amazon Cognito user pools as an identity provider. The company must secure access to user records. The company has set up multi-factor authentication (MFA). The company also wants to send a login activity noti\u0000cation by email every time a user logs in. What is the MOST operationally e\u0000cient solution that meets this requirement?",
    "options": [
      "A. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email noti\u0000cation. Add an Amazon API",
      "B. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email noti\u0000cation. Add an Amazon",
      "C. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email noti\u0000cation. Create an Amazon",
      "D. Con\u0000gure Amazon Cognito to stream all logs to Amazon Kinesis Data Firehose. Create an AWS Lambda function to process the streamed"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q10",
    "text": "A company hosts a three-tier web application on AWS behind an Amazon CloudFront distribution. A developer wants a dashboard to monitor error rates and anomalies of the CloudFront distribution with the shortest possible refresh interval. Which combination of slops should the developer take to meet these requirements? (Choose two.)",
    "options": [
      "A. Activate real-time logs on the CloudFront distribution. Create a stream in Amazon Kinesis Data Streams.",
      "B. Export the CloudFront logs to an Amazon S3 bucket. Detect anomalies and error rates with Amazon QuickSight.",
      "C. Con\u0000gure Amazon Kinesis Data Streams to deliver logs to Amazon OpenSearch Service (Amazon Elasticsearch Service). Create a",
      "D. Create Amazon CloudWatch alarms based on expected values of selected CloudWatch metrics to detect anomalies and errors.",
      "E. Design an Amazon CloudWatch dashboard of the selected CloudFront distribution metrics."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q11",
    "text": "A developer creates a customer managed key for multiple AWS users to encrypt data in Amazon S3. The developer con\u0000gures Amazon Simple Noti\u0000cation Service (Amazon SNS) to publish a message if key deletion is scheduled. The developer needs to preserve any SNS messages that cannot be delivered so that those messages can be reprocessed. Which AWS service or feature should the developer use to meet this requirement?",
    "options": [
      "A. Amazon Simple Email Service (Amazon SES)",
      "B. AWS Lambda",
      "C. Amazon Simple Queue Service (Amazon SQS)",
      "D. Amazon CloudWatch alarm"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q12",
    "text": "A developer needs to deploy an application to AWS Elastic Beanstalk for a company. The application consists of a single Docker image. The company's automated continuous integration and continuous delivery (CI/CD) process builds the Docker image and pushes the image to a public Docker registry. How should the developer deploy the application to Elastic Beanstalk?",
    "options": [
      "A. Create a Docker\u0000le. Con\u0000gure Elastic Beanstalk to build the application as a Docker image.",
      "B. Create a docker-compose.yml \u0000le. Use the Elastic Beanstalk CLI to deploy the application.",
      "C. Create a .zip \u0000le that contains the Docker image. Upload the .zip \u0000le to Elastic Beanstalk.",
      "D. Create a Docker\u0000le. Run the Elastic Beanstalk CLI eb local run command in the same directory."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q13",
    "text": "A company is using AWS CodeDeploy for all production deployments. A developer has an Amazon Elastic Container Service (Amazon ECS) application that uses the CodeDeployDefault.ECSAIIAtOnce con\u0000guration. The developer needs to update the production environment in increments of 10% until the entire production environment is updated. Which CodeDeploy con\u0000guration should the developer use to meet these requirements?",
    "options": [
      "A. CodeDeployDefault.ECSCanary10Percent5Minutes",
      "B. CodeDeployDefault.ECSLinear10PercentEvery3Minutes",
      "C. CodeDeployDefault.OneAtATime",
      "D. CodeDeployDefault.LambdaCanary10Percent5Minutes"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q14",
    "text": "A company is using AWS Elastic Beanstalk to deploy a three-tier application. The application uses an Amazon RDS DB instance as the database tier. The company wants to decouple the DB instance from the Elastic Beanstalk environment. Which combination of steps should a developer lake to meet this requirement? (Choose two.)",
    "options": [
      "A. Create a new Elastic Beanstalk environment that connects to the DB instance.",
      "B. Create a new DB instance from a snapshot of the previous DB instance.",
      "C. Use the Elastic Beanstalk CLI to decouple the DB instance.",
      "D. Use the AWS CLI to decouple the DB instance.",
      "E. Modify the current Elastic Beanstalk environment to connect to the DB instance."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q15",
    "text": "A company has point-of-sale devices across thousands of retail shops that synchronize sales transactions with a centralized system. The system includes an Amazon API Gateway API that exposes an AWS Lambda function. The Lambda function processes the transactions and stores the transactions in Amazon RDS for MySQL. The number of transactions increases rapidly during the day and is near zero at night. How can a developer increase the elasticity of the system MOST cost-effectively?",
    "options": [
      "A. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale road replicas based on CPU consumption.",
      "B. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale read replicas based on the number of",
      "C. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda",
      "D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q16",
    "text": "A developer is writing an AWS Lambda function. The Lambda function needs to access items that are stored in an Amazon DynamoDB table. What is the MOST secure way to con\u0000gure this access for the Lambda function?",
    "options": [
      "A. Create an IAM user that has permissions to access the DynamoDB table. Create an access key for this user. Store the access key ID and",
      "B. Add a resource-based policy to the DynamoDB table to allow access from the Lambda function's IAM role.",
      "C. Create an IAM policy that allows access to the DynamoDB table. Attach this policy to the Lambda function's IAM role.",
      "D. Create a DynamoDB Accelerator (DAX) cluster. Con\u0000gure the Lambda function to use the DAX duster to access the DynamoDB table."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q17",
    "text": "A developer is implementing user authentication and authorization for a web application that is hosted on an Amazon EC2 instance. The developer needs to ensure that the user credentials are encrypted and secure when they are stored and transmitted. Which solution will meet these requirements?",
    "options": [
      "A. Activate web server modules for authentication and authorization on the instance. Use HTTP basic authentication for the user login.",
      "B. Deploy a custom authentication and authorization API over HTTP. Store the user credentials on Amazon ElastiCache for Redis.",
      "C. Use Amazon Cognito to con\u0000gure a user pool. Use the Amazon Cognito API to authenticate and authorize the users.",
      "D. Create IAM users. Assign the users to different IAM groups. Use AWS Single Sign-On to authenticate and authorize each user."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q18",
    "text": "A company that has multiple o\u0000ces uses an Amazon DynamoDB table to store employee payroll information. Item attributes consist of employee names, o\u0000ce identi\u0000ers, and cumulative daily hours worked The most frequently used query extracts a report of an alphabetical subset of employees for a speci\u0000c o\u0000ce. Which design of the DynamoDB table primary key will have the MINIMUM performance impact?",
    "options": [
      "A. Partition key on the o\u0000ce identi\u0000er and sort key on the employee name",
      "B. Partition key on the employee name and sort key on the o\u0000ce identi\u0000er",
      "C. Partition key on the employee name",
      "D. Partition key on the o\u0000ce identi\u0000er"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q19",
    "text": "A company hosts a microservices application that uses Amazon API Gateway. AWS Lambda, Amazon Simple Queue Service (Amazon SQS), and Amazon DynamoDB. One of the Lambda functions adds messages to an SQS FIFO queue. When a developer checks the application logs, the developer \u0000nds a few duplicated items in a DynamoDB table. The items were inserted by another polling function that processes messages from the queue. What is the MOST likely cause of this issue?",
    "options": [
      "A. Write operations on the DynamoDB table are being throttled.",
      "B. The SQS queue delivered the message to the function more than once.",
      "C. API Gateway duplicated the message in the SQS queue.",
      "D. The polling function timeout is greater than the queue visibility timeout."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q20",
    "text": "A development team has been using a builder server that is hosted on an Amazon EC2 instance to perform builds and deployments for the last 3 months. The EC2 instance's instance pro\u0000le uses an IAM role that contains the Administrator Access managed policy. The development team must replace that policy with a policy that provides only the required permissions. What is the FASTEST way to create a custom 1AM policy for the EC2 instance to meet this requirement?",
    "options": [
      "A. Create a new IAM policy based on services that the build server deployed or updated in the last 3 months.",
      "B. Create a new IAM policy that includes all actions that AWS CloudTrail recorded for the IAM role in the last 3 months.",
      "C. Create a new permissions boundary policy that denies all access. Associate the permissions boundaries with the IAM role.",
      "D. Create a new IAM policy by using Amazon Athena to query an Amazon S3 bucket that contains AWS CloudTrail events that the IAM role"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q21",
    "text": "A developer needs to write an AWS CloudFormation template on a local machine and deploy a CloudFormation stack to AWS. What must the developer do to complete these tasks?",
    "options": [
      "A. Install the AWS CLI. Con\u0000gure the AWS CLI by using an IAM user name and password.",
      "B. Install the AWS CLI. Con\u0000gure the AWS CLI by using an SSH key.",
      "C. Install the AWS CLI. Con\u0000gure the AWS CLI by using an IAM user access key and secret key.",
      "D. Install an AWS software development kit (SDK). Con\u0000gure the SDK by using an X.509 certi\u0000cate."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q22",
    "text": "A developer is working on a web application that runs on Amazon Elastic Container Service (Amazon ECS) and uses an Amazon DynamoDB table to store data. The application performs a large number of read requests against a small set of the table data. How can the developer improve the performance of these requests? (Choose two.)",
    "options": [
      "A. Create an Amazon ElastiCache cluster. Con\u0000gure the application to cache data in the cluster.",
      "B. Create a DynamoDB Accelerator (DAX) cluster. Con\u0000gure the application to use the DAX cluster for DynamoDB requests.",
      "C. Con\u0000gure the application to make strongly consistent read requests against the DynamoDB table.",
      "D. Increase the read capacity of the DynamoDB table.",
      "E. Enable DynamoDB adaptive capacity."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q23",
    "text": "A developer needs to use Amazon DynamoDB to store customer orders. The developer's company requires all customer data to be encrypted at rest with a key that the company generates. What should the developer do to meet these requirements?",
    "options": [
      "A. Create the DynamoDB table with encryption set to None. Code the application to use the key to decrypt the data when the application reads",
      "B. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS customer managed key during creation of the",
      "C. Store the key by using AWS Key Management Service (AWS KMS). Create the DynamoDB table with default encryption. Include the",
      "D. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS AWS managed key during creation of the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q24",
    "text": "A developer is creating a solution to track an account's Amazon S3 buckets over time. The developer has created an AWS Lambda function that will run on a schedule. The function will list the account's S3 buckets and will store the list in an Amazon DynamoDB table. The developer receives a permissions error when the developer runs the function with the AWSLambdaBasicExecutionRole AWS managed policy. Which combination of permissions should the developer use to resolve this error? (Choose two.)",
    "options": [
      "A. Cross-account IAM role",
      "B. Permission for the Lambda function to list buckets in Amazon S3",
      "C. Permission for the Lambda function to write in DynamoDB",
      "D. Permission for Amazon S3 to invoke the Lambda function",
      "E. Permission for DynamoDB to invoke the Lambda function"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q25",
    "text": "A company is adding items to an Amazon DynamoDB table from an AWS Lambda function that is written in Python. A developer needs to implement a solution that inserts records in the DynamoDB table and performs automatic retry when the insert fails. Which solution meets these requirements with MINIMUM code changes?",
    "options": [
      "A. Con\u0000gure the Python code to run the AWS CLI through shell to call the PutItem operation",
      "B. Call the PutItem operation from Python by using the DynamoDB HTTP API",
      "C. Queue the items in AWS Glue, which will put them into the DynamoDB table",
      "D. Use the AWS software development kit (SDK) for Python (boto3) to call the PutItem operation"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q26",
    "text": "A developer is writing an AWS Lambda function. The developer wants to log key events that occur during the Lambda function and include a unique identi\u0000er to associate the events with a speci\u0000c function invocation. Which of the following will help the developer accomplish this objective?",
    "options": [
      "A. Obtain the request identi\u0000er from the Lambda context object. Architect the application to write logs to the console.",
      "B. Obtain the request identi\u0000er from the Lambda event object. Architect the application to write logs to a \u0000le.",
      "C. Obtain the request identi\u0000er from the Lambda event object. Architect the application to write logs to the console.",
      "D. Obtain the request identi\u0000er from the Lambda context object. Architect the application to write logs to a \u0000le."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q27",
    "text": "A company experienced partial downtime during the last deployment of a new application. AWS Elastic Beanstalk split the environment's Amazon EC2 instances into batches and deployed a new version one batch at a time after taking them out of service. Therefore, full capacity was not maintained during deployment. The developer plans to release a new version of the application, and is looking for a policy that will maintain full capacity and minimize the impact of the failed deployment. Which deployment policy should the developer use?",
    "options": [
      "A. Immutable",
      "B. All at Once",
      "C. Rolling",
      "D. Rolling with an Additional Batch"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q28",
    "text": "A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in a complex architecture that is di\u0000cult to manage and does not scale well. The company needs a single interface to manage these services to consumers. Which AWS service should be used to refactor this architecture?",
    "options": [
      "A. AWS Lambda",
      "B. AWS X-Ray",
      "C. Amazon SQS",
      "D. Amazon API Gateway"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q29",
    "text": "When a Developer tries to run an AWS CodeBuild project, it raises an error because the length of all environment variables exceeds the limit for the combined maximum of characters. What is the recommended solution?",
    "options": [
      "A. Add the export LC_ALL=ג€en_US.utf8ג€ command to the pre_build section to ensure POSIX localization.",
      "B. Use Amazon Cognito to store key-value pairs for large numbers of environment variables.",
      "C. Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables.",
      "D. Use AWS Systems Manager Parameter Store to store large numbers of environment variables."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q30",
    "text": "A Development team decides to adopt a continuous integration/continuous delivery (CI/CD) process using AWS CodePipeline and AWS CodeCommit for a new application. However, management wants a person to review and approve the code before it is deployed to production. How can the Development team add a manual approver to the CI/CD pipeline?",
    "options": [
      "A. Use AWS SES to send an email to approvers when their action is required. Develop a simple application that allows approvers to accept or",
      "B. If approved, add an approved tag when pushing changes to the CodeCommit repository. CodePipeline will proceed to build and deploy",
      "C. Add an approval step to CodeCommit. Commits will not be saved until approved.",
      "D. Add an approval action to the pipeline. Con\u0000gure the approval action to publish to an Amazon SNS topic when approval is required. The"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q31",
    "text": "A Developer is migrating an on-premises application to AWS. The application currently takes user uploads and saves them to a local directory on the server. All uploads must be saved and made immediately available to all instances in an Auto Scaling group. Which approach will meet these requirements?",
    "options": [
      "A. Use Amazon EBS and con\u0000gure the application AMI to use a snapshot of the same EBS instance on boot.",
      "B. Use Amazon S3 and rearchitect the application so all uploads are placed in S3.",
      "C. Use instance storage and share it between instances launched from the same Amazon Machine Image (AMI).",
      "D. Use Amazon EBS and \u0000le synchronization software to achieve eventual consistency among the Auto Scaling group."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q32",
    "text": "A developer is creating a script to automate the deployment process for a serverless application. The developer wants to use an existing AWS Serverless Application Model (AWS SAM) template for the application. What should the developer use for the project? (Choose two.)",
    "options": [
      "A. Call aws cloudformation package to create the deployment package. Call aws cloudformation deploy to deploy the package afterward.",
      "B. Call sam package to create the deployment package. Call sam deploy to deploy the package afterward.",
      "C. Call aws s3 cp to upload the AWS SAM template to Amazon S3. Call aws lambda update-function-code to create the application.",
      "D. Create a ZIP package locally and call aws serverlessrepo create-application to create the application.",
      "E. Create a ZIP package and upload it to Amazon S3. Call aws cloudformation create-stack to create the application."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q33",
    "text": "A developer has built a market application that stores pricing data in Amazon DynamoDB with Amazon ElastiCache in front. The prices of items in the market change frequently. Sellers have begun complaining that, after they update the price of an item, the price does not actually change in the product listing. What could be causing this issue?",
    "options": [
      "A. The cache is not being invalidated when the price of the item is changed",
      "B. The price of the item is being retrieved using a write-through ElastiCache cluster",
      "C. The DynamoDB table was provisioned with insu\u0000cient read capacity",
      "D. The DynamoDB table was provisioned with insu\u0000cient write capacity"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q34",
    "text": "The developer is creating a web application that collects highly regulated and con\u0000dential user data through a POST request. The web application is served through Amazon CloudFront. User names and phone numbers must be encrypted at the edge and must remain encrypted throughout the entire application stack. What is the MOST secure way to meet these requirements?",
    "options": [
      "A. Enforce Match Viewer with HTTPS Only on CloudFront.",
      "B. Use only the newest TLS security policy on CloudFront.",
      "C. Enforce a signed URL on CloudFront on the front end.",
      "D. Use \u0000eld-level encryption on CloudFront."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q35",
    "text": "A Developer has been asked to create an AWS Lambda function that is triggered any time updates are made to items in an Amazon DynamoDB table. The function has been created, and appropriate permissions have been added to the Lambda execution role. Amazon DynamoDB streams have been enabled for the table, but the function is still not being triggered. Which option would enable DynamoDB table updates to trigger the Lambda function?",
    "options": [
      "A. Change the StreamViewType parameter value to NEW_AND_OLD_IMAGES for the DynamoDB table",
      "B. Con\u0000gure event source mapping for the Lambda function",
      "C. Map an Amazon SNS topic to the DynamoDB streams",
      "D. Increase the maximum execution time (timeout) setting of the Lambda function"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q36",
    "text": "A company maintains a REST service using Amazon API Gateway and the API Gateway native API key validation. The company recently launched a new registration page, which allows users to sign up for the service. The registration page creates a new API key using CreateApiKey and sends the new key to the user. When the user attempts to call the API using this key, the user receives a 403 Forbidden error. Existing users are unaffected and can still call the API. What code updates will grant these new users access to the API?",
    "options": [
      "A. The createDeployment method must be called so the API can be redeployed to include the newly created API key.",
      "B. The updateAuthorizer method must be called to update the API's authorizer to include the newly created API key.",
      "C. The importApiKeys method must be called to import all newly created API keys into the current stage of the API.",
      "D. The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q37",
    "text": "An application uploads photos to an Amazon S3 bucket. Each photo that is uploaded to the S3 bucket must be resized to a thumbnail image by the application. Each thumbnail image is uploaded with a new name in the same S3 bucket. Which AWS service can a developer con\u0000gure to directly process each single S3 event for each S3 object upload?",
    "options": [
      "A. Amazon EC2",
      "B. Amazon Elastic Container Service (Amazon ECS)",
      "C. AWS Elastic Beanstalk",
      "D. AWS Lambda"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q38",
    "text": "A company is running a Docker application on Amazon ECS. The application must scale based on user load in the last 15 seconds. How should a Developer instrument the code so that the requirement can be met?",
    "options": [
      "A. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds",
      "B. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds",
      "C. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds",
      "D. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q39",
    "text": "Where should the appspec.yml \u0000le be placed in order for AWS CodeDeploy to work?",
    "options": [
      "A. In the root of the application source code directory structure",
      "B. In the bin folder along with all the complied code",
      "C. In an S3 bucket",
      "D. In the same folder as the application con\u0000guration \u0000les"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q40",
    "text": "A Developer is working on an application that handles 10MB documents that contain highly-sensitive data. The application will use AWS KMS to perform client- side encryption. What steps must be followed?",
    "options": [
      "A. Invoke the Encrypt API passing the plaintext data that must be encrypted, then reference the customer managed key ARN in the KeyId",
      "B. Invoke the GenerateRandom API to get a data encryption key, then use the data encryption key to encrypt the data",
      "C. Invoke the GenerateDataKey API to retrieve the encrypted version of the data encryption key to encrypt the data",
      "D. Invoke the GenerateDataKey API to retrieve the plaintext version of the data encryption key to encrypt the data"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q41",
    "text": "An application uses Amazon Kinesis Data Streams to ingest and process large streams of data records in real time. Amazon EC2 instances consume and process the data from the shards of the Kinesis data stream by using Amazon Kinesis Client Library (KCL). The application handles the failure scenarios and does not require standby workers. The application reports that a speci\u0000c shard is receiving more data than expected. To adapt to the changes in the rate of data \u0000ow, the `hot` shard is resharded. Assuming that the initial number of shards in the Kinesis data stream is 4, and after resharding the number of shards increased to 6, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?",
    "options": [
      "A. 12",
      "B. 6",
      "C. 4",
      "D. 1"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q42",
    "text": "A Company runs continuous integration/continuous delivery (CI/CD) pipelines for its application on AWS CodePipeline. A Developer must write unit tests and run them as part of the pipelines before staging the artifacts for testing. How should the Developer incorporate unit tests as part of CI/CD pipelines?",
    "options": [
      "A. Create a separate CodePipeline pipeline to run unit tests",
      "B. Update the AWS CodeBuild speci\u0000cation to include a phase for running unit tests",
      "C. Install the AWS CodeDeploy agent on an Amazon EC2 instance to run unit tests",
      "D. Create a testing branch in AWS CodeCommit to run unit tests"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q43",
    "text": "A Developer has written an application that runs on Amazon EC2 instances and generates a value every minute. The Developer wants to monitor and graph the values generated over time without logging in to the instance each time. Which approach should the Developer use to achieve this goal?",
    "options": [
      "A. Use the Amazon CloudWatch metrics reported by default for all EC2 instances. View each value from the CloudWatch console.",
      "B. Develop the application to store each value in a \u0000le on Amazon S3 every minute with the timestamp as the name.",
      "C. Publish each generated value as a custom metric to Amazon CloudWatch using available AWS SDKs.",
      "D. Store each value as a variable and add the variable to the list of EC2 metrics that should be reported to the Amazon CloudWatch console."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q44",
    "text": "A developer is trying to get data from an Amazon DynamoDB table called demoman-table. The developer con\u0000gured the AWS CLI to use a speci\u0000c IAM user's credentials and executed the following command: The command returned errors and no rows were returned. What is the MOST likely cause of these issues?",
    "options": [
      "A. The command is incorrect; it should be rewritten to use put-item with a string argument.",
      "B. The developer needs to log a ticket with AWS Support to enable access to the demoman-table.",
      "C. Amazon DynamoDB cannot be accessed from the AWS CLI and needs to be called via the REST API.",
      "D. The IAM user needs an associated policy with read access to demoman-table."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q45",
    "text": "A Development team is working on a case management solution that allows medical claims to be processed and reviewed. Users log in to provide information related to their medical and \u0000nancial situations. As part of the application, sensitive documents such as medical records, medical imaging, bank statements, and receipts are uploaded to Amazon S3. All documents must be securely transmitted and stored. All access to the documents must be recorded for auditing. What is the MOST secure approach?",
    "options": [
      "A. Use S3 default encryption using Advanced Encryption Standard-256 (AES-256) on the destination bucket.",
      "B. Use Amazon Cognito for authorization and authentication to ensure the security of the application and documents.",
      "C. Use AWS Lambda to encrypt and decrypt objects as they are placed into the S3 bucket.",
      "D. Use client-side encryption/decryption with Amazon S3 and AWS KMS."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q46",
    "text": "A developer is planning to use an Amazon API Gateway and AWS Lambda to provide a REST API. The developer will have three distinct environments to manage: development, test, and production. How should the application be deployed while minimizing the number of resources to manage?",
    "options": [
      "A. Create a separate API Gateway and separate Lambda function for each environment in the same Region.",
      "B. Assign a Region for each environment and deploy API Gateway and Lambda to each Region.",
      "C. Create one API Gateway with multiple stages with one Lambda function with multiple aliases.",
      "D. Create one API Gateway and one Lambda function, and use a REST parameter to identify the environment."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q47",
    "text": "An application needs to use the IP address of the client in its processing. The application has been moved into AWS and has been placed behind an Application Load Balancer (ALB). However, all the client IP addresses now appear to be the same. The application must maintain the ability to scale horizontally. Based on this scenario, what is the MOST cost-effective solution to this problem?",
    "options": [
      "A. Remove the application from the ALB. Delete the ALB and change Amazon Route 53 to direct tra\u0000c t  o the instance running the application.",
      "B. Remove the application from the ALB. Create a Classic Load Balancer in its place. Direct tra\u0000c t  o the application using the HTTP protocol.",
      "C. Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed",
      "D. Alter the application code to inspect a custom header. Alter the client code to pass the IP address in the custom header."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q48",
    "text": "A developer tested an application locally and then deployed it to AWS Lambda. While testing the application remotely, the Lambda function fails with an access denied message. How can this issue be addressed?",
    "options": [
      "A. Update the Lambda function's execution role to include the missing permissions.",
      "B. Update the Lambda function's resource policy to include the missing permissions.",
      "C. Include an IAM policy document at the root of the deployment package and redeploy the Lambda function.",
      "D. Redeploy the Lambda function using an account with access to the AdministratorAccess policy."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q49",
    "text": "A Developer must analyze performance issues with production-distributed applications written as AWS Lambda functions. These distributed Lambda applications invoke other components that make up the applications. How should the Developer identify and troubleshoot the root cause of the performance issues in production?",
    "options": [
      "A. Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs.",
      "B. Use AWS CloudTrail and then examine the logs.",
      "C. Use AWS X-Ray, then examine the segments and errors.",
      "D. Run Amazon Inspector agents and then analyze performance."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q50",
    "text": "A company is building a compute-intensive application that will run on a \u0000eet of Amazon EC2 instances. The application uses attached Amazon EBS disks for storing data. The application will process sensitive information and all the data must be encrypted. What should a Developer do to ensure the data is encrypted on disk without impacting performance?",
    "options": [
      "A. Con\u0000gure the Amazon EC2 instance \u0000eet to use encrypted EBS volumes for storing data.",
      "B. Add logic to write all data to an encrypted Amazon S3 bucket.",
      "C. Add a custom encryption algorithm to the application that will encrypt and decrypt all data.",
      "D. Create a new Amazon Machine Image (AMI) with an encrypted root volume and store the data to ephemeral disks."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q51",
    "text": "A Developer is working on a serverless project based in Java. Initial testing shows a cold start takes about 8 seconds on average for AWS Lambda functions. What should the Developer do to reduce the cold start time? (Choose two.)",
    "options": [
      "A. Add the Spring Framework to the project and enable dependency injection.",
      "B. Reduce the deployment package by including only needed modules from the AWS SDK for Java.",
      "C. Increase the memory allocation setting for the Lambda function.",
      "D. Increase the timeout setting for the Lambda function.",
      "E. Change the Lambda invocation mode from synchronous to asynchronous."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q52",
    "text": "A company runs an e-commerce website that uses Amazon DynamoDB where pricing for items is dynamically updated in real time. At any given time, multiple updates may occur simultaneously for pricing information on a particular product. This is causing the original editor's changes to be overwritten without a proper review process. Which DynamoDB write option should be selected to prevent this overwriting?",
    "options": [
      "A. Concurrent writes",
      "B. Conditional writes",
      "C. Atomic writes",
      "D. Batch writes"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q53",
    "text": "A developer is storing JSON \u0000les in an Amazon S3 bucket. The developer wants to securely share an object with a speci\u0000c group of people. How can the developer securely provide temporary access to the objects that are stored in the S3 bucket?",
    "options": [
      "A. Set object retention on the \u0000les. Use the AWS software development kit (SDK) to restore the object before subsequent requests. Provide the",
      "B. Use the AWS software development kit (SDK) to generate a presigned URL. Provide the presigned URL.",
      "C. Set a bucket policy that restricts access after a period of time. Provide the bucket's S3 URL.",
      "D. Con\u0000gure static web hosting on the S3 bucket. Provide the bucket's web URL."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q54",
    "text": "A front-end web application is using Amazon Cognito user pools to handle the user authentication \u0000ow. A developer is integrating Amazon DynamoDB into the application using the AWS SDK for JavaScript. How would the developer securely call the API without exposing the access or secret keys?",
    "options": [
      "A. Con\u0000gure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.",
      "B. Run the web application in an Amazon EC2 instance with the instance pro\u0000le con\u0000gured.",
      "C. Hardcore the credentials, use Amazon S3 to host the web application, and enable server-side encryption.",
      "D. Use Amazon Cognito user pool JSON Web Tokens (JWITs) to access the DynamoDB APIs."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q55",
    "text": "A Developer must build an application that uses Amazon DynamoDB. The requirements state that the items being stored in the DynamoDB table will be 7KB in size and that reads must be strongly consistent. The maximum read rate is 3 items per second, and the maximum write rate is 10 items per second. How should the Developer size the DynamoDB table to meet these requirements?",
    "options": [
      "A. Read: 3 read capacity units Write: 70 write capacity units",
      "B. Read: 6 read capacity units Write: 70 write capacity units",
      "C. Read: 6 read capacity units Write: 10 write capacity units",
      "D. Read: 3 read capacity units Write: 10 write capacity units"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q56",
    "text": "A company needs to ingest terabytes of data each hour from thousands of sources that are delivered almost continually throughout the day. The volume of messages generated varies over the course of the day. Messages must be delivered in real time for fraud detection and live operational dashboards. Which approach will meet these requirements?",
    "options": [
      "A. Send the messages to an Amazon SQS queue, then process the messages by using a \u0000eet of Amazon EC2 instances",
      "B. Use the Amazon S3 API to write messages to an S3 bucket, then process the messages by using Amazon Redshift",
      "C. Use AWS Data Pipeline to automate the movement and transformation of data",
      "D. Use Amazon Kinesis Data Streams with Kinesis Client Library to ingest and deliver messages"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q57",
    "text": "A developer is debugging an AWS Lambda function behind an Amazon API Gateway. Whenever the API Gateway endpoint is called, HTTP status code 200 is returned even though AWS Lambda is recording a 4xx error. What change needs to be made to return a proper error code through the API Gateway?",
    "options": [
      "A. Enable CORS in the API Gateway method settings",
      "B. Use a Lambda proxy integration to return HTTP codes and headers",
      "C. Enable API Gateway error pass-through.",
      "D. Return the value in the header x-Amzn-ErrorType."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q58",
    "text": "For a deployment using AWS CodeDeploy, what is the run order of the hooks for in-place deployments?",
    "options": [
      "A. Before Install -> Application Stop -> Application Start -> After Install",
      "B. Application Stop -> Before Install -> After Install -> Application Start",
      "C. Before Install -> Application Stop -> Validate Service -> Application Start",
      "D. Application Stop -> Before Install -> Validate Service -> Application Start"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q59",
    "text": "A developer is using Amazon S3 as the event source that invokes a Lambda function when new objects are created in the bucket. The event source mapping information is stored in the bucket noti\u0000cation con\u0000guration. The developer is working with different versions of the Lambda function, and has a constant need to update noti\u0000cation con\u0000guration so that Amazon S3 invokes the correct version. What is the MOST e\u0000cient and effective way to achieve mapping between the S3 event and Lambda?",
    "options": [
      "A. Use a different Lambda trigger.",
      "B. Use Lambda environment variables.",
      "C. Use a Lambda alias.",
      "D. Use Lambda tags."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q60",
    "text": "A company has a multi-tier application that uses Amazon API Gateway, AWS Lambda, and Amazon RDS. The company wants to investigate a slow response time to calls that come from the API Gateway API. What is the MOST operationally e\u0000cient way for the company to determine which internal call is causing the slow response times?",
    "options": [
      "A. Use Amazon CloudWatch.",
      "B. Use AWS X-Ray.",
      "C. Use AWS CloudTrail.",
      "D. Use VPC Flow Logs."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q61",
    "text": "A developer is deploying an application that will store \u0000les in an Amazon S3 bucket. The \u0000les must be encrypted at rest. The developer wants to automatically replicate the \u0000les to an S3 bucket in a different AWS Region for disaster recovery. How can the developer accomplish this task with the LEAST amount of con\u0000guration?",
    "options": [
      "A. Encrypt the \u0000les by using server-side encryption with S3 managed encryption keys (SSE-S3). Enable S3 bucket replication.",
      "B. Encrypt the \u0000les by using server-side encryption (SSE) with an AWS Key Management Service (AWS KMS) customer master key (CMK).",
      "C. Use the s3 sync command to sync the \u0000les to the S3 bucket in the other Region.",
      "D. Con\u0000gure an S3 Lifecycle con\u0000guration to automatically transfer \u0000les to the S3 bucket in the other Region."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q62",
    "text": "A serverless application is using AWS Step Functions to process data and save it to a database. The application needs to validate some data with an external service before saving the data. The application will call the external service from an AWS Lambda function, and the external service will take a few hours to validate the data. The external service will respond to a webhook when the validation is complete. A developer needs to pause the Step Functions work\u0000ow and wait for the response from the external service. What should the developer do to meet this requirement?",
    "options": [
      "A. Use the .wait ForTaskToken option in the Lambda function task state. Pass the token in the body.",
      "B. Use the .waitForTaskToken option in the Lambda function task state. Pass the invocation request.",
      "C. Call the Lambda function in synchronous mode. Wait for the external service to complete the processing.",
      "D. Call the Lambda function in asynchronous mode. Use the Wait state until the external service completes the processing."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q63",
    "text": "A developer must use AWS X-Ray to monitor an application that is running on an Amazon EC2 instance. The developer has prepared the application by using the X-Ray SDK. What should the developer do to perform the monitoring?",
    "options": [
      "A. Con\u0000gure the X-Ray SDK sampling rule and target. Activate the X-Ray daemon from the EC2 console or the AWS CLI with the modify-",
      "B. Install the X-Ray daemon. Assign an IAM role to the EC2 instance with a policy that allows writes to X-Ray.",
      "C. Install the X-Ray daemon. Con\u0000gure it to forward data to Amazon EventBridge (Amazon CloudWatch Events). Grant the EC2 instance",
      "D. Deploy the X-Ray SDK with the application, and instrument the application code. Use the SDK logger to capture and send the events."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q64",
    "text": "A developer is designing a full-stack serverless application. Files for the website are stored in an Amazon S3 bucket. AWS Lambda functions that use Amazon API Gateway endpoints return results from an Amazon DynamoDB table. The developer must create a solution that securely provides registration and authentication for the application while minimizing the amount of con\u0000guration. Which solution meets these requirements?",
    "options": [
      "A. Create an Amazon Cognito user pool and an app client. Con\u0000gure the app client to use the user pool and provide the hosted web UI",
      "B. Con\u0000gure an Amazon Cognito identity pool. Map the users with IAM roles that are con\u0000gured to access the S3 bucket that stores the",
      "C. Con\u0000gure and launch an Amazon EC2 instance to set up an identity provider with an Amazon Cognito user pool. Con\u0000gure the user pool to",
      "D. Create an IAM policy that allows access to the website that is stored in the S3 bucket. Attach the policy to an IAM group. Add IAM users to"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q65",
    "text": "A company has an application that writes \u0000les to an Amazon S3 bucket. Whenever there is a new \u0000le, an S3 noti\u0000cation event invokes an AWS Lambda function to process the \u0000le. The Lambda function code works as expected. However, when a developer checks the Lambda function logs, the developer \u0000nds that multiple invocations occur for every \u0000le. What is causing the duplicate entries?",
    "options": [
      "A. The S3 bucket name is incorrectly speci\u0000ed in the application and is targeting another S3 bucket.",
      "B. The Lambda function did not run correctly, and Lambda retried the invocation with a delay.",
      "C. Amazon S3 is delivering the same event multiple times.",
      "D. The application stopped intermittently and then resumed, splitting the logs into multiple smaller \u0000les."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q66",
    "text": "A developer needs to use the AWS CLI on an on-premises development server temporarily to access AWS services while performing maintenance. The developer needs to authenticate to AWS with their identity for several hours. What is the MOST secure way to call AWS CLI commands with the developer's IAM identity?",
    "options": [
      "A. Specify the developer's IAM access key ID and secret access key as parameters for each CLI command",
      "B. Run the aws con\u0000gure CLI command. Provide the developer's IAM access key ID and secret access key.",
      "C. Specify the developer's IAM pro\u0000le as a parameter for each CLI command.",
      "D. Run the get-session-token CLI command with the developer's IAM user. Use the returned credentials to call the CLI"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q67",
    "text": "An AWS Lambda function accesses two Amazon DynamoDB tables. A developer wants to improve the performance of the Lambda function by identifying bottlenecks in the function. How can the developer inspect the timing of the DynamoDB API calls?",
    "options": [
      "A. Add DynamoDB as an event source to the Lambda function. View the performance with Amazon CloudWatch metrics",
      "B. Place an Application Load Balancer (ALB) in front of the two DynamoDB tables. Inspect the ALB logs",
      "C. Limit Lambda to no more than \u0000ve concurrent invocations. Monitor from the Lambda console.",
      "D. Enable AWS X-Ray tracing for the function. View the traces from the X-Ray service."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q68",
    "text": "A developer deployed an application to an Amazon EC2 instance. The application needs to know the public IPv4 address of the instance. How can the application \u0000nd this information?",
    "options": [
      "A. Query the instance metadata from http://169.254.169.254/latest/meta-data/.",
      "B. Query the instance user data from http://169.254.169.254/latest/user-data/.",
      "C. Query the Amazon Machine Image (AMI) information from http://169.254 169.254/latest/meta-data/ami/.",
      "D. Check the hosts \u0000le of the operating system."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q69",
    "text": "A developer is designing an AWS Lambda function to perform a maintenance activity. The developer will use Amazon EventBridge (Amazon CloudWatch Events) to invoke the function on an hourly schedule. The developer wants the function to log information at different levels of detail according to the value of a log level variable. The developer must design the function so that the log level can be set without requiring a change to the function code. Which solution will meet these requirements?",
    "options": [
      "A. Add a custom log level parameter for the Lambda function. Set the parameter by using the Lambda console",
      "B. Set the log level in a Lambda environment variable",
      "C. Set the log level in the Amazon CloudWatch Logs console.",
      "D. Add a custom log level parameter for the Lambda function. Set the parameter by using the AWS CLI."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q70",
    "text": "A developer is creating a serverless application that uses an AWS Lambda function The developer will use AWS CloudFormation to deploy the application The application will write logs to Amazon CloudWatch Logs. The developer has created a log group in a CloudFormation template for the application to use. The developer needs to modify the CloudFormation template to make the name of the log group available to the application at runtime. Which solution will meet this requirement?",
    "options": [
      "A. Use the AWS::Include transform in CloudFormation to provide the log group's name to the application.",
      "B. Pass the log group's name to the application in the user data section of the CloudFormation template",
      "C. Use the CloudFormation template's Mappings section to specify the log group's name for the application.",
      "D. Pass the log group's Amazon Resource Name (ARN) as an environment variable to the Lambda function."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q71",
    "text": "A company is running an application on Amazon Elastic Container Service (Amazon ECS). When the company deploys a new version of the application, the company initially needs to expose 10% of live tra\u0000c t o the new version. After a period of time, the company needs to immediately route all the remaining live tra\u0000c t o the new version. Which ECS deployment should the company use to meet these requirements?",
    "options": [
      "A. Rolling update",
      "B. Blue/green with canary",
      "C. Blue/green with all at once",
      "D. Blue/green with linear"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q72",
    "text": "A microservices application is deployed across multiple containers in Amazon Elastic Container Service (Amazon ECS). To improve performance, a developer wants to capture trace information between the microservices and visualize the microservices architecture. Which solution will meet these requirements?",
    "options": [
      "A. Build the container from the amazon/aws-xray-daemon base image. Use the AWS X-Ray SDK to instrument the application.",
      "B. Install the Amazon CloudWatch agent on the container image. Use the CloudWatch SDK to publish custom metrics from each of the",
      "C. Install the AWS X-Ray daemon on each of the ECS instances.",
      "D. Con\u0000gure AWS CloudTrail data events to capture the tra\u0000c between the microservices."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q73",
    "text": "A company is planning to use AWS CodeDeploy to deploy an application to Amazon Elastic Container Service (Amazon ECS). During the deployment of a new version of the application, the company initially must expose only 10% of live tra\u0000c t o the new version of the deployed application. Then, after 15 minutes elapse, the company must route all the remaining live tra\u0000c t o the new version of the deployed application. Which CodeDeploy prede\u0000ned con\u0000guration will meet these requirements?",
    "options": [
      "A. CodeDeployDefault.ECSCanary10Percent15Minutes",
      "B. CodeDeployDefault.LambdaCanary10Percent5Minutes",
      "C. CodeDeployDefault.LambdaCanary10Percent15Minutes",
      "D. CodeDeployDefault.ECSLinear10PercentEvery1 Minutes"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q74",
    "text": "A developer notices timeouts from the AWS CLI when the developer runs list commands. What should the developer do to avoid these timeouts?",
    "options": [
      "A. Use the --page-size parameter to request a smaller number of items.",
      "B. Use shorthand syntax to separate the list by a single space.",
      "C. Use the yaml-stream output for faster viewing of large datasets.",
      "D. Use quotation marks around strings to enclose data structure."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q75",
    "text": "A company has moved a legacy on-premises application to AWS by performing a lift and shift. The application exposes a REST API that can be used to retrieve billing information. The application is running on a single Amazon EC2 instance. The application code cannot support concurrent invocations. Many clients access the API, and the company adds new clients all the time. A developer is concerned that the application might become overwhelmed by too many requests. The developer needs to limit the number of requests to the API for all current and future clients. The developer must not change the API, the application, or the client code. What should the developer do to meet these requirements?",
    "options": [
      "A. Place the API behind an Amazon API Gateway API. Set the server-side throttling limits.",
      "B. Place the API behind a Network Load Balancer. Set the target group throttling limits.",
      "C. Place the API behind an Application Load Balancer. Set the target group throttling limits.",
      "D. Place the API behind an Amazon API Gateway API. Set the per-client throttling limits."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q76",
    "text": "An ecommerce company wants to redirect users to a country-speci\u0000c website when they enter the example.com website. For example, the company wants to redirect United States users to example.com/us/ and wants to redirect French users to example.com/fr/. The web application is using Amazon CloudFront and an Application Load Balancer with an Amazon Elastic Container Service (Amazon ECS) cluster. The application's domain name resolution is con\u0000gured in an Amazon Route 53 public hosted zone. Which solution will meet these requirements with the LEAST operational effort?",
    "options": [
      "A. Update the routing policy for the application's Route 53 record to specify geolocation routing. Con\u0000gure listener rules based on a unique",
      "B. Create a CloudFront function to inspect the CloudFront-Viewer-Country header and return redirect responses to different URLs based on",
      "C. On the ECS web server con\u0000guration, use a GeoIP database to look up the requested IP address and redirect requests to the correct URLs",
      "D. Use AWS WAF to determine the country of origin. Create an AWS WAF custom rule with a geographic match condition to redirect tra\u0000c fr  om"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q77",
    "text": "A developer deploys an AWS Lambda function that runs each time a new Amazon S3 bucket is created. The Lambda function is supposed to attach an S3 Lifecycle policy to each new S3 bucket. The developer discovers that newly created S3 buckets have no S3 Lifecycle policy attached. Which AWS service should the developer use to \u0000nd a possible error in the Lambda function?",
    "options": [
      "A. AWS CloudTrail",
      "B. Amazon S3",
      "C. AWS CloudFormation",
      "D. Amazon CloudWatch"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q78",
    "text": "A developer has created a web API that uses Amazon Elastic Container Service (Amazon ECS) and an Application Load Balancer (ALB). An Amazon CloudFront distribution uses the API as an origin for web clients. The application has received millions of requests with a JSON Web Token (JWT) that is not valid in the authorization header. The developer has scaled out the application to handle the unauthenticated requests. What should the developer do to reduce the number of unauthenticated requests to the API?",
    "options": [
      "A. Add a request routing rule to the ALB to return a 401 status code if the authorization header is missing.",
      "B. Add a container to the ECS task de\u0000nition to validate JWTs Set the new container as a dependency of the application container.",
      "C. Create a CloudFront function for the distribution Use the crypto module in the function to validate the JWT.",
      "D. Add a custom authorizer for AWS Lambda to the CloudFront distribution to validate the JWT."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q79",
    "text": "A developer is creating a mobile application that will not require users to log in. What is the MOST e\u0000cient method to grant users access to AWS resources?",
    "options": [
      "A. Use an identity provider to securely authenticate with the application.",
      "B. Create an AWS Lambda function to create an IAM user when a user accesses the application.",
      "C. Create credentials using AWS KMS and apply these credentials to users when using the application.",
      "D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q80",
    "text": "A developer has created on AWS Lambda function tool uses 15 MB of memory. When the developer runs the code natively on a laptop that has 4 cores, the function runs within 100 ms. When the developer deploys the code as a Lambda function with 128 MB of memory, the \u0000rst run takes 3 seconds. Subsequent runs take more than 500 ms to \u0000nish. The developer needs to improve the performance of the Lambda function so that the function runs consistently in less than 100 ms, excluding the initial startup time. Which solution will meet this requirement?",
    "options": [
      "A. Increase the reserved concurrency of the Lambda function.",
      "B. Increase the provisioned concurrency of the Lambda function.",
      "C. Increase the memory of the Lambda function.",
      "D. Repackage the Lambda function as a container. Redeploy the function."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q81",
    "text": "A company is planning to use AWS CodeDeploy to deploy an application to AWS Lambda. During the deployment of a new version of the application, the company initially must expose only 10% of live tra\u0000c t o the new version of the deployed application. Then, every 10 minutes, the company must route another 10% of live tra\u0000c t o the new version of the deployed application until all live tra\u0000c is routed to the new version. Which CodeDeploy prede\u0000ned con\u0000guration will meet these requirements?",
    "options": [
      "A. CodeDeployDefault.OnceAtATime",
      "B. CodeDeployDefault.LambdaCanary10Percent10Minutes",
      "C. CodeDeployDefault.LambdaLinear10PercentEvery10Minutes",
      "D. CodeDeployDefault.ECSLinear10PercentEvery3Minutes"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q82",
    "text": "A developer wants to use AWS Elastic Beanstalk to test a new version of on application in a test environment. Which deployment method offers the FASTEST deployment?",
    "options": [
      "A. Immutable",
      "B. Rolling",
      "C. Rolling with additional batch",
      "D. All at once"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q83",
    "text": "A developer has built an application that inserts data into an Amazon DynamoDB table. The table is con\u0000gured to use provisioned capacity. The application is deployed on a burstable nano Amazon EC2 Instance. The application logs show that the application has been failing because of a ProvisionedThroughputExceedException error. Which actions should the developer take to resolve this issue? (Choose two.)",
    "options": [
      "A. Move The application to a larger EC instance.",
      "B. Increase the number or read capacity units (RCUs) that are provisioned for the DynamoDB table.",
      "C. Reduce the frequency of requests to DynamoDB by implement ng exponential backoff.",
      "D. Increase the frequency of requests to DynamoDB by decreasing the retry delay.",
      "E. Change the capacity mode of the DynamoDB table from provisioned to on-demand."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q84",
    "text": "A developer is deploying on application on Amazon EC2 instances that run in Account A. In certain cases, this application needs to read data from a private Amazon S3 bucket in Account B. The developer must provide the application access to the S3 bucket without exposing the S3 bucket to anyone else. Which combination of actions should the developer take to meet these requirements? (Choose two.)",
    "options": [
      "A. Create an IAM role with S3 read permissions in Account B.",
      "B. Update the instance pro\u0000le I AM role in Account A with S3 read permissions.",
      "C. Make the S3 bucket public with limited access for Account A.",
      "D. Con\u0000gure the bucket policy in Account B to grant permissions to the instance pro\u0000le r ole.",
      "E. Add a trust policy that allows s3:Get* permissions to the IAM rote in Account B."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q85",
    "text": "A developer at a company recently created a serverless application to process and show data from business reports. The application's user interface (UI) allows users to select and start processing the \u0000ies. The UI displays a message when the result is available to view. The application uses AWS Step Functions with AWS Lambda functions to process the \u0000les. The developer used Amazon API Gateway and Lambda functions to create an API to support the UI. The company's UI team reports that the request to process a \u0000le s often returning timeout errors because of the size or complexity of the \u0000les. The UI team wants the API to provide an immediate response so that the UI can display a message while the \u0000les are being processed. The backend process that is invoked by the API needs to send an email message when the report processing is complete. What should the developer do to con\u0000gure the API to meet these requirements?",
    "options": [
      "A. Change the API Gateway route to add an X-Amz-Invocation-Type header with a static value of 'Event' in the integration request. Deploy the",
      "B. Change the con\u0000guration of the Lambda function that implements the request to process a \u0000le. Con\u0000gure the maximum age of the event so",
      "C. Change the API Gateway timeout value to match the Lambda function timeout value. Deploy the API Gateway stage to apply the changes.",
      "D. Change the API Gateway route to add an X-Amz-Target header with a static value of 'Async' in the integration request. Deploy the API"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q86",
    "text": "An ecommerce application is running behind an Application Load Balancer. A developer observes some unexpected load on the application during non-peak hours. The developer wants to analyze patterns for the client IP addresses that use the application. Which HTTP header should the developer use for this analysis?",
    "options": [
      "A. The X-Forwarded-Proto header",
      "B. The X-Forwarded-Host header",
      "C. The X-Forwarded-For header",
      "D. The X-Forwarded-Port header"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q87",
    "text": "A developer needs to create an application that supports Security Assertion Markup Language (SAML) and authentication with social media providers. It must also allow access to AWS services, such as Amazon DynamoDB. Which AWS service or feature will meet these requirements with the LEAST amount of additional coding?",
    "options": [
      "A. AWS AppSync",
      "B. Amazon Cognito identity pools",
      "C. Amazon Cognito user pools",
      "D. Amazon Lambda@Edge"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q88",
    "text": "A developer is designing a serverless application for an ecommerce website. An Amazon API Gateway API exposes AWS Lambda functions for billing, payment, and user operations. The website features shopping carts for the users. The shopping carts must be stored for extended periods of time and will be retrieved frequently by the front-end application. The load on the application will vary signi\u0000cantly based on the time of day and the promotional sales that are offered on the website. The application must be able to scale automatically to meet these changing demands. Which solution will meet these requirements?",
    "options": [
      "A. Store the data objects on an Amazon RDS DB instance. Cache the data objects in memory by using Amazon ElastiCache.",
      "B. Store the data objects on Amazon EC2 instances behind an Application Load Balancer. Use session a\u0000nity (sticky sessions) for each user's",
      "C. Store the data objects in Amazon S3 buckets. Cache the data objects by using Amazon CloudFront with the maximum TTL.",
      "D. Store the data objects in Amazon DynamoDB tables. Cache the data objects by using DynamoDB Accelerator (DAX)."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q89",
    "text": "A company is migrating its on-premises database to Amazon RDS for MySQL. The company has read-heavy workloads, and wants to make sure it re-factors its code to achieve optimum read performance for its queries. How can this objective be met?",
    "options": [
      "A. Add database retries to effectively use RDS with vertical scaling.",
      "B. Use RDS with multi-AZ deployment.",
      "C. Add a connection string to use an RDS read replica for read queries.",
      "D. Add a connection string to use a read replica on an EC2 instance."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q90",
    "text": "An application running on Amazon EC2 opens connections to an Amazon RDS SQL Server database. The developer does not want to store the user name and password for the database in the code. The developer would also like to automatically rotate the credentials. What is the MOST secure way to store and access the database credentials?",
    "options": [
      "A. Create an IAM role that has permissions to access the database. Attach the role to the EC2 instance.",
      "B. Use AWS Secrets Manager to store the credentials. Retrieve the credentials from Secrets Manager as needed.",
      "C. Store the credentials in an encrypted text \u0000le in an Amazon S3 bucket. Con\u0000gure the EC2 instance's user data to download the credentials",
      "D. Store the user name and password credentials directly in the source code. No further action is needed because the source code is stored in"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q91",
    "text": "A developer received the following error message during an AWS CloudFormation deployment: DELETE_FAILED (The following resource(s) failed to delete: [ASGInstanceRolel2345678].) Which action should the developer take to resolve this error?",
    "options": [
      "A. Contact AWS Support to report an issue with the Auto Scaling Groups (ASG) service.",
      "B. Add a DependsOn attribute to the ASGInstanceRole12345678 resource in the CloudFormation template. Then delete the stack.",
      "C. Modify the CloudFormation template to retain the ASGInstanceRolel2345678 resource. Then manually delete the resource after",
      "D. Add a force parameter when calling CloudFormation with the role-arn of ASGInstanceRolel2345678."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q92",
    "text": "An application runs on multiple EC2 instances behind an ELB. Where is the session data best written so that it can be served reliably across multiple requests?",
    "options": [
      "A. Write data to Amazon ElastiCache.",
      "B. Write data to Amazon Elastic Block Store.",
      "C. Write data to Amazon EC2 Instance Store.",
      "D. Write data to the root \u0000lesystem."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q93",
    "text": "A company is using continuous integration/continuous delivery (CI/CD) systems. A developer must automate the deployment of an application software package to Amazon EC2 instances and virtual servers that run on premises. Which AWS service should the developer use to meet these requirements?",
    "options": [
      "A. AWS Cloud9",
      "B. AWS CodeBuild",
      "C. AWS Elastic Beanstalk",
      "D. AWS CodeDeploy"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q94",
    "text": "A software company is using AWS CodeBuild to build an application. The buildspec runs the application build and creates a Docker image that contains the application. The company needs to push the Docker image to Amazon Elastic Container Registry (Amazon ECR) only upon the completion of each successful build. Which solution meets these requirements?",
    "options": [
      "A. Change the buildspec by adding a post_build phase that uses the commands block to push the Docker image.",
      "B. Change the buildspec by adding a post_build phase that uses the \u0000nally block to push the Docker image.",
      "C. Specify the Docker image in the buildspec's artifacts sequence with an action to push the image.",
      "D. Use a batch build to de\u0000ne a build matrix. Use the batch build to push the Docker image."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q95",
    "text": "A company is using Amazon RDS as the backend database for its application. After a recent marketing campaign, a surge of read requests to the database increased the latency of data retrieval from the database. The company has decided to implement a caching layer in front of the database. The cached content must be encrypted and must be highly available. Which solution will meet these requirements?",
    "options": [
      "A. Amazon CloudFront",
      "B. Amazon ElastiCache for Memcached",
      "C. Amazon ElastiCache for Redis in cluster mode",
      "D. Amazon DynamoDB Accelerator (DAX)"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q96",
    "text": "A company has an application that runs on AWS Elastic Beanstalk in a load-balanced environment. The company needs to update the instance types in the environment to a more recent generation of instance types. The company must minimize downtime during the deployment of this con\u0000guration change. Which deployment options will meet these requirements? (Choose two.)",
    "options": [
      "A. Disabled",
      "B. Rolling based on Health",
      "C. Immutable",
      "D. All at once",
      "E. Canary"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q97",
    "text": "Given the source code for an AWS Lambda function in the local \u0000le store.py containing a handler function called get_store and the following AWS CloudFormation template: What should be done to prepare the template so that it can be deployed using the AWS CLI command aws cloudformation deploy?",
    "options": [
      "A. Use aws cloudformation compile to base64 encode and embed the source \u0000le into a modi\u0000ed CloudFormation template.",
      "B. Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modi\u0000ed CloudFormation template.",
      "C. Use aws lambda zip to package the source \u0000le t  ogether with the CloudFormation template and deploy the resulting zip archive.",
      "D. Use aws serverless create-package to embed the source \u0000le directly into the existing CloudFormation template."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q98",
    "text": "A company is developing a report implemented using AWS Step Functions. Amazon CloudWatch shows errors in the Step Functions task state machine. To troubleshoot each task, the state input needs to be included along with the error message in the state output. Which coding practice can preserve both the original input and the error for the state?",
    "options": [
      "A. Use ResultPath in a Catch statement to include the error with the original input.",
      "B. Use InputPath in a Catch statement and set the value to null.",
      "C. Use ErrorEquals in a Retry statement to include the error with the original input.",
      "D. Use OutputPath in a Retry statement and set the value to $."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q99",
    "text": "A developer is receiving HTTP 400: ThrottlingException errors intermittently when calling the Amazon CloudWatch API. When a call fails, no data is retrieved. What best practice should \u0000rst be applied to address this issue?",
    "options": [
      "A. Contact AWS Support for a limit increase.",
      "B. Use the AWS CLI to get the metrics.",
      "C. Analyze the applications and remove the API call.",
      "D. Retry the call with exponential backoff."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q100",
    "text": "A company has an online order website that uses Amazon DynamoDB to store item inventory. A sample of the inventory object is as follows: A developer needs to reduce all inventory prices by 100 as long as the resulting price would not be less than 500. What should the developer do to make this change with the LEAST number of calls to DynamoDB?",
    "options": [
      "A. Perform a DynamoDB Query operation with the Id. If the price is >= 600, perform an UpdateItem operation to update the price.",
      "B. Perform a DynamoDB UpdateItem operation with a condition expression of \"Price >= 600\".",
      "C. Perform a DynamoDB UpdateItem operation with a condition expression of \"ProductCategory IN ({\"S\": \"Sporting Goods\"}) and Price 600\".",
      "D. Perform a DynamoDB UpdateItem operation with a condition expression of \"MIN Price = 500\"."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q101",
    "text": "A company is using an AWS Lambda function to process records from an Amazon Kinesis data stream. The company recently observed slow processing of the records. A developer notices that the iterator age metric for the function is increasing and that the Lambda run duration is constantly above normal. Which actions should the developer take to increase the processing speed? (Choose two.)",
    "options": [
      "A. Increase the number of shards of the Kinesis data stream.",
      "B. Decrease the timeout of the Lambda function.",
      "C. Increase the memory that is allocated to the Lambda function.",
      "D. Decrease the number of shards of the Kinesis data stream.",
      "E. Increase the timeout of the Lambda function."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q102",
    "text": "A developer is making changes to a custom application that uses AWS Elastic Beanstalk. Which solutions will update the Elastic Beanstalk environment with the new application version after the developer completes the changes? (Choose two.)",
    "options": [
      "A. Package the application code into a .zip \u0000le. Use the AWS Management Console to upload the zip \u0000le and deploy the packaged application.",
      "B. Package the application code into a .tar \u0000le. Use the AWS Management Console to create a new application version from the .tar \u0000le.",
      "C. Package the application code into a .tar \u0000le. Use the AWS Management Console to upload the .tar \u0000le and deploy the packaged application.",
      "D. Package the application code into a .zip \u0000le. Use the AWS CLI to create a new application version from the .zip \u0000le and to update the",
      "E. Package the application code into a .zip \u0000le. Use the AWS Management Console to create a new application version from the .zip \u0000le."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q103",
    "text": "A company has an application where reading objects from Amazon S3 is based on the type of user. The user types are registered user and guest user. The company has 25,000 users and is growing. Information is pulled from an S3 bucket depending on the user type. Which approaches are recommended to provide access to both user types? (Choose two.)",
    "options": [
      "A. Provide a different access key and secret access key in the application code for registered users and guest users to provide read access to",
      "B. Use S3 bucket policies to restrict read access to speci\u0000c IAM users.",
      "C. Use Amazon Cognito to provide access using authenticated and unauthenticated roles.",
      "D. Create a new IAM user for each user and grant read access.",
      "E. Use the AWS IAM service and let the application assume the different roles using the AWS Security Token Service (AWS STS) AssumeRole"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q104",
    "text": "A developer is writing an application to analyze the tra\u0000c t o a \u0000eet of Amazon EC2 instances. The EC2 instances run behind a public Application Load Balancer (ALB). An HTTP server runs on each of the EC2 instances, logging all requests to a log \u0000le. The developer wants to capture the client public IP addresses. The developer analyzes the log \u0000les and notices only the IP address of the ALB. What must the developer do to capture the client public IP addresses in the log \u0000le?",
    "options": [
      "A. Add a Host header to the HTTP server log con\u0000guration \u0000le.",
      "B. Install the Amazon CloudWatch Logs agent on each EC2 instance. Con\u0000gure the agent to write to the log \u0000le.",
      "C. Install the AWS X-Ray daemon on each EC2 instance. Con\u0000gure the daemon to write to the log \u0000le.",
      "D. Add an X-Forwarded-For header to the HTTP server log con\u0000guration \u0000le."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q105",
    "text": "A developer is writing a new AWS Serverless Application Model (AWS SAM) template with a new AWS Lambda function. The Lambda function runs complex code. The developer wants to test the Lambda function with more CPU power. What should the developer do to meet this requirement?",
    "options": [
      "A. Increase the runtime engine version.",
      "B. Increase the timeout.",
      "C. Increase the number of Lambda layers.",
      "D. Increase the memory."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q106",
    "text": "A developer uses a single AWS CloudFormation template to con\u0000gure the test environment and the production environment for an application. The developer handles environment-speci\u0000c requirements in the CloudFormation template. The developer decides to update the Amazon EC2 Auto Scaling launch template with new Amazon Machine Images (AMIs) for each environment. The CloudFormation update for the new AMIs is successful in the test environment, but the update fails in the production environment. What are the possible causes of the CloudFormation update failure in the production environment? (Choose two.)",
    "options": [
      "A. The new AMIs do not ful\u0000ll the speci\u0000ed conditions in the CloudFormation template.",
      "B. The service quota for the number of EC2 vCPUs in the AWS Region has been exceeded.",
      "C. The security group that is speci\u0000ed in the CloudFormation template does not exist.",
      "D. CloudFormation does not recognize the template change as an update.",
      "E. CloudFormation does not have su\u0000cient IAM permissions to make the changes."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q107",
    "text": "A developer is creating a serverless web application and maintains different branches of code. The developer wants to avoid updating the Amazon API Gateway target endpoint each time a new code push is performed. What solution would allow the developer to perform a code push e\u0000ciently, without the need to update the API Gateway?",
    "options": [
      "A. Associate different AWS Lambda functions to an API Gateway target endpoint.",
      "B. Create different stages in API Gateway. then associate API Gateway with AWS Lambda.",
      "C. Create aliases and versions in AWS Lambda.",
      "D. Tag the AWS Lambda functions with different names."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q108",
    "text": "A developer needs to deploy an application running on AWS Fargate using Amazon ECS. The application has environment variables that must be passed to a container for the application to initialize. How should the environment variables be passed to the container?",
    "options": [
      "A. De\u0000ne an array that includes the environment variables under the environment parameter within the service de\u0000nition.",
      "B. De\u0000ne an array that includes the environment variables under the environment parameter within the task de\u0000nition.",
      "C. De\u0000ne an array that includes the environment variables under the entryPoint parameter within the task de\u0000nition.",
      "D. De\u0000ne an array that includes the environment variables under the entryPoint parameter within the service de\u0000nition."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q109",
    "text": "A developer must extend an existing application that is based on the AWS Serverless Application Model (AWS SAM). The developer has used the AWS SAM CLI to create the project. The project contains different AWS Lambda functions. Which combination of commands must the developer use to redeploy the AWS SAM application? (Choose two.)",
    "options": [
      "A. sam init",
      "B. sam validate",
      "C. sam build",
      "D. sam deploy",
      "E. sam publish"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q110",
    "text": "A developer manages an application that interacts with Amazon RDS. After observing slow performance with read queries, the developer implements Amazon ElastiCache to update the cache immediately following the primary database update. What will be the result of this approach to caching?",
    "options": [
      "A. Caching will increase the load on the database instance because the cache is updated for every database update.",
      "B. Caching will slow performance of the read queries because the cache is updated when the cache cannot \u0000nd the requested data.",
      "C. The cache will become large and expensive because the infrequently requested data is also written to the cache.",
      "D. Overhead will be added to the initial response time because the cache is updated only after a cache miss."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q111",
    "text": "A developer has a stateful web server on-premises that is being migrated to AWS. The developer must have greater elasticity in the new design. How should the developer re-factor the application to make it more elastic? (Choose two.)",
    "options": [
      "A. Use pessimistic concurrency on Amazon DynamoDB.",
      "B. Use Amazon CloudFront with an Auto Scaling group.",
      "C. Use Amazon CloudFront with an AWS Web Application Firewall.",
      "D. Store session state data in an Amazon DynamoDB table.",
      "E. Use an ELB with an Auto Scaling group."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q112",
    "text": "A developer has a legacy application that is hosted on-premises. Other applications hosted on AWS depend on the on-premises application for proper functioning. In case of any application errors, the developer wants to be able to use Amazon CloudWatch to monitor and troubleshoot all applications from one place. How can the developer accomplish this?",
    "options": [
      "A. Install an AWS SDK on the on-premises server to automatically send logs to CloudWatch.",
      "B. Download the CloudWatch agent to the on-premises server. Con\u0000gure the agent to use IAM user credentials with permissions for",
      "C. Upload log \u0000les from the on-premises server to Amazon S3 and have CloudWatch read the \u0000les.",
      "D. Upload log \u0000les from the on-premises server to an Amazon EC2 instance and have the instance forward the logs to CloudWatch."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q113",
    "text": "A developer is designing a serverless application with two AWS Lambda functions to process photos. One Lambda function stores objects in an Amazon S3 bucket and stores the associated metadata in an Amazon DynamoDB table. The other Lambda function fetches the objects from the S3 bucket by using the metadata from the DynamoDB table. Both Lambda functions use the same Python library to perform complex computations and are approaching the quota for the maximum size of zipped deployment packages. What should the developer do to reduce the size of the Lambda deployment packages with the LEAST operational overhead?",
    "options": [
      "A. Package each Python library in its own .zip \u0000le archive. Deploy each Lambda function with its own copy of the library.",
      "B. Create a Lambda layer with the required Python library. Use the Lambda layer in both Lambda functions.",
      "C. Combine the two Lambda functions into one Lambda function. Deploy the Lambda function as a single .zip \u0000le archive.",
      "D. Download the Python library to an S3 bucket. Program the Lambda functions to reference the object URLs."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q114",
    "text": "A developer is adding a feature to a client-side application so that users can upload videos to an Amazon S3 bucket. What is the MOST secure way to give the application the ability to write \u0000les to the S3 bucket?",
    "options": [
      "A. Update the S3 bucket policy to allow public write access. Allow any user to upload videos by removing the need to handle user",
      "B. Create a new IAM policy and a corresponding IAM user with permissions to write to the S3 bucket. Store the key and the secret for the user",
      "C. Con\u0000gure the API layer of the application to have a new endpoint that creates signed URLs that allow an object to be put into the S3 bucket.",
      "D. Generate a new IAM key and a corresponding secret by using the AWS account root user credentials. Store the key and the secret for the"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q115",
    "text": "A company is building an application for stock trading. The application needs sub-millisecond latency for processing trade requests. The company uses Amazon DynamoDB to store all the trading data that is used to process each trading request. A development team performs load testing on the application and \u0000nds that the data retrieval time is higher than expected. The development team needs a solution that reduces the data retrieval time with the least possible effort. Which solution meets these requirements?",
    "options": [
      "A. Add local secondary indexes (LSIs) for the trading data.",
      "B. Store the trading data in Amazon S3, and use S3 Transfer Acceleration.",
      "C. Add retries with exponential backoff for DynamoDB queries.",
      "D. Use DynamoDB Accelerator (DAX) to cache the trading data."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q116",
    "text": "A developer needs to build and deploy a serverless application that has an API that mobile clients will use. The API will use Amazon DynamoDB and Amazon OpenSearch Service (Amazon Elasticsearch Service) as data sources. Responses that are sent to the clients will contain aggregated data from both data sources. The developer must minimize the number of API endpoints and must minimize the number of API calls that are required to retrieve the necessary data. Which solution should the developer use to meet these requirements?",
    "options": [
      "A. GraphQL API on AWS AppSync",
      "B. REST API on Amazon API Gateway",
      "C. GraphQL API on an Amazon EC2 instance",
      "D. REST API on AWS Elastic Beanstalk"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q117",
    "text": "A Lambda function processes data before sending it to a downstream service. Each piece of data is approximately 1MB in size. After a security audit, the function is now required to encrypt the data before sending it downstream. Which API call is required to perform the encryption?",
    "options": [
      "A. Pass the data to the KMS ReEncrypt API for encryption.",
      "B. Use the KMS GenerateDataKey API to get an encryption key.",
      "C. Use the KMS GenerateDataKeyWithoutPlainText API to get an encryption key.",
      "D. Pass the data to KMS as part of the Encrypt API for encryption."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q118",
    "text": "A company has a web application that runs on Amazon EC2 instances with a custom Amazon Machine Image (AMI). The company uses AWS CloudFormation to provision the application. The application runs in the us-east-1 Region, and the company needs to deploy the application to the us-west-1 Region. An attempt to create the AWS CloudFormation stack in us-west-1 fails. An error message states that the AMI ID does not exist. A developer must resolve this error with a solution that uses the least amount of operational overhead. Which solution meets these requirements?",
    "options": [
      "A. Change the AWS CloudFormation templates for us-east-1 and us-west-1 to use an AWS AMI. Relaunch the stack for both Regions.",
      "B. Copy the custom AMI from us-east-1 to us-west-1. Update the AWS CloudFormation template for us-west-1 to refer to AMI ID for the copied",
      "C. Build the custom AMI in us-west-1. Create a new AWS CloudFormation template to launch the stack in us-west-1 with the new AMI ID.",
      "D. Manually deploy the application outside AWS CloudFormation in us-west-1."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q119",
    "text": "A developer wants to run a PHP website with an NGINX proxy and package them as Docker containers in one environment. The developer wants a managed environment with automated provisioning and load balancing. The developer cannot change the con\u0000guration and must minimize operational overhead. How should the developer build the website to meet these requirements?",
    "options": [
      "A. Create a new application in AWS Elastic Beanstalk that is precon\u0000gured for a multicontainer Docker environment. Upload the code, and",
      "B. Deploy the code on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.",
      "C. Construct an AWS CloudFormation template that launches Amazon EC2 instances. Install and con\u0000gure the PHP code by using cfn helper",
      "D. Upload the code for the PHP website into an Amazon S3 bucket. Host the website from the S3 bucket."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q120",
    "text": "A company has a website that displays a daily newsletter. When a user visits the website, an AWS Lambda function processes the browser's request and queries the company's on-premises database to obtain the current newsletter. The newsletters are stored in English. The Lambda function uses the Amazon Translate TranslateText API operation to translate the newsletters, and the translation is displayed to the user. Due to an increase in popularity, the website's response time has slowed. The database is overloaded. The company cannot change the database and needs a solution that improves the response time of the Lambda function. Which solution meets these requirements?",
    "options": [
      "A. Change to asynchronous Lambda function invocation.",
      "B. Cache the translated newsletters in the Lambda /tmp directory.",
      "C. Enable TranslateText API caching.",
      "D. Change the Lambda function to use parallel processing."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q121",
    "text": "A developer is creating an AWS CloudFormation template for an application. The application includes an Amazon RDS database. The password to be set for the resource's MasterUserPassword property is already stored in AWS Secrets Manager. How can the developer reference the value of the password in the CloudFormation template?",
    "options": [
      "A. Use a parameter in the CloudFormation template with the same name of the secret.",
      "B. Use the ssm dynamic reference by specifying the name of the secret and its version.",
      "C. Use the secretsmanager dynamic reference by specifying the appropriate reference-key segment.",
      "D. Use the ssm-secure dynamic reference by specifying the name of the secret and its version."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q122",
    "text": "An application is using Amazon DynamoDB as its data store, and should be able to read 100 items per second as strongly consistent reads. Each item is 5 KB in size. To what value should the table's provisioned read throughput be set?",
    "options": [
      "A. 50 read capacity units",
      "B. 100 read capacity units",
      "C. 200 read capacity units",
      "D. 500 read capacity units"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q123",
    "text": "A developer created a Lambda function for a web application backend. When testing the Lambda function from the AWS Lambda console, the developer can see that the function is being run, but there is no log data being generated in Amazon CloudWatch Logs, even after several minutes. What could cause this situation?",
    "options": [
      "A. The Lambda function does not have any explicit log statements for the log data to send it to CloudWatch Logs.",
      "B. The Lambda function is missing CloudWatch Logs as a source trigger to send log data.",
      "C. The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs.",
      "D. The Lambda function is missing a target CloudWatch Log group."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q124",
    "text": "A developer has written code for an application and wants to share it with other developers on the team to receive feedback. The shared application code needs to be stored long-term with multiple versions and batch change tracking. Which AWS service should the developer use?",
    "options": [
      "A. AWS CodeBuild",
      "B. Amazon S3",
      "C. AWS CodeCommit",
      "D. AWS Cloud9"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q125",
    "text": "A developer has created a new IAM user that has the s3:PutObject permission to write to a speci\u0000c Amazon S3 bucket. The S3 bucket uses server- side encryption with AWS KMS managed keys (SSE-KMS) as the default encryption. When an application uses the access key and secret key of the IAM user to call the PutObject API operation, the application receives an access denied error. What should the developer do to resolve this error?",
    "options": [
      "A. Update the policy of the IAM user to allow the s3:EncryptionCon\u0000guration action.",
      "B. Update the bucket policy of the S3 bucket to allow the IAM user to upload objects.",
      "C. Update the policy of the IAM user to allow the kms:GenerateDataKey action.",
      "D. Update the ACL of the S3 bucket to allow the IAM user to upload objects."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q126",
    "text": "A static website is hosted in an Amazon S3 bucket. Several HTML pages on the site use JavaScript to download images from another Amazon S3 bucket. These images are not displayed when users browse the site. What is the possible cause for the issue?",
    "options": [
      "A. The referenced Amazon S3 bucket is in another region.",
      "B. The images must be stored in the same Amazon S3 bucket.",
      "C. Port 80 must be opened on the security group in which the Amazon S3 bucket is located.",
      "D. Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q127",
    "text": "An application needs to encrypt data that is written to Amazon S3 where the keys are managed in an on-premises data center, and the encryption is handled by S3. Which type of encryption should be used?",
    "options": [
      "A. Use server-side encryption with Amazon S3-managed keys.",
      "B. Use server-side encryption with AWS KMS-managed keys.",
      "C. Use client-side encryption with AWS KMS-managed keys.",
      "D. Use server-side encryption with customer-provided keys."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q128",
    "text": "A developer is building a serverless application that is based on AWS Lambda. The developer initializes the AWS software development kit (SDK) outside of the Lambda handler function. What is the PRIMARY bene\u0000t of this action?",
    "options": [
      "A. Improves legibility and stylistic convention",
      "B. Takes advantage of runtime environment reuse",
      "C. Provides better error handling",
      "D. Creates a new SDK instance for each invocation"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q129",
    "text": "A developer is testing a Docker-based application that uses the AWS SDK to interact with Amazon DynamoDB. In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster. How should the application authenticate with AWS services in production?",
    "options": [
      "A. Con\u0000gure an ECS task IAM role for the application to use.",
      "B. Refactor the application to call AWS STS AssumeRole based on an instance role.",
      "C. Con\u0000gure AWS access key/secret access key environment variables with new credentials.",
      "D. Con\u0000gure the credentials \u0000le with a new access key/secret access key."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q130",
    "text": "A developer has created an AWS Lambda function to provide noti\u0000cation through Amazon Simple Noti\u0000cation Service (Amazon SNS) whenever a \u0000le is uploaded to Amazon S3 that is larger than 50 MB. The developer has deployed and tested the Lambda function by using the CLI. However, when the event noti\u0000cation is added to the S3 bucket and a 3,000 MB \u0000le is uploaded, the Lambda function does not launch. Which of the following is a possible reason for the Lambda function's inability to launch?",
    "options": [
      "A. The S3 event noti\u0000cation does not activate for \u0000les that are larger than 1,000 MB.",
      "B. The resource-based policy for the Lambda function does not have the required permissions to be invoked by Amazon S3.",
      "C. Lambda functions cannot be invoked directly from an S3 event.",
      "D. The S3 bucket needs to be made public."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q131",
    "text": "A company stores documents in Amazon S3 with default settings. A new regulation requires the company to encrypt the documents at rest, rotate the encryption keys annually, and keep a record of when the encryption keys were rotated. The company does not want to manage the encryption keys outside of AWS. Which solution will meet these requirements?",
    "options": [
      "A. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).",
      "B. Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).",
      "C. Use server-side encryption with customer-provided encryption keys (SSE-C).",
      "D. Use client-side encryption before sending the data to Amazon S3."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q132",
    "text": "A developer has discovered that an application responsible for processing messages in an Amazon SQS queue is routinely falling behind. The application is capable of processing multiple messages in one invocation, but is only receiving one message at a time. What should the developer do to increase the number of messages the application receives?",
    "options": [
      "A. Call the ChangeMessageVisibility API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.",
      "B. Call the AddPermission API to set MaxNumberOfMessages for the ReceiveMessage action to a value greater than the default of 1.",
      "C. Call the ReceiveMessage API to set MaxNumberOfMessages to a value greater than the default of 1.",
      "D. Call the SetQueueAttributes API for the queue and set MaxNumberOfMessages to a value greater than the default of 1."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q133",
    "text": "A developer is using an Amazon Kinesis Data Firehose delivery stream to store data in Amazon S3. Before storing the data in Amazon S3, the developer wants to enrich the data by combining the data with data from an Amazon DynamoDB table. How can the developer implement the data enrichment?",
    "options": [
      "A. Create a Kinesis Data Firehose data transformation by using an Amazon EC2 instance.",
      "B. Con\u0000gure the Kinesis Data Firehose delivery stream to send data to a Kinesis data stream. Enrich the data by using an AWS Lambda",
      "C. Con\u0000gure the Kinesis Data Firehose delivery stream to store data in the DynamoDB table. Export the table to Amazon S3.",
      "D. Create a Kinesis Data Firehose data transformation by using an AWS Lambda function."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q134",
    "text": "A company created an application to consume and process data. The application uses Amazon Simple Queue Service (Amazon SQS) and AWS Lambda functions. The application is currently working as expected, but it occasionally receives several messages that it cannot process properly. The company needs to clear these messages to prevent the queue from becoming blocked. A developer must implement a solution that makes queue processing always operational. The solution must give the company the ability to defer the messages with errors and save these messages for further analysis. What is the MOST operationally e\u0000cient solution that meets these requirements?",
    "options": [
      "A. Con\u0000gure Amazon CloudWatch Logs to save the error messages to a separate log stream.",
      "B. Create a new SQS queue. Set the new queue as a dead-letter queue for the application queue. Con\u0000gure the Maximum Receives setting.",
      "C. Change the SQS queue to a FIFO queue. Con\u0000gure the message retention period to 0 seconds.",
      "D. Con\u0000gure an Amazon CloudWatch alarm for Lambda function errors. Publish messages to an Amazon Simple Noti\u0000cation Service (Amazon"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q135",
    "text": "A company has a website that is developed in PHP and is launched using AWS Elastic Beanstalk. There is a new version of the website that needs to be deployed in the Elastic Beanstalk environment. The company cannot tolerate having the website o\u0000ine if an update fails. Deployments must have minimal impact and rollback as soon as possible. What deployment method should be used?",
    "options": [
      "A. All at once",
      "B. Rolling",
      "C. Snapshots",
      "D. Immutable"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q136",
    "text": "An application running on multiple Amazon EC2 instances pulls messages from a standard Amazon SQS queue. A requirement for the application is that all messages must be encrypted at rest. Developers are instructed to use methods that allow for centralized key management and minimize possible support requirements whenever possible. Which of the following solutions supports these requirements?",
    "options": [
      "A. Encrypt individual messages by using client-side encryption with customer managed keys, then write to the SQS queue.",
      "B. Encrypt individual messages by using SQS Extended Client and the Amazon S3 encryption client.",
      "C. Create an SQS queue, and encrypt the queue by using server-side encryption with AWS KMS.",
      "D. Create an SQS queue, and encrypt the queue by using client-side encryption."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q137",
    "text": "A company is running a web application that is using Amazon Cognito for authentication. The company does not want to use multi-factor authentication (MFA) for all the visitors every time, but the company's security team has concerns about compromised credentials. The development team needs to con\u0000gure mandatory MFA only when suspicious sign-in attempts are detected. Which Amazon Cognito feature will meet these requirements?",
    "options": [
      "A. Short message service (SMS) text message MFA",
      "B. Advanced security metrics",
      "C. Time-based one-time password (TOTP) software token MFA",
      "D. Adaptive authentication"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q138",
    "text": "A company has a two-tier application running on an Amazon EC2 server that handles all of its AWS based e-commerce activity. During peak times, the backend servers that process orders are overloaded with requests. This results in some orders failing to process. A developer needs to create a solution that will re-factor the application. Which steps will allow for more \u0000exibility during peak times, while still remaining cost-effective? (Choose two.)",
    "options": [
      "A. Increase the backend T2 EC2 instance sizes to x1 to handle the largest possible load throughout the year.",
      "B. Implement an Amazon SQS queue to decouple the front-end and backend servers.",
      "C. Use an Amazon SNS queue to decouple the front-end and backend servers.",
      "D. Migrate the backend servers to on-premises and pull from an Amazon SNS queue.",
      "E. Modify the backend servers to pull from an Amazon SQS queue."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q139",
    "text": "A developer is creating an AWS Lambda function that generates a new \u0000le each time it runs. Each new \u0000le must be checked into an AWS CodeCommit repository hosted in the same AWS account. How should the developer accomplish this?",
    "options": [
      "A. When the Lambda function starts, use the Git CLI to clone the repository. Check the new \u0000le into the cloned repository and push the change.",
      "B. After the new \u0000le is created in Lambda, use cURL to invoke the CodeCommit API. Send the \u0000le to the repository.",
      "C. Use an AWS SDK to instantiate a CodeCommit client. Invoke the putjile method to add the \u0000le to the repository.",
      "D. Upload the new \u0000le to an Amazon S3 bucket. Create an AWS Step Function to accept S3 events. In the Step Function, add the new \u0000le to the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q140",
    "text": "A developer is designing an Amazon DynamoDB table for an application. The application will store user information that includes a unique identi\u0000er and an email address for each user. The application must be able to query the table by using either the unique identi\u0000er or the email address. How should the developer design the DynamoDB table to meet these requirements?",
    "options": [
      "A. For the primary key of the table, specify the unique identi\u0000er as the partition key and specify the email address as the sort key.",
      "B. For the primary key of the table, specify the unique identi\u0000er as the partition key. Create a local secondary index (LSI) based on the email",
      "C. For the primary key of the table, specify the email address as the partition key and specify the unique identi\u0000er as the sort key.",
      "D. For the primary key of the table, specify the unique identi\u0000er as the partition key. Create a global secondary index (GSI) based on the email"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q141",
    "text": "A developer has an application that asynchronously invokes an AWS Lambda function. The developer wants to store messages that resulted in failed invocations of the Lambda function so that the application can retry the call later. What should the developer do to accomplish this goal with the LEAST operational overhead?",
    "options": [
      "A. Set up Amazon CloudWatch Logs log groups to \u0000lter and store the messages in an Amazon S3 bucket. Import the messages in Lambda.",
      "B. Con\u0000gure Amazon EventBridge (Amazon CloudWatch Events) to send the messages to Amazon Simple Noti\u0000cation Service (Amazon SNS)",
      "C. Implement a dead-letter queue for discarded messages. Set the dead-letter queue as an event source for the Lambda function.",
      "D. Send Amazon EventBridge (Amazon CloudWatch Events) events to an Amazon Simple Queue Service (Amazon SQS) queue. Con\u0000gure the"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q142",
    "text": "A developer is writing an application in Python. The application runs on AWS Lambda. The application generates a \u0000le and needs to upload this \u0000le to Amazon S3. The developer must implement this upload functionality with the least possible change to the application code. Which solution meets these requirements?",
    "options": [
      "A. Make an HTTP request directly to the S3 API to upload the \u0000le.",
      "B. Include the AWS SDK for Python in the Lambda function. Use the SDK to upload the \u0000le.",
      "C. Use the AWS SDK for Python that is installed in the Lambda environment to upload the \u0000le.",
      "D. Use the AWS CLI that is installed in the Lambda environment to upload the \u0000le."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q143",
    "text": "An application that is hosted on an Amazon EC2 instance needs access to \u0000les that are stored in an Amazon S3 bucket. The application lists the objects that are stored in the S3 bucket and displays a table to the user. During testing, a developer discovers that the application does not show any objects in the list. What is the MOST secure way to resolve this issue?",
    "options": [
      "A. Update the IAM instance pro\u0000le that is attached to the EC2 instance to include the S3:' permission for the S3 bucket.",
      "B. Update the IAM instance pro\u0000le that is attached to the EC2 instance to include the S3:ListBucket permission for the S3 bucket.",
      "C. Update the developer's user permissions to include the S3:ListBucket permission for the S3 bucket.",
      "D. Update the S3 bucket policy by including the S3:ListBucket permission and by setting the Principal element to specify the account number"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q144",
    "text": "A developer needs to implement a cache to store data that an application frequently queries from an Amazon RDS for MySQL database. The data structures that will be cached include sets and sorted sets. How should the developer implement the cache to achieve the LOWEST latency?",
    "options": [
      "A. Create an Amazon ElastiCache for Memcached instance. Serialize the data as JSON before caching the data.",
      "B. Create an Amazon ElastiCache for Redis instance. Use a Redis client library to cache the data.",
      "C. Create an Amazon DynamoDB table. Serialize the data as JSON before caching the data.",
      "D. Create an Amazon ElastiCache for Memcached instance. Use a Memcached client library to cache the data."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q145",
    "text": "A developer creates an AWS Lambda function to publish a message to an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. All message content must be encrypted in transit and at rest between Lambda and Amazon SNS. A part of the Lambda execution role is as follows: Which combination of steps should the developer take to meet these requirements? (Choose two.)",
    "options": [
      "A. Enable server-side encryption on the SNS topic.",
      "B. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify \"aws:SecureTransport\": \"trueג€ as",
      "C. Create a VPC endpoint for Amazon SNS.",
      "D. Add a StringEquals condition of \"sns:Protocol\": \"https\" to the Lambda execution role.",
      "E. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify \"aws:SecureTransport\": \"false\" as"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q146",
    "text": "A developer is using an AWS Key Management Service (AWS KMS) customer master key (CMK) with imported key material to encrypt data in Amazon S3. The developer accidentally deletes the key material of the CMK and is unable to decrypt the data. How can the developer decrypt the data that was encrypted by the CMK?",
    "options": [
      "A. Request support from AWS to recover the deleted key material.",
      "B. Create a new CMK. Use the new CMK to decrypt the data.",
      "C. Use the CMK without the key material.",
      "D. Reimport the same key material to the CMK."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q147",
    "text": "A developer needs to launch a new Amazon EC2 instance by using the AWS CLI. Which AWS CLI command should the developer use to meet this requirement?",
    "options": [
      "A. aws ec2 bundle-instance",
      "B. aws ec2 start-instances",
      "C. aws ec2 con\u0000rm-product-instance",
      "D. aws ec2 run instances"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q148",
    "text": "A development team uses AWS Elastic Beanstalk for application deployment. The development team has con\u0000gured the application version lifecycle policy to limit the number of application versions to 25. However, even with the application version lifecycle policy, the source bundle is deleted from the Amazon S3 source bucket. What should the development team do in the Elastic Beanstalk application version lifecycle settings to retain the source code in the S3 bucket?",
    "options": [
      "A. Enable versioning on the source bundle S3 bucket.",
      "B. Disable the S3 bucket lifecycle policy to avoid the archiving of the source bundle.",
      "C. Update the Elastic Beanstalk application version lifecycle policy to increase the version quota to 50.",
      "D. Update the Elastic Beanstalk application version lifecycle policy to retain the source bundle in Amazon S3."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q149",
    "text": "A development team is building a new application that will run on Amazon EC2 and use Amazon DynamoDB as a storage layer. The developers all have assigned IAM user accounts in the same IAM group. The developers currently can launch EC2 instances, and they need to be able to launch EC2 instances with an instance role allowing access to Amazon DynamoDB. Which AWS IAM changes are needed when creating an instance role to provide this functionality?",
    "options": [
      "A. Create an IAM permission policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows DynamoDB",
      "B. Create an IAM permissions policy attached to the role that allows access to DynamoDAdd a trust policy to the role that allows Amazon EC2",
      "C. Create an IAM permission policy attached to the role that allows access to Amazon EC2. Add a trust policy to the role that allows",
      "D. Create an IAM permissions policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows Amazon"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q150",
    "text": "A banking application processes thousands of transactions each second. Each transaction payload must have end-to-end encryption. The application encrypts each transaction locally by using the AWS Key Management Service (AWS KMS) GenerateDataKey operation. A developer is testing the application and receives a ThrottlingException error. Which actions are best practices to resolve this error? (Choose two.)",
    "options": [
      "A. Use the LocalCryptoMatenalsCache feature of the AWS Encryption SDK encryption library.",
      "B. Call the AWS KMS Encrypt operation directly to allow AWS KMS to encrypt the data.",
      "C. Create a case in the AWS Support Center to increase the quota for the account.",
      "D. Use Amazon Simple Queue Service (Amazon SQS) to queue the requests to AWS KMS.",
      "E. Switch to an AWS KMS custom key store."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q151",
    "text": "A developer has code that is stored in an Amazon S3 bucket. The code must be deployed as an AWS Lambda function across multiple accounts in the same AWS Region as the S3 bucket. An AWS CloudFormation template that runs for each account will deploy the Lambda function. What is the MOST secure way to allow CloudFormation to access the Lambda code in the S3 bucket?",
    "options": [
      "A. Grant the CloudFormation service role the S3 ListBucket and GetObject permissions. Add a bucket policy to Amazon S3 with the pnncipal of",
      "B. Grant the CloudFormation service role the S3 GetObject permission. Add a bucket policy to Amazon S3 with the principal of \"*\".",
      "C. Use a service-based link to grant the Lambda function the S3 ListBucket and GetObject permissions by explicitly adding the S3 bucket’s",
      "D. Use a service-based link to grant the Lambda function the S3 GetObject permission. Add a resource of \"*\" to allow access to the S3 bucket."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q152",
    "text": "A company is migrating a legacy application to a serverless application on AWS. The legacy application consists of a set of web services that are exposed by an Amazon API Gateway API. A developer needs to replace the existing implementation of web services with AWS Lambda functions. The developer needs to test a new version of the API that uses the functions in production. The developer must minimize the impact of the testing on the application's users. Which solution will meet these requirements?",
    "options": [
      "A. Create a beta stage for the new version of the API. Send the updated endpoint to the users.",
      "B. Create a development stage for the new version of the API. Use a canary deployment.",
      "C. Create a development stage for the new version of the API. Promote a canary release.",
      "D. Create a deployment stage. Enable mutual TLS for the new version of the API."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q153",
    "text": "A developer needs to modify an application architecture to meet new functional requirements. Application data is stored in Amazon DynamoDB and processed for analysis in a nightly batch. The system analysts do not want to wait until the next day to view the processed data and have asked to have it available in near-real time. Which application architecture pattern would enable the data to be processed as it is received?",
    "options": [
      "A. Event driven",
      "B. Client-server driven",
      "C. Fan-out driven",
      "D. Schedule driven"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q154",
    "text": "A company is migrating a web application from on premises to AWS. The company needs to move session storage from the application code to a shared service as part of the migration. The session storage data must be encrypted at rest. Which AWS services meet these requirements? (Choose two.)",
    "options": [
      "A. Amazon ElastiCache for Redis",
      "B. Amazon ElastiCache for Memcached",
      "C. Amazon CloudWatch",
      "D. AWS CloudTrail",
      "E. Amazon DynamoDB"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q155",
    "text": "A gaming application stores scores for players in an Amazon DynamoDB table that has four attributes user_id, user_name, user_score and user_rank. The users are allowed to update their names only. A user is authenticated by web identity federation. Which set of conditions should be added in the policy attached to the role for the dynamodb:PutItem API call?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q156",
    "text": "A company is hosting a workshop for external users and wants to share the reference documents with the external users for 7 days. The company stores the reference documents in an Amazon S3 bucket that the company owns. What is the MOST secure way to share the documents with the external users?",
    "options": [
      "A. Use S3 presigned URLs to share the documents with the external users. Set an expiration time of 7 days.",
      "B. Move the documents to an Amazon WorkDocs folder Share the links of the WorkDocs folder with the external users.",
      "C. Create temporary IAM users that have read-only access to the S3 bucket. Share the access keys with the external users. Expire the",
      "D. Create a role that has read-only access to the S3 bucket. Share the Amazon Resource Name (ARN) of this role with the external users."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q157",
    "text": "A developer is storing many objects in a single Amazon S3 bucket. The developer needs to optimize the S3 bucket for high request rates. How should the developer store the objects to meet this requirement?",
    "options": [
      "A. Store the objects by using S3 Intelligent-Tiering.",
      "B. Store the objects at the root of the S3 bucket.",
      "C. Store the objects by using object key names distributed across multiple pre\u0000x es.",
      "D. Store each object with an object tag named \"pre\u0000x\" that contains a unique value."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q158",
    "text": "A company has a serverless application that uses AWS Lambda functions and AWS Systems Manager parameters to store con\u0000guration data. The company moves the Lambda functions inside the VPC and into private subnets. The Lambda functions are now producing errors in their attempts to access Systems Manager parameters. Which solution will allow the Lambda functions to access Systems Manager parameters inside the VPC?",
    "options": [
      "A. Con\u0000gure security groups to allow access to Systems Manager.",
      "B. Create an interface VPC endpoint for Systems Manager.",
      "C. Use an Internet gateway from inside the VPC.",
      "D. Create a gateway VPC endpoint for Systems Manager."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q159",
    "text": "A research company has a website that is used once each day to perform scienti\u0000c calculations based on inputs that are submitted through a webpage. The calculations are CPU intensive. An AWS Lambda function performs the calculations once each day. Users occasionally receive errors because of Lambda function timeouts. Which change will reduce the Lambda function's runtime duration?",
    "options": [
      "A. Con\u0000gure Lambda to run the function on an Amazon EC2 burstable instance type.",
      "B. Con\u0000gure Lambda to run the function on an Amazon EC2 instance type that is recommended for high performance computing (HPC)",
      "C. Con\u0000gure Lambda to run the function with a larger reserved concurrency value.",
      "D. Con\u0000gure Lambda to run the function with a larger memory value."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q160",
    "text": "A developer is creating an application. New users of the application must be able to create an account and register by using their own social media accounts. Which AWS service or resource should the developer use to meet these requirements?",
    "options": [
      "A. IAM role",
      "B. Amazon Cognito identity pools",
      "C. Amazon Cognito user pools",
      "D. AWS Directory Service"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q161",
    "text": "A developer wants to use AWS CodeDeploy to deploy an Amazon Elastic Container Service (Amazon ECS) service. What are the MINIMUM properties required in the 'resources' section of the AppSpec \u0000le for CodeDeploy to deploy the ECS service successfully?",
    "options": [
      "A. name, alias currentversion, and targetversion",
      "B. TaskDe\u0000nition, ContainerName, and PlatformVersion",
      "C. TaskDe\u0000mtion, ContainerName, and ContainerPort",
      "D. name, currentversion, NetworkCon\u0000guration, and PlatformVersion"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q162",
    "text": "A company has deployed a single-page application on AWS. The application stores assets in an Amazon S3 bucket. The application has an Amazon CloudFront distribution that is con\u0000gured with the S3 bucket as the origin. Amazon API Gateway APIs access AWS Lambda functions that store information in an Amazon DynamoDB table. The application ingests a payload that includes 20 \u0000elds of sensitive data. Which combination of steps should a developer take to protect the sensitive data through its entire lifecycle in AWS? (Choose two.)",
    "options": [
      "A. Create a Lambda@Edge function to encrypt data when CloudFront processes a client request. Con\u0000gure the distribution to invoke the",
      "B. Generate an AWS Key Management Service (AWS KMS) customer managed key that Lambda@Edge can use.",
      "C. Create an SSL/TLS certi\u0000cate in AWS Certi\u0000cate Manager (ACM). Associate the certi\u0000cate with the Network Load Balancer.",
      "D. Set up a Network Load Balancer for API Gateway private integrations.",
      "E. Store the data in the S3 bucket by using server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Transfer the encrypted"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q163",
    "text": "A developer is writing an application that stores data in an Amazon DynamoDB table by using the Putltem API operation. The table has a partition key of streamID and has a sort key of seqID. The developer needs to make sure that the Putltem invocation does not overwrite the existing partition key and sort key. Which condition expression will maintain the uniqueness of the partition key and the sort key?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q164",
    "text": "A developer has created an AWS Lambda function that is written in Python. The Lambda function reads data from objects in Amazon S3 and writes data to an Amazon DynamoDB table. The function is successfully invoked from an S3 event noti\u0000cation when an object is created. However, the function fails when it attempts to write to the DynamoDB table. What is the MOST likely cause of this issue?",
    "options": [
      "A. The Lambda function's concurrency limit has been exceeded.",
      "B. The DynamoDB table requires a global secondary index (GSI) to support writes.",
      "C. The Lambda function does not have IAM permissions to write to DynamoDB.",
      "D. The DynamoDB table is not running in the same Availability Zone as the Lambda function."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q165",
    "text": "A development team wants to build a continuous integration/continuous delivery (CI/CD) pipeline. The team is using AWS CodePipeline to automate the code build and deployment. The team wants to store the program code to prepare for the CI/CD pipeline. Which AWS service should the team use to store the program code?",
    "options": [
      "A. AWS CodeDeploy",
      "B. AWS CodeArtifact",
      "C. AWS CodeCommit",
      "D. Amazon CodeGuru"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q166",
    "text": "A developer supports an application that accesses data in an Amazon DynamoDB table. One of the item attributes is expiration Date in the timestamp format. The application uses this attribute to \u0000nd items, archive them, and remove them from the table based on the timestamp value. The application will be decommissioned soon, and the developer must \u0000nd another way to implement this functionality. The developer needs a solution that will require the least amount of code to write. Which solution will meet these requirements?",
    "options": [
      "A. Enable TTL on the expirationDate attribute in the table. Create a DynamoDB stream. Create an AWS Lambda function to process the deleted",
      "B. Create two AWS Lambda functions: one to delete the items and one to process the items. Create a DynamoDB stream. Use the DeleteItem",
      "C. Create two AWS Lambda functions: one to delete the items and one to process the items. Create an Amazon EventBridge (Amazon",
      "D. Enable TTL on the expirationDate attribute in the table. Specify an Amazon Simple Queue Service (Amazon SQS) dead-letter queue as the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q167",
    "text": "A company has developed a new serverless application using AWS Lambda functions that will be deployed using the AWS Serverless Application Model (AWS SAM) CLI. Which step should the developer complete prior to deploying the application?",
    "options": [
      "A. Compress the application to a .zip \u0000le and upload it into AWS Lambda.",
      "B. Test the new AWS Lambda function by \u0000rst tr acing it in AWS X-Ray.",
      "C. Bundle the serverless application using a SAM package.",
      "D. Create the application environment using the eb create my-env command."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q168",
    "text": "A developer is working on an ecommerce website. The developer wants to review server logs without logging in to each of the application servers individually. The website runs on multiple Amazon EC2 instances, is written in Python, and needs to be highly available. How can the developer update the application to meet these requirements with MINIMUM changes?",
    "options": [
      "A. Rewrite the application to be cloud native and to run on AWS Lambda, where the logs can be reviewed in Amazon CloudWatch.",
      "B. Set up centralized logging by using Amazon OpenSearch Service (Amazon Elasticsearch Service), Logstash, and OpenSearch Dashboards",
      "C. Scale down the application to one larger EC2 instance where only one instance is recording logs.",
      "D. Install the uni\u0000ed Amazon CloudWatch agent on the EC2 instances. Con\u0000gure the agent to push the application logs to CloudWatch."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q169",
    "text": "A company needs an event-management platform to accept registrations for an upcoming event. The platform must perform a single invocation of an existing AWS Lambda function 10 minutes after a user completes a new account registration. Which solution will meet these requirements?",
    "options": [
      "A. Add an item to an Amazon DynamoDB table. Set the item TTL to 10 minutes. Invoke the Lambda function when the TTL expires.",
      "B. Create an ongoing Amazon EventBridge (Amazon CloudWatch Events) rule with a rate expression of 600 seconds. Create a rule/target to",
      "C. Send a message to an Amazon Simple Queue Service (Amazon SQS) delay queue. Set the queue to 600 seconds. Con\u0000gure the Lambda",
      "D. Put a record in Amazon Kinesis Data Streams. Con\u0000gure the Lambda function to use the data stream as an event source. De\u0000ne the shard"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q170",
    "text": "How would a developer notify users when a new item is written to a DynamoDB table without affecting the provisioned throughput?",
    "options": [
      "A. Set up a DynamoDB stream to trigger a Lambda function that sends an SNS noti\u0000cation to users.",
      "B. Schedule an Amazon CloudWatch event to regularly trigger a Lambda function that scans the DynamoDB table.",
      "C. Run a polling application that queries the DynamoDB table at one-second intervals and send SNS noti\u0000cation to users.",
      "D. Embed a Lambda noti\u0000cation function in DynamoDB and con\u0000gure DynamoDB to trigger the embedded Lambda function when changes are"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q171",
    "text": "A developer is writing a web application that is deployed on Amazon EC2 instances behind an internet-facing Application Load Balancer (ALB). The developer must add an Amazon CloudFront distribution in front of the ALB. The developer also must ensure that customer data from outside the VPC is encrypted in transit. Which combination of CloudFront con\u0000guration settings should the developer use to meet these requirements? (Choose two.)",
    "options": [
      "A. Restrict viewer access by using signed URLs.",
      "B. Set the Origin Protocol Policy setting to Match Viewer.",
      "C. Enable \u0000eld-level encryption.",
      "D. Enable automatic object compression.",
      "E. Set the Viewer Protocol Policy setting to Redirect HTTP to HTTPS."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q172",
    "text": "A developer is writing a web application that must share secure documents with end users. The documents are stored in a private Amazon S3 bucket. The application must allow only authenticated users to download speci\u0000c documents when requested, and only for a duration of 15 minutes. How can the developer meet these requirements?",
    "options": [
      "A. Copy the documents to a separate S3 bucket that has a lifecycle policy for deletion after 15 minutes.",
      "B. Create a presigned S3 URL using the AWS SDK with an expiration time of 15 minutes.",
      "C. Use server-side encryption with AWS KMS managed keys (SSE-KMS) and download the documents using HTTPS.",
      "D. Modify the S3 bucket policy to only allow speci\u0000c users to download the documents. Revert the change after 15 minutes."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q173",
    "text": "A company wants to migrate an existing web application to AWS. The application consists of two web servers and a MySQL database. The company wants the application to automatically scale in response to demand. The company also wants to reduce its operational overhead for database backups and maintenance. The company needs the ability to deploy multiple versions of the application concurrently. What is the MOST operationally e\u0000cient solution that meets these requirements?",
    "options": [
      "A. Deploy the application to AWS Elastic Beanstalk. Migrate the database to an Amazon RDS Multi-AZ DB instance.",
      "B. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI.",
      "C. Deploy the application to AWS Elastic Beanstalk. Migrate the database to a MySQL instance that runs on an Amazon EC2 instance.",
      "D. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q174",
    "text": "A \u0000nancial company must store original customer records for 10 years for legal reasons. A complete record contains personally identi\u0000able information (PII). According to local regulations. PII is available to only certain people in the company and must not be shared with third parties. The company needs to make the records available to third-party organizations for statistical analysis without sharing the PII. A developer wants to store the original immutable record in Amazon S3. Depending on who accesses the S3 document, the document should be returned as is or with all the PII removed. The developer has written an AWS Lambda function to remove the PII from the document. The function is named removePii. What should the developer do so that the company can meet the PII requirements while maintaining only one copy of the document?",
    "options": [
      "A. Set up an S3 event noti\u0000cation that invokes the removePii function when an S3 GET request is made. Call Amazon S3 by using a GET",
      "B. Set up an S3 event noti\u0000cation that invokes the removePii function when an S3 PUT request is made. Call Amazon S3 by using a PUT",
      "C. Create an S3 Object Lambda access point from the S3 console. Select the removePii function. Use S3 Access Points to access the object",
      "D. Create an S3 access point from the S3 console. Use the access point name to call the GetObjectLegalHold S3 API function. Pass in the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q175",
    "text": "A developer is designing an AWS Lambda function that creates temporary \u0000les that are less than 10 MB during invocation. The temporary \u0000les will be accessed and modi\u0000ed multiple times during invocation. The developer has no need to save or retrieve these \u0000les in the future. Where should the temporary \u0000les be stored?",
    "options": [
      "A. the /tmp directory",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon S3"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q176",
    "text": "A developer is building a web and mobile application for two types of users: regular users and guest users. Regular users are required to log in, but guest users do not log in. Users should see only their data, regardless of whether they authenticate. Users need AWS credentials before they can access AWS resources. What is the MOST secure solution that the developer can implement to allow access for guest users?",
    "options": [
      "A. Use an Amazon Cognito credentials provider to issue temporary credentials that are linked to an unauthenticated role that has access to",
      "B. Set up an IAM user that has permissions to the required resources. Hardcode the IAM credentials in the web and mobile application.",
      "C. Generate temporary keys that are stored in AWS Key Management Service (AWS KMS). Use the temporary keys to access the required",
      "D. Generate temporary credentials. Store the temporary credentials in AWS Secrets Manager. Use the temporary credentials to access the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q177",
    "text": "A developer is using AWS Elastic Beanstalk to create a deployment for a web application that supports ecommerce. According to a company requirement. Amazon EC2 instances that host one version of the application must be retired when the deployment of a new version is complete. Which deployment methods can the developer use to meet this requirement? (Choose two.)",
    "options": [
      "A. All-al-once deployment",
      "B. In-place deployment",
      "C. Rolling deployment without an additional batch",
      "D. Blue/green deployment",
      "E. Immutable deployment"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q178",
    "text": "A company caches session information for a web application in an Amazon DynamoDB table. The company wants an automated way to delete old items from the table. What is the simplest way to do this?",
    "options": [
      "A. Write a script that deletes old records; schedule the script as a cron job on an Amazon EC2 instance.",
      "B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.",
      "C. Each day, create a new table to hold session data; delete the previous day’s table.",
      "D. Add an attribute with the expiration time; name the attribute ItemExpiration."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q179",
    "text": "A company's new mobile app uses Amazon API Gateway. As the development team completes a new release of its APIs, a developer must safely and transparently roll out the API change. What is the SIMPLEST solution for the developer to use for rolling out the new API version to a limited number of users through API Gateway?",
    "options": [
      "A. Create a new API in API Gateway. Direct a portion of the tra\u0000c t  o the new API using an Amazon Route 53 weighted routing policy.",
      "B. Validate the new API version and promote it to production during the window of lowest expected utilization.",
      "C. Implement an Amazon CloudWatch alarm to trigger a rollback if the observed HTTP 500 status code rate exceeds a predetermined",
      "D. Use the canary release deployment option in API Gateway. Direct a percentage of the API tra\u0000c using the canarySettings setting."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q180",
    "text": "A developer is designing a serverless application that customers use to select seats for a concert venue. Customers send the ticket requests to an Amazon API Gateway API with an AWS Lambda function that acknowledges the order and generates an order ID. The application includes two additional Lambda functions: one for inventory management and one for payment processing. These two Lambda functions run in parallel and write the order to an Amazon Dynamo DB table. The application must provide seats to customers according to the following requirements. If a seat is accidently sold more than once, the \u0000rst order that the application received must get the seat. In these cases, the application must process the payment for only the \u0000rst order. However, if the \u0000rst order is rejected during payment processing, the second order must get the seat. In these cases, the application must process the payment for the second order. Which solution will meet these requirements?",
    "options": [
      "A. Send the order ID to an Amazon Simple Noti\u0000cation Service (Amazon SNS) FIFO topic that fans out to one Amazon Simple Queue Service",
      "B. Change the Lambda function that generates the order ID to initiate the Lambda function for inventory management. Then initiate the",
      "C. Send the order ID to an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. Subscribe the Lambda functions for inventory",
      "D. Deliver the order ID to an Amazon Simple Queue Service (Amazon SQS) queue. Con\u0000gure the Lambda functions for inventory management"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q181",
    "text": "A developer wants to implement authentication using Amazon Cognito user pools for an existing API in Amazon API Gateway. After creating the Amazon Cognito user pool, the developer tests the GET request to the API. Unauthenticated requests to the API return a 200 OK status response. Which combination of additional steps are required to complete the authentication implementation? (Choose two.)",
    "options": [
      "A. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito user pool.",
      "B. Create an AWS Lambda authorizer in API Gateway and specify the Amazon Cognito user pool.",
      "C. Specify the authorizer in the GET method section of API Gateway and redeploy the API",
      "D. Use Amazon Cognito user pools to make and authenticate the request to API Gateway.",
      "E. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito identity pool."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q182",
    "text": "A developer is creating a command line script to launch an Amazon EC2 instance at a preset time with a cron job. The developer will provide a user data script to start a task and then terminate the instance. The task cannot be interrupted and must run to completion. How should the developer launch the EC2 instance?",
    "options": [
      "A. Use the ec2 start-instances command.",
      "B. Use the ec2 request-spot-instances command.",
      "C. Use the ec2 run-instances command.",
      "D. Use the ec2 purchase-scheduled-instances command."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q183",
    "text": "A developer is creating an Amazon DynamoDB table. The entire table must be encrypted at rest. Which solution will meet this requirement MOST cost-effectively?",
    "options": [
      "A. Create the DynamoDB table by using default encryption settings.",
      "B. Encrypt the data by using the DynamoDB Encryption Client.",
      "C. During creation of the DynamoDB table, con\u0000gure encryption at rest with an AWS Key Management Service (AWS KMS) AWS managed key.",
      "D. During creation of the DynamoDB table, con\u0000gure encryption at rest with an AWS Key Management Service (AWS KMS) customer managed"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q184",
    "text": "A company con\u0000gures an Amazon S3 bucket to deliver S3 object events to Amazon EventBridge (Amazon CloudWatch Events). An EventBridge rule invokes an AWS Lambda function for each object event that is received from the S3 bucket. A developer is working on a new version of the Lambda function. To ensure that the new Lambda function works as expected, the developer must run a repeatable test that uses realistic S3 bucket object events. The developer must minimize the amount of code and infrastructure that are required to support the test. Which solution will meet these requirements?",
    "options": [
      "A. Create another S3 bucket that can deliver object events to EventBridge. Add another EventBridge rule to deliver data events from the new S3",
      "B. Add the new Lambda function as an additional target of the existing EventBridge rule. Deliver the S3 object events to the existing Lambda",
      "C. Use EventBridge to archive and replay production S3 object events. Set up a new EventBridge rule to deliver replayed S3 object events to the",
      "D. Develop a tool that uses the EventBridge PutEvents API operation to publish aws.s3 data events. Add a new EventBridge rule that delivers"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q185",
    "text": "A developer has built an application running on AWS Lambda using AWS Serverless Application Model (AWS SAM). What is the correct sequence of steps to successfully deploy the application?",
    "options": [
      "A. 1. Build the SAM template in Amazon EC2.",
      "B. 1. Build the SAM template locally.",
      "C. 1. Build the SAM template locally.",
      "D. 1. Build the SAM template locally."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q186",
    "text": "A team of developers is using an AWS CodePipeline pipeline as a continuous integration and continuous delivery (CI/CD) mechanism for a web application. A developer has written unit tests to programmatically test the functionality of the application code. The unit tests produce a test report that shows the results of each individual check. The developer now wants to run these tests automatically during the CI/CD process. Which solution will meet this requirement with the LEAST operational effort?",
    "options": [
      "A. Write a Git pre-commit hook that runs the tests before every commit. Ensure that each developer who is working on the project has the pre-",
      "B. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage after the stage that deploys code revisions to the",
      "C. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage before the stage that deploys code revisions to the",
      "D. Add a new stage to the pipeline. Use Jenkins as the provider. Con\u0000gure CodePipeline to use Jenkins to run the unit tests. Write a Jenkins\u0000le"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q187",
    "text": "A game stores user game data in an Amazon DynamoDB table. Individual users should not have access to other users' game data. How can this be accomplished?",
    "options": [
      "A. Encrypt the game data with individual user keys.",
      "B. Restrict access to speci\u0000c items based on certain primary key values.",
      "C. Stage data in SQS queues to inject metadata before accessing DynamoDB.",
      "D. Read records from DynamoDB and discard irrelevant data client-side."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q188",
    "text": "A developer is creating an application that will give users the ability to store photos from their cellphones in the cloud. The application needs to support tens of thousands of users. The application uses an Amazon API Gateway REST API that is integrated with AWS Lambda functions to process the photos. The application stores details about the photos in Amazon DynamoDB. Users need to create an account to access the application. In the application, users must be able to upload photos and retrieve previously uploaded photos. The photos will range in size from 300 KB to 5 MB. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control",
      "B. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control",
      "C. Create an IAM user for each user of the application during the sign-up process. Use IAM authentication to access the API Gateway API. Use",
      "D. Create a user’s table in DynamoDB. Use the table to manage user accounts. Create a Lambda authorizer that validates user credentials"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q189",
    "text": "A developer is building a three-tier web application that should be able to handle a minimum of 5000 requests per minute. Requirements state that the web tier should be completely stateless while the application maintains session state for the users. How can session data be externalized, keeping latency at the LOWEST possible value?",
    "options": [
      "A. Create an Amazon RDS instance, then implement session handling at the application level to leverage a database inside the RDS database",
      "B. Implement a shared \u0000le system solution across the underlying Amazon EC2 instances, then implement session handling at the application",
      "C. Create an Amazon ElastiCache Memcached cluster, then implement session handling at the application level to leverage the cluster for",
      "D. Create an Amazon DynamoDB table, then implement session handling at the application level to leverage the table for session data storage."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q190",
    "text": "A company is using an Amazon API Gateway REST API endpoint as a webhook to publish events from an on-premises source control management (SCM) system to Amazon EventBridge (Amazon CloudWatch Events). The company has con\u0000gured an EventBridge (CloudWatch Events) rule to listen for the events and to control application deployment in a central AWS account. The company needs to receive the same events across multiple receiver AWS accounts. How can a developer meet these requirements without changing the con\u0000guration of the SCM system?",
    "options": [
      "A. Deploy the API Gateway REST API to all the required AWS accounts. Use the same custom domain name for all the gateway endpoints so",
      "B. Deploy the API Gateway REST API to all the receiver AWS accounts. Create as many SCM webhooks as the number of AWS accounts.",
      "C. Grant permission to the central AWS account for EventBridge (CloudWatch Events)to access the receiver AWS accounts. Add an",
      "D. Convert the API Gateway type from REST API to HTTP API."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q191",
    "text": "A company is developing an application that will be accessed through the Amazon API Gateway REST API. Registered users should be the only ones who can access certain resources of this API. The token being used should expire automatically and needs to be refreshed periodically. How can a developer meet these requirements?",
    "options": [
      "A. Create an Amazon Cognito identity pool, con\u0000gure the Amazon Cognito Authorizer in API Gateway, and use the temporary credentials",
      "B. Create and maintain a database record for each user with a corresponding token and use an AWS Lambda authorizer in API Gateway.",
      "C. Create an Amazon Cognito user pool, con\u0000gure the Cognito Authorizer in API Gateway, and use the identity or access token.",
      "D. Create an IAM user for each API user, attach an invoke permissions policy to the API, and use an IAM authorizer in API Gateway."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q192",
    "text": "A developer maintains a critical business application that uses Amazon DynamoDB as the primary data store. The DynamoDB table contains millions of documents and receives 30-60 requests each minute. The developer needs to perform processing in near-real time on the documents when they are added or updated in the DynamoDB table. How can the developer implement this feature with the LEAST amount of change to the existing application code?",
    "options": [
      "A. Set up a cron job on an Amazon EC2 instance. Run a script every hour to query the table for changes and process the documents.",
      "B. Enable a DynamoDB stream on the table. Invoke an AWS Lambda function to process the documents.",
      "C. Update the application to send a PutEvents request to Amazon EventBridge (Amazon CloudWatch Events). Create an EventBridge",
      "D. Update the application to synchronously process the documents directly after the DynamoDB write."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q193",
    "text": "A web application is using Amazon Kinesis Streams for clickstream data that may not be consumed for up to 12 hours. How can the developer implement encryption at rest for data within the Kinesis Streams?",
    "options": [
      "A. Enable SSL connections to Kinesis.",
      "B. Use Amazon Kinesis Consumer Library.",
      "C. Encrypt the data once it is at rest with a Lambda function.",
      "D. Enable server-side encryption in Kinesis Streams."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q194",
    "text": "A company has copies of customer ID cards in its on-premises system. The company wants the on-premises system to automatically upload the ID card images directly to an Amazon S3 bucket. What is the MOST secure way to meet this requirement?",
    "options": [
      "A. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM user. Attach the user to a",
      "B. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM role. Attach the role to a",
      "C. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using",
      "D. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q195",
    "text": "A developer is building a highly secure healthcare application using serverless components. This application requires writing temporary data to /tmp storage on an AWS Lambda function. How should the developer encrypt this data?",
    "options": [
      "A. Enable Amazon EBS volume encryption with an AWS KMS key in the Lambda function con\u0000guration so that all storage attached to the",
      "B. Set up the Lambda function with a role and key policy to access an AWS KMS key. Use the key to generate a data key used to encrypt all",
      "C. Use OpenSSL to generate a symmetric encryption key on Lambda startup. Use this key to encrypt the data prior to writing to /tmp.",
      "D. Use an on-premises hardware security module (HSM) to generate keys, where the Lambda function requests a data key from the HSM and"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q196",
    "text": "A developer creates a web service that performs many critical activities. The web service code uses an AWS SDK to publish noncritical metrics to Amazon CloudWatch by using the PutMetricData API. The web service must return results to the caller as quickly as possible. The response data from the PutMetricData API is not necessary to create the web service response. Which solution will MOST improve the response time of the web service?",
    "options": [
      "A. Upgrade to the latest version of the AWS SDK.",
      "B. Call the PutMetricData API in a background thread.",
      "C. Use the AWS SDK to perform a synchronous call to an AWS Lambda function. Call the PutMetricData API within the Lambda function.",
      "D. Send metric data to an Amazon Simple Queue Service (Amazon SQS) queue. Con\u0000gure an AWS Lambda function with the queue as the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q197",
    "text": "A developer is creating a Ruby application and needs to automate the deployment, scaling, and management of an environment without requiring knowledge of the underlying infrastructure. Which service would best accomplish this task?",
    "options": [
      "A. AWS CodeDeploy",
      "B. AWS CloudFormation",
      "C. AWS OpsWorks",
      "D. AWS Elastic Beanstalk"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q198",
    "text": "A company has an Amazon S3 bucket that contains sensitive data. The data must be encrypted in transit and at rest. The company encrypts the data in the S3 bucket by using an AWS Key Management Service (AWS KMS) key. A developer needs to grant several other AWS accounts the permission to use the S3 GetObject operation to retrieve the data from the S3 bucket. How can the developer enforce that all requests to retrieve the data provide encryption in transit?",
    "options": [
      "A. De\u0000ne a resource-based policy on the S3 bucket to deny access when a request meets the condition \"aws:SecureTransport\": \"false\".",
      "B. De\u0000ne a resource-based policy on the S3 bucket to allow access when a request meets the condition \"aws:SecureTransport\": \"false\".",
      "C. De\u0000ne a role-based policy on the other accounts' roles to deny access when a request meets the condition of \"aws:SecureTransport\":",
      "D. De\u0000ne a resource-based policy on the KMS key to deny access when a request meets the condition of \"aws:SecureTransport\": \"false\"."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q199",
    "text": "A developer is deploying an application in the AWS Cloud by using AWS CloudFormation. The application will connect to an existing Amazon RDS database. The hostname of the RDS database is stored in AWS Systems Manager Parameter Store as a plaintext value. The developer needs to incorporate the database hostname into the CloudFormation template to initialize the application when the stack is created. How should the developer reference the parameter that contains the database hostname?",
    "options": [
      "A. Use the ssm dynamic reference.",
      "B. Use the Ref intrinsic function.",
      "C. Use the Fn::ImportValue intrinsic function.",
      "D. Use the ssm-secure dynamic reference."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q200",
    "text": "A developer is building a new complex application on AWS. The application consists of multiple microservices hosted on Amazon EC2. The developer wants to determine which microservice adds the most latency while handling a request. Which method should the developer use to make this determination?",
    "options": [
      "A. Instrument each microservice request using the AWS X-Ray SDK. Examine the annotations associated with the requests.",
      "B. Instrument each microservice request using the AWS X-Ray SDK. Examine the subsegments associated with the requests.",
      "C. Instrument each microservice request using the AWS X-Ray SDK. Examine the Amazon CloudWatch EC2 instance metrics associated with",
      "D. Instrument each microservice request using the Amazon CloudWatch SDK. Examine the CloudWatch EC2 instance metrics associated with"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q201",
    "text": "A developer is deploying an application on Amazon EC2 instances that run in Account A. The application needs to read data from an existing Amazon Kinesis data stream in Account B. Which actions should the developer take to provide the application with access to the stream? (Choose two.)",
    "options": [
      "A. Update the instance pro\u0000le r ole in Account A with stream read permissions.",
      "B. Create an IAM role with stream read permissions in Account B.",
      "C. Add a trust policy to the instance pro\u0000le r ole and IAM role in Account B to allow the instance pro\u0000le r ole to assume the IAM role.",
      "D. Add a trust policy to the instance pro\u0000le r ole and IAM role in Account B to allow reads from the stream.",
      "E. Add a resource-based policy in Account B to allow read access from the instance pro\u0000le r ole."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q202",
    "text": "A developer is working on an AWS Lambda function that accesses Amazon DynamoDB. The Lambda function must retrieve an item and update some of its attributes, or create the item if it does not exist. The Lambda function has access to the primary key. Which IAM permissions should the developer request for the Lambda function to achieve this functionality?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q203",
    "text": "A company is using AWS CloudFormation templates to deploy AWS resources. The company needs to update one of its AWS CloudFormation stacks. What can the company do to \u0000nd out how the changes will impact the resources that are running?",
    "options": [
      "A. Investigate the change sets.",
      "B. Investigate the stack policies.",
      "C. Investigate the Metadata section.",
      "D. Investigate the Resources section."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q204",
    "text": "A developer is building an application integrating an Amazon API Gateway with an AWS Lambda function. When calling the API. the developer receives the following error: Wed Nov 08 01:13:00 UTC 2017 : Method completed with status: 502 What should the developer do to resolve the error?",
    "options": [
      "A. Change the HTTP endpoint of the API to an HTTPS endpoint.",
      "B. Change the format of the payload sent to the API Gateway.",
      "C. Change the format of the Lambda function response to the API call.",
      "D. Change the authorization header in the API call to access the Lambda function."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q205",
    "text": "A company’s social media application stores image \u0000les in an Amazon S3 bucket. All the images are stored in S3 Standard storage. Users access images frequently during the \u0000rst week after images are uploaded. Users rarely access images that were uploaded more than 1 week ago. The company needs a solution to reduce the application’s storage cost. Users must be able to access all images in the same amount of time, regardless of when the images were uploaded. Which solution will meet these requirements with the LEAST amount of effort?",
    "options": [
      "A. Modify the application to use S3 Intelligent-Tiering for all the images.",
      "B. Modify the application to use S3 One Zone-Infrequent Access (S3 One Zone-IA) for all the images.",
      "C. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Deep Archive.",
      "D. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Flexible Retrieval."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q206",
    "text": "A development team is designing a mobile app that requires multi-factor authentication. Which steps should be taken to achieve this? (Choose two.)",
    "options": [
      "A. Use Amazon Cognito to create a user pool and create users in the user pool.",
      "B. Send multi-factor authentication text codes to users with the Amazon SNS Publish API call in the app code.",
      "C. Enable multi-factor authentication for the Amazon Cognito user pool.",
      "D. Use AWS IAM to create IAM users.",
      "E. Enable multi-factor authentication for the users created in AWS IAM."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q207",
    "text": "A company is using AWS CodePipeline pipelines to deploy development Amazon EC2 instances for multiple teams. All the pipelines are using the same AWS CloudFormation template to deploy the EC2 instances and create dedicated CloudFormation stacks for each team. Each pipeline passes a parameter that is named TeamName to the CloudFormation stack to tag resources with the appropriate team’s name. The company discovers that each team's usage of EC2 instances is not consistent with the type of EC2 instances that the teams are deploying. The company needs to allow the teams to deploy different types of EC2 instances. Which solution will meet this requirement with the LEAST change to the pipelines?",
    "options": [
      "A. For each team, use a dedicated CloudFormation template that includes different types of EC2 instances. Update CodePipeline to use the",
      "B. For each team, use a dedicated CloudFormation template that includes an InstanceType parameter and a value that is speci\u0000c to the team's",
      "C. Update the CloudFormation template by creating an InstanceType parameter. Update CodePipeline to pass the InstanceType parameter",
      "D. Update the CloudFormation template by adding a map for the instance types to the Mappings section. Create a list of all the teams."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q208",
    "text": "A developer is creating an application for a company. The application needs to read the \u0000le doc txt that is placed in the root folder of an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The company’s security team requires the principle of least privilege to be applied to the application’s IAM policy. Which IAM policy statement will meet these security requirements?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q209",
    "text": "A company has migrated an application to Amazon EC2 instances. Automatic scaling is working well for the application user interface. However, the process to deliver shipping requests to the company's warehouse staff is encountering issues. Duplicate shipping requests are arriving, and some requests are lost or arrive out of order. The company must avoid duplicate shipping requests and must process the requests in the order that the requests arrive. Requests are never more than 250 KB in size and take 5-10 minutes to process. A developer needs to rearchitect the application to improve the reliability of the delivery and processing of the requests. What should the developer do to meet these requirements?",
    "options": [
      "A. Create an Amazon Kinesis Data Firehose delivery stream to process the requests. Create an Amazon Kinesis data stream. Modify the",
      "B. Create an AWS Lambda function to process the requests. Create an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. Subscribe the",
      "C. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Set the",
      "D. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the SQS"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q210",
    "text": "A team of developers must migrate an application running inside an AWS Elastic Beanstalk environment from a Classic Load Balancer to an Application Load Balancer. Which steps should be taken to accomplish the task using the AWS Management Console?",
    "options": [
      "A. 1. Update the application code in the existing deployment.",
      "B. 1. Create a new environment with the same con\u0000gurations except for the load balancer type.",
      "C. 1. Clone the existing environment, changing the associated load balancer type.",
      "D. 1. Edit the environment de\u0000nitions in the existing deployment."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q211",
    "text": "What does an Amazon SQS delay queue accomplish?",
    "options": [
      "A. Messages are hidden for a con\u0000gurable amount of time when they are \u0000rst added to the queue.",
      "B. Messages are hidden for a con\u0000gurable amount of time after they are consumed from the queue.",
      "C. The consumer can poll the queue for a con\u0000gurable amount of time before retrieving a message.",
      "D. Messages cannot be deleted for a con\u0000gurable amount of time after they are consumed from the queue."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q212",
    "text": "A company stores the photographs in an Amazon S3 bucket. The company wants to resize the photographs automatically after writing the photographs to the S3 bucket. The company creates an AWS Lambda function to resize the photographs. Which solution will meet these requirements?",
    "options": [
      "A. Con\u0000gure S3 Event Noti\u0000cations to invoke the Lambda function",
      "B. Con\u0000gure an S3 Lifecycle rule to invoke the Lambda function.",
      "C. Con\u0000gure S3 Select on a schedule to invoke the Lambda function.",
      "D. Con\u0000gure S3 Storage Lens to invoke the Lambda function."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q213",
    "text": "A developer is automating a new application deployment with AWS Serverless Application Model (AWS SAM). The new application has one AWS Lambda function and one Amazon S3 bucket. The Lambda function must access the S3 bucket to only read objects. How should the developer con\u0000gure AWS SAM to grant the necessary read privilege to the S3 bucket?",
    "options": [
      "A. Reference a second Lambda authorizer function.",
      "B. Add a custom S3 bucket policy to the Lambda function.",
      "C. Create an Amazon Simple Queue Service (SQS) topic for only S3 object reads Reference the topic in the template.",
      "D. Add the S3ReadPolicy template to the Lambda function's execution role."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q214",
    "text": "A company hosts a web application that writes to an Amazon DynamoDB table. Application users frequently observe and report errors. The development team examines Amazon CloudWatch logs and frequently sees the following error: 400 Bad Request ProvisionedThroughputExceededException What is the cause of this error?",
    "options": [
      "A. The application does not have the required permissions for the DynamoDB table.",
      "B. The item that the application is placing on the table exceeds the item size limit.",
      "C. The development team has not allocated enough space for the table and its indexes.",
      "D. The development team has not allocated enough write capacity units (WCU) for the table and Its indexes."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q215",
    "text": "A company's developer is building a static website to be deployed in Amazon S3 for a production environment. The website integrates with an Amazon Aurora PostgreSQL database by using an AWS Lambda function. The website that is deployed to production will use a Lambda alias that points to a speci\u0000c version of the Lambda function. The company must rotate the database credentials every 2 weeks. Lambda functions that the company deployed previously must be able to use the most recent credentials. Which solution will meet these requirements?",
    "options": [
      "A. Store the database credentials in AWS Secrets Manager. Turn on rotation. Write code in the Lambda function to retrieve the credentials",
      "B. Include the database credentials as part of the Lambda function code. Update the credentials periodically and deploy the new Lambda",
      "C. Use Lambda environment variables. Update the environment variables when new credentials are available.",
      "D. Store the database credentials in AWS Systems Manager Parameter Store Turn on rotation. Write code in the Lambda function to retrieve"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q216",
    "text": "An application reads data from an Amazon DynamoDB table. Several times a day, for a period of 15 seconds, me application receives multiple ProvisionedThroughputExceeded errors. How should this exception be handled?",
    "options": [
      "A. Create a new global secondary index for the table to help with the additional requests.",
      "B. Retry the failed read requests with exponential backoff.",
      "C. Immediately retry the failed read requests.",
      "D. Use the DynamoDB \"UpdateItem\" API to increase the provisioned throughput capacity of the table."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q217",
    "text": "A company wants to migrate its web application to AWS and leverage auto scaling to handle peak workloads. The solutions architect determined that the best metric for an auto scaling event is the number of concurrent users. Based on this information, what should the developer use to auto scale based on concurrent users?",
    "options": [
      "A. An Amazon SNS topic to be invoked when a concurrent user threshold is met",
      "B. An Amazon Cloudwatch NetworkIn metric",
      "C. Amazon CloudFront to leverage AWS edge locations",
      "D. A custom Amazon CloudWatch metric for concurrent users"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q218",
    "text": "A company is managing a NoSQL database on-premises to host a critical component of an application, which is starting to have scaling issues. The company wants to migrate the application to Amazon DynamoDB with the following considerations: • Optimize frequent queries • Reduce read latencies • Plan for frequent queries on certain key attributes of the table Which solution would help achieve these objectives?",
    "options": [
      "A. Create global secondary indexes on keys that are frequently queried. Add the necessary attributes into the indexes.",
      "B. Create local secondary indexes on keys that are frequently queried. DynamoDB will fetch needed attributes from the table.",
      "C. Create DynamoDB global tables to speed up query responses. Use a scan to fetch data from the table",
      "D. Create an AWS Auto Scaling policy for the DynamoDB table."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q219",
    "text": "A developer is storing sensitive data generated by an application in Amazon S3. The developer wants to encrypt the data at rest A company policy requires an audit trail of when the AWS Key Management Service (AWS KMS) key was used and by whom. Which encryption option will meet these requirements?",
    "options": [
      "A. Server-side encryption with Amazon S3 managed keys (SSE-S3)",
      "B. Server-side encryption with AWS KMS managed keys (SSE-KMS)",
      "C. Server-side encryption with customer-provided keys (SSE-C)",
      "D. Server-side encryption with self-managed keys"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q220",
    "text": "An AWS Lambda function that Is running in a test environment is not working property. However, there is no error associated with the Lambda function in the Amazon CloudWatch logs for the account. The Lambda function's permissions do not include a resource-based policy. The Lambda function's execution role has properly con\u0000gured trust relationships and has no permissions policies attached. Which action should a developer take to allow logs for the Lambda function to appear in CloudWatch?",
    "options": [
      "A. Attach the AWSLambda8asicExecutionRole managed policy to the Lambda function's execution role.",
      "B. Set the AWSLambdaBasicExecutionRole managed policy as the Lambda function's resource-based policy.",
      "C. Attach the CloudWatchLambdaInsightsExecutionRolePolicy managed policy to the Lambda function's execution role.",
      "D. Set the CloudWatchLambdaInsightsExecutionRolePolicy managed policy as the Lambda function's resource-based policy."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q221",
    "text": "A company's website runs on an Amazon EC2 instance and uses Auto Scaling to scale the environment during peak times. Website users across the world are experiencing high latency due to static content on the EC2 instance, even during non-peak hours. Which combination of steps will resolve the latency issue? (Choose two.)",
    "options": [
      "A. Double the Auto Scaling group's maximum number of servers.",
      "B. Host the application code on AWS Lambda.",
      "C. Scale vertically by resizing the EC2 instances.",
      "D. Create an Amazon CloudFront distribution to cache the static content.",
      "E. Store the application’s static content in Amazon S3."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q222",
    "text": "An application is experiencing performance issues based on increased demand. This increased demand is on read-only historical records pulled from an Amazon RDS-hosted database with custom views and queries. A developer must improve performance without changing the database structure. Which approach will improve performance and MINIMIZE management overhead?",
    "options": [
      "A. Deploy Amazon DynamoDB, move all the data, and point to DynamoDB.",
      "B. Deploy Amazon ElastiCache for Red is and cache the data for the application.",
      "C. Deploy Memcached on Amazon EC2 and cache the data for the application.",
      "D. Deploy Amazon DynamoDB Accelerator (DAX) on Amazon RDS to improve cache performance."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q223",
    "text": "A company is planning to deploy an application on AWS behind an Elastic Load Balancer. The application uses an HTTP/HTTPS listener and must access the client IP addresses. Which load-balancing solution meets these requirements?",
    "options": [
      "A. Use an Application Load Balancer and the X-Forwarded-For headers.",
      "B. Use a Network Load Balancer (NLB). Enable proxy protocol support on the NLB and the target application.",
      "C. Use an Application Load Balancer. Register the targets by the instance ID.",
      "D. Use a Network Load Balancer and the X-Forwarded-For headers."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q224",
    "text": "A developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been con\u0000gured to process these records. In which order will these records be processed?",
    "options": [
      "A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, \u0000rst-out) method.",
      "B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (\u0000rst-in, \u0000rst-out) method.",
      "C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (\u0000rst-in, \u0000rst-out) method. There is no",
      "D. The developer can select FIFO (\u0000rst-in, \u0000rst-out), LIFO (last-in, \u0000rst-out), random, or request speci\u0000c record using the getRecords API."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q225",
    "text": "A developer is using an AWS CodeCommit repository to store source code for an application. The developer is using an AWS CodePipeline pipeline to deploy the application. The pipeline does not start automatically and must be started manually when a deployment is needed. The developer needs to con\u0000gure the pipeline to start automatically. Which solution meets this requirement with the LEAST delay?",
    "options": [
      "A. Create a webhook in the CodeCommit repository to directly call the CodePipeline API to start the pipeline.",
      "B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to start the pipeline upon the detection of changes in the CodeCommit",
      "C. Con\u0000gure the pipeline to poll the CodeCommit repository for changes and to start automatically when changes are detected.",
      "D. Create a CodeCommit trigger for an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. Con\u0000gure the SNS topic to post to the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q226",
    "text": "A developer is writing an IAM policy document that grants administrator access to AWS Key Management Service (AWS KMS) for a federated user. The federated IAM role name is FederatedIAMRole. The user name is KeyAdmin. How should the developer set the principal in the KMS key policy to meet these requirements?",
    "options": [
      "A. “Principal”: { “AWS”: “arn:aws:sts::123456789012:role/FederatedIAMRole/KeyAdmin” }",
      "B. “Principal”: { “AWS”: “arn:aws:sts::123456789012:user/FederatedIAMRole/KeyAdmin” }",
      "C. “Principal”: { “AWS”: “arn:aws:sts::123456789012:user/KeyAdmin” }",
      "D. “Principal”: { “AWS”: “arn:aws:sts::123456789012:assumed-role/FederatedIAMRole/KeyAdmin” }"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q227",
    "text": "A company has a multi-node Windows legacy application that runs on premises. The application uses a network shared folder as a centralized con\u0000guration repository to store con\u0000guration \u0000les in .xml format. The company is migrating the application to Amazon EC2 instances. As part of the migration to AWS, a developer must identify a solution that provides high availability for the repository. Which solution will meet this requirement MOST cost-effectively?",
    "options": [
      "A. Mount an Amazon Elastic Block Store (Amazon EBS) volume onto one of the EC2 instances. Deploy a \u0000le system on the EBS volume. Use",
      "B. Deploy a micro EC2 instance with an instance store volume. Use the host operating system to share a folder. Update the application code to",
      "C. Create an Amazon S3 bucket to host the repository. Migrate the existing .xml \u0000les to the S3 bucket. Update the application code to use the",
      "D. Create an Amazon S3 bucket to host the repository. Migrate the existing xml \u0000les to the S3 bucket. Mount the S3 bucket to the EC2"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q228",
    "text": "A company has deployed an application on AWS Elastic Beanstalk. The company has con\u0000gured the Auto Scaling group that is associated with the Elastic Beanstalk environment to have \u0000v e Amazon EC2 instances. If the capacity is fewer than four EC2 instances during the deployment, application performance degrades. The company is using the all-at-once deployment policy. What is the MOST cost-effective way to solve the deployment issue?",
    "options": [
      "A. Change the Auto Scaling group to six desired instances.",
      "B. Change the deployment policy to tra\u0000c splitting. Specify an evaluation time of 1 hour.",
      "C. Change the deployment policy to rolling with additional batch. Specify a batch size of 1.",
      "D. Change the deployment policy to rolling. Specify a batch size of 2."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q229",
    "text": "A developer at a company needs to create a small application that makes the same API call once each day at a designated time. The company does not have infrastructure in the AWS Cloud yet, but the company wants to implement this functionality on AWS. Which solution meets these requirements in the MOST operationally e\u0000cient manner?",
    "options": [
      "A. Use a Kubernetes cron job that runs on Amazon Elastic Kubernetes Service (Amazon EKS).",
      "B. Use an Amazon Linux crontab scheduled job that runs on Amazon EC2.",
      "C. Use an AWS Lambda function that is invoked by an Amazon EventBridge (Amazon CloudWatch Events) scheduled event.",
      "D. Use an AWS Batch job that is submitted to an AWS Batch job queue."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q230",
    "text": "A company has an application that generates large binary data outside of AWS. The company must encrypt the data before uploading the data to an Amazon S3 bucket. Which solution will meet this requirement?",
    "options": [
      "A. Use the AWS Key Management Service (AWS KMS) encrypt command in the AWS CLI.",
      "B. Con\u0000gure server-side encryption on the S3 bucket.",
      "C. Use the AWS Encryption SDK to perform client-side encryption of the data.",
      "D. Specify the x-amz-server-side-encryption header when uploading the data to the S3 bucket."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q231",
    "text": "A Developer accesses AWS CodeCommit over SSH. The SSH keys con\u0000gured to access AWS CodeCommit are tied to a user with the following permissions: The Developer needs to create/delete branches. Which speci\u0000c IAM permissions need to be added, based on the principle of least privilege?",
    "options": [
      "A. “codecommit:CreateBranch”",
      "B. “codecommit:Put*”",
      "C. “codecommit:Update*”",
      "D. “codecommit:*”"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q232",
    "text": "Where should an Elastic Beanstalk con\u0000guration \u0000le named healthcheckurl.con\u0000g be placed in the application source bundle?",
    "options": [
      "A. In the root of the application",
      "B. In the bin folder",
      "C. In healthcheckurl.con\u0000g.ebextension under root",
      "D. In the .ebextensions folder"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q233",
    "text": "A developer is writing a web application that allows users to sign in. The application will run on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances will run in an Auto Scaling group across multiple Availability Zones. How can the developer ensure that users stay signed in when the Auto Scaling group is scaled down?",
    "options": [
      "A. Enable sticky sessions on the ALB target group.",
      "B. Create an Amazon DynamoDB table. Con\u0000gure the application to use the DynamoDB table to store session state such as login status.",
      "C. Create an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS Multi-Attach to attach the volume to all instances in the Auto Scaling",
      "D. Enable deregistration delay on the ALB target group."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q234",
    "text": "A developer is troubleshooting a new AWS Lambda function. The function should run automatically each time a new object is uploaded to an Amazon S3 bucket. The function is supposed to read the object, make modi\u0000cations, and overwrite the object with the new version. The developer \u0000nds that all calls failed within the function code. Which of the following are possible reasons for this failure? (Choose two.)",
    "options": [
      "A. The function resource policy does not allow access from Amazon S3.",
      "B. The function execution role does not allow access from Amazon S3.",
      "C. The function execution role does not allow access to Amazon S3.",
      "D. The S3 bucket policy does not allow access from the Lambda function.",
      "E. The S3 bucket policy does not allow access to the Lambda function."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q235",
    "text": "An application is processing clickstream data using Amazon Kinesis. The clickstream data feed into Kinesis experiences periodic spikes. The PutRecords API call occasionally fails and the logs show that the failed call returns the response shown below: Which techniques will help mitigate this exception? (Choose two.)",
    "options": [
      "A. Implement retries with exponential backoff.",
      "B. Use a PutRecord API instead of PutRecords.",
      "C. Reduce the frequency and/or size of the requests.",
      "D. Use Amazon SNS instead of Kinesis.",
      "E. Reduce the number of KCL consumers."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q236",
    "text": "Two containerized microservices are hosted on Amazon EC2 ECS. The \u0000rst microservice reads an Amazon RDS Aurora database instance, and the second microservice reads an Amazon DynamoDB table. How can each microservice be granted the minimum privileges?",
    "options": [
      "A. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in ECS agent con\u0000guration \u0000le. Run the \u0000rst microservice with an IAM role",
      "B. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in the ECS agent con\u0000guration \u0000le. Grant the instance pro\u0000le r ole read-",
      "C. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent con\u0000guration \u0000le. Run the \u0000rst microservice with an IAM",
      "D. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent con\u0000guration \u0000le. Grant the instance pro\u0000le r ole read-only"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q237",
    "text": "A developer is writing a new serverless application for a company. Several other developers must collaborate on the code for this application, and the company expects frequent changes to the code. The developer needs to deploy the code from source control to AWS Lambda with the fewest number of manual steps. Which strategy for the build and deployment should the developer use to meet these requirements?",
    "options": [
      "A. Build the code locally, and then upload the code into the source control system. When a release is needed, run AWS CodePipeline to extract",
      "B. Use the AWS Serverless Application Model (AWS SAM) CLI to build and deploy the application from the developer's local machine with the",
      "C. Use AWS CodeBuild and AWS CodePipeline to invoke builds and corresponding deployments when con\u0000gured source controlled branches",
      "D. Use the Lambda console to upload a .zip \u0000le of the application that is created by the AWS Serverless Application Model (AWS SAM) CLI"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q238",
    "text": "A developer is using an AWS CodePipeline pipeline to provide continuous integration and continuous delivery (CI/CD) support for a Java application. The developer needs to update the pipeline to support the introduction of a new application dependency .jar \u0000le. The pipeline must start a build when a new version of the .jar \u0000le becomes available. Which solution will meet these requirements?",
    "options": [
      "A. Create an Amazon S3 bucket to store the dependency .jar \u0000le. Publish the dependency .jar \u0000le to the S3 bucket. Use an Amazon Simple",
      "B. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency jar \u0000le to the repository. Use an ECR",
      "C. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency .jar \u0000le to the repository. Use an",
      "D. Create an AWS CodeArtifact repository. Publish the dependency .jar \u0000le to the repository. Use an Amazon EventBridge (Amazon CloudWatch"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q239",
    "text": "A developer is writing a serverless application that requires an AWS Lambda function to be invoked every 10 minutes. What is an automated and serverless way to invoke the function?",
    "options": [
      "A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab \u0000le by adding a command to periodically invoke the Lambda",
      "B. Con\u0000gure an environment variable named PERIOD for the Lambda function. Set the value to 600.",
      "C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs on a regular schedule to invoke the Lambda function.",
      "D. Create an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic that has a subscription to the Lambda function with a 600-second timer."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q240",
    "text": "A company is migrating legacy internal applications to AWS. Leadership wants to rewrite the internal employee directory to use native AWS services A developer needs to create a solution for storing employee contact details and high-resolution photos for use with the new application. Which solution will enable the search and retrieval of each employee's individual details and high-resolution photos using AWS APIs?",
    "options": [
      "A. Encode each employee s contact information and photos using Base64 Store the information in an Amazon DynamoDB table using a sort",
      "B. Store each employee's contact information in an Amazon DynamoDB table along with the object keys for the photos stored in Amazon S3.",
      "C. Use Amazon Cognito user pools to implement the employee directory in a fully managed software-as-a-service (SaaS) method.",
      "D. Store employee contact information in an Amazon RDS DB instance with the photos stored in Amazon Elastic File System (Amazon EFS)."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q241",
    "text": "A company has three different environments: Development. QA, and Production. The company wants to deploy its code \u0000rst in the Development environment, then QA, and then Production. Which AWS service can be used to meet this requirement?",
    "options": [
      "A. Use AWS CodeCommit to create multiple repositories to deploy the application.",
      "B. Use AWS CodeBuild to create, con\u0000gure, and deploy multiple build application projects.",
      "C. Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application.",
      "D. Use AWS CodeDeploy to create multiple deployment groups."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q242",
    "text": "A developer is creating a template that uses AWS CloudFormation to deploy an application. The application is serverless and uses Amazon API Gateway. Amazon DynamoDB, and AWS Lambda. Which AWS service or tool should the developer use to de\u0000ne serverless resources in YAML?",
    "options": [
      "A. CloudFormation serverless intrinsic functions",
      "B. AWS Elastic Beanstalk",
      "C. AWS Serverless Application Model (AWS SAM)",
      "D. AWS Cloud Development Kit (AWS CDK)"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q243",
    "text": "An application adds a processing date to each transaction that it receives. The application writes each transaction to an Amazon DynamoDB table by using the PutItem operation. Each transaction has a unique ID (transactionID). Sometimes the application receives transactions more than once. A developer notices that duplicate transactions in DynamoDB have the latest processing date instead of the date when the transaction was \u0000rst received. Duplicate records happen infrequently, and most of the transactions are unique. What is the MOST cost-effective solution that the developer can implement to ensure that PutItem does not update an existing record?",
    "options": [
      "A. Call the GetItem operation \u0000rst to con\u0000rm that the record does not exist. Then call PutItem.",
      "B. Enable the TTL attribute on the DynamoDB table.",
      "C. Implement a conditional put by using the attribute_exists(transactionID) condition expression.",
      "D. Implement a conditional put by using the attribute_not_exists(transactionID) condition expression."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q244",
    "text": "A developer is building a static, client-side rendered website that is powered by ReactJS. The code has no server-side generated components and does not need to run any programming languages on the server. However, the code serves static HTML, CSS, and JavaScript to the client on each request. The developer’s solution to host the website must maximize performance and cost-effectiveness. Which combination of AWS services or resources should the developer use to meet these requirements?",
    "options": [
      "A. Application Load Balancer and Amazon EC2",
      "B. Amazon API Gateway and AWS Lambda",
      "C. Amazon CloudFront and Amazon S3",
      "D. Amazon CloudFront and AWS Elastic Beanstalk"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q245",
    "text": "A developer has written an application that runs on Amazon EC2 instances. The developer is adding functionality for the application to write objects to an Amazon S3 bucket. Which policy must the developer modify to allow the instances to write these objects?",
    "options": [
      "A. The IAM policy that is attached to the EC2 instance pro\u0000le r ole.",
      "B. The session policy that is applied to the EC2 instance role session.",
      "C. The AWS Key Management Service (AWS KMS) key policy that is attached to the EC2 instance pro\u0000le r ole.",
      "D. The Amazon VPC endpoint policy."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q246",
    "text": "A developer uses the Amazon S3 ListObjectsV2 API call to retrieve and list object keys from an S3 bucket. The list can contain thousands of keys, and the retrieval often returns more than the max-keys maximum value. The code must handle any number of returned results. How can the developer modify the code to handle any number of returns?",
    "options": [
      "A. Set max-keys in the ListObjectsV2 API call to the expected number of returned objects.",
      "B. Set max-keys in the ListObjectsV2 API call to -1.",
      "C. Run an S3 Select query to retrieve and list object keys from the bucket.",
      "D. When applicable, repeat the ListObjectsV2 API call by using NextContinuationToken."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q247",
    "text": "A developer is writing an application that runs on Amazon EC2 instances in an Auto Scaling group The application data is stored in an Amazon DynamoDB table and records are constantly updated by all instances. An instance sometimes retrieves old data. The developer wants to correct this by making sure the reads are strongly consistent. How can the developer accomplish this?",
    "options": [
      "A. Set ConsistentRead to true when calling GetItem.",
      "B. Create a new DynamoDB Accelerator (DAX) table",
      "C. Set Consistency to strong when calling UpdateTable.",
      "D. Use the GetShardIterator command."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q248",
    "text": "A development team sets up a project's \u0000le directory structure in AWS CodeCommit. The team plans to use AWS CodeBuild and AWS CodeDeploy. The team creates the necessary con\u0000guration \u0000les for CodeBuild and CodeDeploy. The team wants to name and place these \u0000les according to service defaults. Where should the team place the CodeBuild and CodeDeploy \u0000les?",
    "options": [
      "A. A directory named \"aws\" under the route source directory",
      "B. A directory named \"deploy\" under the root source directory",
      "C. A directory named \"scripts\" under the root source directory",
      "D. The root of the source directory"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q249",
    "text": "A software company must ensure that documents that are uploaded by users are securely stored in Amazon S3. The documents must be encrypted at rest in Amazon S3. The company wants to avoid client-side encryption and does not want to manage the security infrastructure. In addition, the company wants control over the keys that are used for encryption at rest. Which solution for encryption keys should a developer use to meet these requirements?",
    "options": [
      "A. Amazon S3 managed keys",
      "B. Application-level encryption with customer-provided encryption keys that are stored in an on-premises hardware security module (HSM)",
      "C. AWS Key Management Service (AWS KMS) customer managed keys",
      "D. IAM access keys"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q250",
    "text": "In a move toward using microservices, a company's management team has asked all development teams to build their services so that API requests depend only on that service's data store. One team is building a Payments service which has its own database; the service needs data that originates in the Accounts database. Both are using Amazon DynamoDB. What approach will result in the simplest, decoupled, and reliable method to get near-real time updates from the Accounts database?",
    "options": [
      "A. Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database.",
      "B. Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database.",
      "C. Use Amazon Kinesis Data Firehose to deliver all changes from the Accounts database to the Payments database.",
      "D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q251",
    "text": "A software engineer developed an AWS Lambda function in Node.js to do some CPU-intensive data processing. With the default settings, the Lambda function takes about 5 minutes to complete. Which approach should a developer take to increase the speed of completion?",
    "options": [
      "A. Instead of using Node.js. rewrite the Lambda function using Python.",
      "B. Instead of packaging the libraries in the ZIP \u0000le with the function, move them to a Lambda layer and use the layer with the function.",
      "C. Allocate the maximum available CPU units to the function.",
      "D. Increase the available memory to the function."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q252",
    "text": "A developer must build a mobile application that allows users to read and write data from an Amazon DynamoDB table to store user state for each unique user. The solution needs to limit data access to allow users access only to their own data. Which solution below is the most secure?",
    "options": [
      "A. Embed AWS access credentials into the application and create DynamoDB queries that limit user access.",
      "B. Use Amazon Cognito identity pools to assign unique identi\u0000ers and provide user access.",
      "C. Modify the DynamoDB table to allow public read and writes, then add client-side \u0000ltering.",
      "D. Create a web portal for users to create an account on AWS Directory Service."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q253",
    "text": "A developer is developing an application that uses signed requests (Signature Version 4) to call other AWS services. The developer has created a canonical request, has created the string to sign, and has calculated signing information. Which methods could the developer use to complete a signed request? (Choose two.)",
    "options": [
      "A. Add the signature to an HTTP header that is named Authorization",
      "B. Add the signature to a session cookie",
      "C. Add the signature to an HTTP header that is named Authentication",
      "D. Add the signature to a query string parameter that is named X-Amz-Signature",
      "E. Add the signature to an HTTP header that is named WWW-Authenticate"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q254",
    "text": "A company has an Amazon S3 bucket containing premier content that it intends to make available to only paid subscribers of its website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors. How can the company limit the ability to download a premier content \u0000le in the S3 bucket to paid subscribers only?",
    "options": [
      "A. Apply a bucket policy that allows anonymous users to download the content from the S3 bucket.",
      "B. Generate a pre-signed object URL for the premier content \u0000le when a paid subscriber requests a download.",
      "C. Add a bucket policy that requires multi-factor authentication for requests to access the S3 bucket objects.",
      "D. Enable server-side encryption on the S3 bucket for data protection against the non-paying website visitors."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q255",
    "text": "An application under development is required to store hundreds of video \u0000les. The data must be encrypted within the application prior to storage, with a unique key for each video \u0000le. How should the Developer code the application?",
    "options": [
      "A. Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data.",
      "B. Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted",
      "C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.",
      "D. Upload the data to an S3 bucket using server side-encryption with an AWS KMS key."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q256",
    "text": "An organization is storing large \u0000les in Amazon S3, and is writing a web application to display meta-data about the \u0000les to end-users. Based on the metadata a user selects an object to download. The organization needs a mechanism to index the \u0000les and provide single-digit millisecond latency retrieval for the metadata. What AWS service should be used to accomplish this?",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon EC2",
      "C. AWS Lambda",
      "D. Amazon RDS"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q257",
    "text": "A developer is writing an application in AWS Lambda. To simplify testing and deployments, the developer needs the database connection string to be easily changed without modifying the Lambda code. How can this requirement be met?",
    "options": [
      "A. Store the connection string as a secret in AWS Secrets Manager.",
      "B. Store the connection string in an IAM user account.",
      "C. Store the connection string in AWS KMS.",
      "D. Store the connection string as a Lambda layer."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q258",
    "text": "A company has an AWS Lambda function that reads messages from an Amazon Simple Queue Service (Amazon SQS) queue by using the Amazon SQS API. The Lambda function is not processing all the messages successfully because of random failures of a third-party dependency. A developer needs to improve the reliability of the Lambda function so that the Lambda function will process each message successfully despite the failures of the third-party dependency. Which solution will meet this requirement with the LEAST effort?",
    "options": [
      "A. Move the call to the third-party dependency into an exception handling block. Write the message back to the SQS queue if a failure in the",
      "B. Update the code in the Lambda function to remove calls to the SQS SDK ReceiveMessage function. Con\u0000gure the Lambda function to use",
      "C. Create a second SQS queue to use as a dead-letter queue. Con\u0000gure a redrive policy on the original SQS queue to send failed messages to",
      "D. Create a second SQS queue to use as a dead-letter queue. Move the call to the third-party dependency into an exception handling block."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q259",
    "text": "A developer is building a new application that uses an Amazon DynamoDB table. The speci\u0000cation states that all items that are older than 48 hours must be removed. Which solution will meet this requirement?",
    "options": [
      "A. Create a new attribute that has the Number data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration",
      "B. Create a new attribute that has the String data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration",
      "C. Create a new attribute that has the Number data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the",
      "D. Create a new attribute that has the String data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q260",
    "text": "A developer is designing a web application in which new users will use their email addresses to create accounts. Millions of users are expected to sign up. The application will store attributes for each user. Which AWS service or feature should the developer implement to meet these requirements?",
    "options": [
      "A. Amazon Cognito user pools",
      "B. AWS Mobile Hub User File Storage",
      "C. AWS AppSync",
      "D. AWS Mobile Hub Cloud Logic"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q261",
    "text": "A company is running a software-as-a-service (SaaS) application in its on-premises data center. The application architecture uses a frontend Apache web server to support many customer-speci\u0000c websites. The Apache web server routes tra\u0000c t o a different set of servers based on the domain name that is speci\u0000ed in the host header of the initial request. The company decides to move its architecture to AWS. A developer is moving the customer-speci\u0000c backend servers onto Amazon EC2 instances. The developer must con\u0000gure the EC2 instances in Auto Scaling groups for each customer and must register the instances in different target groups. The developer needs to replace the frontend Apache web server with an Elastic Load Balancing (ELB) load balancer. The developer also must forward queries for speci\u0000c domain names to the appropriate target groups. Which con\u0000guration on AWS will meet these requirements?",
    "options": [
      "A. Use a Network Load Balancer and host-based routing to respective backend target groups.",
      "B. Use a Network Load Balancer and path-based routing to respective backend target groups.",
      "C. Use an Application Load Balancer and host-based routing to respective backend target groups.",
      "D. Use an Application Load Balancer and path-based routing to respective backend target groups."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q262",
    "text": "A company has an AWS Lambda function that runs hourly, reads log \u0000les that are stored in Amazon S3, and forwards alerts to Amazon Simple Noti\u0000cation Service (Amazon SNS) topics based on content. A developer wants to add a custom metric to the Lambda function to track the number of alerts of each type for each run. The developer needs to log this information in Amazon CloudWatch in a metric that is named Lambda/AlertCounts. How should the developer modify the Lambda function to meet this requirement with the LEAST operational overhead?",
    "options": [
      "A. Add a print statement to standard out for each alert and the number of occurrences.",
      "B. Add a call to the PutMetricData API operation. Pass an array for alerts and the number of occurrences in the Values and Counts \u0000elds with",
      "C. Add a call to the PutMetricAlarm API operation. Pass an array of alerts in the metrics member with the namespace of",
      "D. Add a call to the PutDashboard API operation. Pass an array of alerts in the metrics member with the namespace of “Lambda/AlertCounts”."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q263",
    "text": "A company deploys a photo-processing application to an Amazon EC2 instance The application needs to process each photo in less than 5 seconds. If processing takes longer than 5 seconds, the company's development team must receive a noti\u0000cation. How can a developer implement the required time measurement and noti\u0000cation with the LEAST operational overhead?",
    "options": [
      "A. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a",
      "B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Each time a photo is processed, publish the processing time to the queue.",
      "C. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a",
      "D. Create an Amazon Kinesis data stream. Each time a photo is processed, publish the processing time to the data stream. Create an Amazon"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q264",
    "text": "A developer is troubleshooting an Amazon API Gateway API. Clients are receiving HTTP 400 response errors when the clients try to access an endpoint of the API. How can the developer determine the cause of these errors?",
    "options": [
      "A. Create an Amazon Kinesis Data Firehose delivery stream to receive API call logs from API Gateway. Con\u0000gure Amazon CloudWatch Logs as",
      "B. Turn on AWS CloudTrail Insights and create a trail. Specify the Amazon Resource Name (ARN) of the trail for the stage of the API.",
      "C. Turn on AWS X-Ray for the API stage. Create an Amazon CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log",
      "D. Turn on execution logging and access logging in Amazon CloudWatch Logs for the API stage Create a CloudWatch Logs log group. Specify"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q265",
    "text": "A company is hosting an Amazon API Gateway REST API that calls a single AWS Lambda function. The function is infrequently invoked by multiple clients at the same time. The code performance is optimal, but the company wants to optimize the startup time of the function. What can a developer do to optimize the initialization of the function?",
    "options": [
      "A. Enable API Gateway caching for the REST API.",
      "B. Con\u0000gure provisioned concurrency for the Lambda function.",
      "C. Use Lambda proxy integration for the REST API.",
      "D. Con\u0000gure AWS Global Accelerator for the Lambda function."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q266",
    "text": "A developer wants to expand an application to run in multiple AWS Regions. The developer wants to copy Amazon Machine Images (AMIs) with the latest changes and create a new application slack in the destination Region. According to company requirements, all AMIs must be encrypted in all Regions. However, not all the AMIs that the company uses are encrypted. How can the developer expand the application to run in the destination Region while meeting the encryption requirement?",
    "options": [
      "A. Create a new AMIs, and specify encryption parameters. Copy the encrypted AMIs to the destination Region. Delete the unencrypted AMIs.",
      "B. Use AWS Key Management Service (AWS KMS) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination",
      "C. Use AWS Certi\u0000cate Manager (ACM) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.",
      "D. Copy the unencrypted AMIs to the destination Region. Enable encryption by default in the destination Region."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q267",
    "text": "A company manages a microservices application on Amazon EC2 instances. A developer has integrated the AWS X-Ray SDK with the application. The developer also has an IAM role that is associated with the EC2 instances. The role includes the AWSXRayDaemonWriteAccess managed IAM policy. When the developer queries the X-Ray traces by using the GetServiceGraph API operation, no errors and no trace data are returned. What could be the reason that no X-Ray trace data is being returned? (Choose two.)",
    "options": [
      "A. The X-Ray daemon is not installed on each EC2 instance.",
      "B. The GetServiceGraph API operation is providing a StartTime value and an EndTime value that are older than 30 days.",
      "C. X-Ray trace data is not available for querying for 30 minutes after it is captured.",
      "D. The developer’s IAM policy contains the AWSXRayReadOnlyAccess managed policy.",
      "E. The GetServiceGraph API operation does not include an EndTime value."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q268",
    "text": "A developer is trying to determine which IAM user is calling several AWS APIs from an application. Which service would provide this information?",
    "options": [
      "A. AWS Con\u0000g",
      "B. AWS CloudTrail",
      "C. Amazon CloudWatch",
      "D. Amazon VPC Flow Logs"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q269",
    "text": "A company is building a cloud solution to analyze customer demographic data. The data includes personally identi\u0000able information (PII) such as full names, street addresses, and \u0000nancial records. A developer is con\u0000guring a source Amazon DynamoDB table with a DynamoDB stream. The developer is writing an AWS Lambda function that will ingest the demographic data from the DynamoDB stream. perform analytics, and write results to a separate DynamoDB table. The application must log important AWS API work\u0000ow events for monitoring purposes, but the application must expose the PII. Which combination of actions should the developer take to log the LARGEST amount of AWS API operational information without exposing the PII? (Choose two.)",
    "options": [
      "A. Con\u0000gure the DynamoDB stream to record KEYS_ONLY events.",
      "B. Con\u0000gure the DynamoDB stream to record NEW_IMAGE events.",
      "C. Log the received event. Fetch the items from the source DynamoDB table. Log the response metadata from the API. Process and record the",
      "D. Log the received event. Fetch the items from the source DynamoDB table. Log the response from the API. Process and record the result in",
      "E. Fetch the items from the source DynamoDB table. Process the data and log work\u0000ow events without referring to the PII. Record the result in"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q270",
    "text": "A company is using AWS CloudFormation to deploy a two-tier application. The application will use Amazon RDS as its backend database. The company wants a solution that will randomly generate the database password during deployment. The solution also must automatically rotate the database password without requiring changes to the application. What is the MOST operationally e\u0000cient solution that meets these requirements?",
    "options": [
      "A. Use an AWS Lambda function as a CloudFormation custom resource to generate and rotate the password.",
      "B. Use an AWS Systems Manager Parameter Store resource with the SecureString data type to generate and rotate the password.",
      "C. Use a cron daemon on the application’s host to generate and relate the password.",
      "D. Use an AWS Secrets Manager resource to generate and rotate the password."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q271",
    "text": "A company is building a serverless microservice for an existing application that uses AWS Lambda functions and Amazon API Gateway. The microservice needs to automate an on-premises identity provider (IdP) that supports the OpenID Connect (OIDC) standard. What should the company do to implement the API authorization mechanism with the LEAST operational overhead?",
    "options": [
      "A. Use an API Gateway HTTP API to invoke the Lambda functions. Set the JSON Web Token (JWT) issuer as the public OIDC endpoint of the",
      "B. Use an API Gateway HTTP API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the",
      "C. Use an API Gateway REST API to invoke the Lambda functions. Con\u0000gure the JSON Web Token (JWT) issuer to link to the on-premises IdP",
      "D. Use an API Gateway REST API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q272",
    "text": "A website allows users to upload photos to Amazon S3. An S3 event invokes an AWS Lambda function that uses the Amazon Rekognition DetectLabels operation to detect real-world objects within a photo. The website needs to store this data in a search index to allow users to quickly locate all photos associated with a label. Which solution will meet these requirements?",
    "options": [
      "A. Store username and label values as S3 object tags. Retrieve and index the objects based on the tag by calling the describe-tags API with",
      "B. Store username and label values as S3 object metadata keys. Include the \"x-amz-meta-\" pre\u0000x for each key. Search by metadata to \u0000nd all",
      "C. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB table. Create a global secondary index with the",
      "D. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index. De\u0000ne the username as the"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q273",
    "text": "A developer has an application that makes batch requests directly to Amazon DynamoDB by using the BatchGetltem low-level API operation. The responses frequently return values in the UnprocessedKeys element. Which actions should the developer take to increase the resiliency of the application when the batch response includes values in UnprocessedKeys? (Choose two.)",
    "options": [
      "A. Retry the batch operation immediately.",
      "B. Retry the batch operation with exponential backoff and randomized delay.",
      "C. Update the application to use an AWS software development kit (AWS SDK) to make the requests.",
      "D. Increase the provisioned read capacity of the DynamoDB tables that the operation accesses.",
      "E. Increase the provisioned write capacity of the DynamoDB tables that the operation accesses."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q274",
    "text": "While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identi\u0000es the need for centralized storage of application-level logs. Which AWS service can be used to securely store these logs?",
    "options": [
      "A. Amazon EC2 VPC Flow Logs",
      "B. Amazon CloudWatch Logs",
      "C. Amazon CloudSearch",
      "D. AWS CloudTrail"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q275",
    "text": "A company deploys a local news website on a \u0000eet of Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to implement authentication for viewers through well-known social identity providers (IdPs). The company’s development team must use AWS native services in the solution. Which combination of actions will meet these requirements? (Choose two.)",
    "options": [
      "A. Con\u0000gure Amazon Cognito user pools with social IdPs",
      "B. Con\u0000gure OpenID Connect (OIDC)-compliant IdP endpoints",
      "C. Create an AWS Lambda authorizer as a target in the ALB target group",
      "D. Con\u0000gure an ALB listener to add a rule for authentication",
      "E. Use Lambda@Edge to authorize viewer requests in the ALB"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q276",
    "text": "A company designs a mobile app to run on AWS. The app will run on Amazon EC2 instances behind an Application Load Balancer. The instances will run in an Amazon EC2 Auto Scaling group. The app must securely access data that the company stores in Amazon DynamoDB. Which solution is MOST secure?",
    "options": [
      "A. Create an Amazon Cognito user pool for the mobile app users. Attach an IAM policy that has the required DynamoDB permissions to the",
      "B. Create an AWS Lambda authorizer with the required DynamoDB permissions. Attach the Lambda authorizer to the Application Load",
      "C. Create an IAM user for each mobile user. Attach an IAM policy that provides the required DynamoDB permissions to each IAM user.",
      "D. Create an IAM role. Attach a policy with the required DynamoDB permissions to the role. Con\u0000gure the EC2 Auto Scaling launch template to"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q277",
    "text": "An open-source map application gathers data from several geolocation APIs. The application's source code repository is public and can be used by anyone, but the geolocation APIs must not be directly accessible. A developer must implement a solution to prevent the credentials that are used to access the APIs from becoming public. The solution also must ensure that the application still functions properly. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Store the credentials in AWS Secrets Manager. Retrieve the credentials by using the GetSecretValue API operation.",
      "B. Store the credentials in AWS Key Management Service (AWS KMS). Retrieve the credentials by using the GetPublicKey API operation.",
      "C. Store the credentials in AWS Security Token Service (AWS STS). Retrieve the credentials by using the GetCallerldentity API operation.",
      "D. Store the credentials in AWS Systems Manager Parameter Store. Retrieve the credentials by using the GetParameter API operation."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q278",
    "text": "A developer is working on a serverless application that needs to process any changes to an Amazon DynamoDB table with an AWS Lambda function. How should the developer con\u0000gure the Lambda function to detect changes to the DynamoDB table?",
    "options": [
      "A. Create an Amazon Kinesis data stream, and attach it to the DynamoDB table. Create a trigger to connect the data stream to the Lambda",
      "B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function on a regular schedule. Connect to the",
      "C. Enable DynamoDB Streams on the table. Create a trigger to connect the DynamoDB stream to the Lambda function.",
      "D. Create an Amazon Kinesis Data Firehose delivery stream, and attach it to the DynamoDB table. Con\u0000gure the delivery stream destination as"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q279",
    "text": "A company is using Amazon OpenSearch Service to implement an audit monitoring system. A developer needs to create an AWS CloudFormation custom resource that is associated with an AWS Lambda function to con\u0000gure the OpenSearch Service domain. The Lambda function must access the OpenSearch Service domain by using OpenSearch Service internal master user credentials. What is the MOST secure way to pass these credentials to the Lambda function?",
    "options": [
      "A. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's",
      "B. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's",
      "C. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's",
      "D. Use CloudFormation to create an AWS Secrets Manager secret. Use a CloudFormation dynamic reference to retrieve the secret's value for"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q280",
    "text": "A company has a two-tier application that consists of a frontend application and an Amazon RDS for MySQL database. The frontend application retrieves data from the database. The data consists of postal codes and their associated geographic coordinates The application performs many more database reads than writes. The application retrieves each postal code from the database thousands of times each day. A developer must improve the performance of the application to decrease latency. Which change should the developer make to the application to meet these requirements?",
    "options": [
      "A. Modify the application to use a lazy loading caching strategy with a small TTL value.",
      "B. Modify the application to use a write-behind caching strategy.",
      "C. Modify the application to use a write-through caching strategy.",
      "D. Modify the application to use a lazy loading caching strategy with a large TTL value."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q281",
    "text": "A developer is building an application that supports multiple languages. The directory structure and \u0000le names for all versions of the website are identical. When a user views the website, the preferred language is added as a query string parameter. The following is an example of the URL: http://d111111abcdef2.doudfront.net/main.html?language=de. The query string is passed to Amazon CloudFront. No matter which language the developer selects, the English page is returned. If the developer accesses the website directly and bypasses CloudFront. the page works as expected What should the developer do so that the content of the page matches the language that the developer selects?",
    "options": [
      "A. Create a new CloudFront origin request policy. Set the query string option to All. Update the CloudFront distribution to use the new cache",
      "B. Create a new CloudFront cache policy. Set the minimum and maximum TTL to 1 hour. Update the CloudFront distribution to use the new",
      "C. Create a new CloudFront cache policy. Set the query string option to None. Update the CloudFront distribution to use the new cache policy.",
      "D. Create a new CloudFront cache policy. Set the query string option to Whitelist, and include the language string. Update the CloudFront"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q282",
    "text": "A development team uses AWS CodeDeploy to deploy software changes to Amazon EC2 instances. The deployments begin to fail. The team traces the problem to a speci\u0000c EC2 instance. The CodeDeploy agent's log \u0000le contains the following error message: InvalidSignatureException Signature expired: |time| is now earlier than |time| What is the underlying cause of this issue?",
    "options": [
      "A. The development team signed the CodeDeploy revision after the team created the deployment.",
      "B. The development team signed the CodeDeploy revision with a key that was not valid.",
      "C. The deployment did not \u0000nish within the speci\u0000ed time frame.",
      "D. The date setting or the time setting on the EC2 instance is not correct."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q283",
    "text": "An AWS Elastic Beanstalk application needs to be deployed in multiple regions and requires a different Amazon Machine Image (AMI) in each region. Which AWS CloudFormation template key can be used to specify the correct AMI for each region?",
    "options": [
      "A. Parameters",
      "B. Outputs",
      "C. Mappings",
      "D. Resources"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q284",
    "text": "A Development team wants to instrument their code to provide more detailed information to AWS X-Ray than simple outgoing and incoming requests. This will generate large amounts of data, so the Development team wants to implement indexing so they can \u0000lter the data. What should the Development team do to achieve this?",
    "options": [
      "A. Add annotations to the segment document and the code",
      "B. Add metadata to the segment document and the code",
      "C. Con\u0000gure the necessary X-Ray environment variables",
      "D. Install required plugins for the appropriate AWS SDK"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q285",
    "text": "A development team uses AWS CodeBuild for build and test activities in a PHP application. The build process requires the team to download and install three PHP packages from the internet. The install section of the buildspec.yml \u0000le includes commands to download and install these three packages. The team wants to reduce build time. Which solution will reduce build time the MOST?",
    "options": [
      "A. Download the package \u0000les from the internet. Upload the package \u0000les into an Amazon S3 bucket. Change the buildspec's install section to",
      "B. De\u0000ne a VPC endpoint for CodeBuild. Install the package \u0000les on an Amazon EC2 instance in the VPC. Change the buildspec's install",
      "C. Run the build on Jenkins by using the Jenkins plugin for CodeBuild. Pre-install the packages on the Jenkins server once. Remove the install",
      "D. Create a custom CodeBuild image with the package \u0000les already downloaded and installed. Alter the CodeBuild project to use the custom"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q286",
    "text": "An application uses an Amazon CloudFront distribution to deliver static content from Amazon S3 buckets that are set up in multiple AWS Regions around the world. A developer receives reports of problems with latency when cached content is updated. The developer plans to address this problem by redirecting requests on cache misses to the S3 bucket in the Region that is nearest to the user's country. The developer con\u0000gures the distribution to cache based on the CloudFront-Viewer-Country request header. What should the developer do next to redirect requests on cache misses?",
    "options": [
      "A. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront",
      "B. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the",
      "C. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the",
      "D. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q287",
    "text": "A social media application stores millions of video clips in Amazon S3 and serves them to users across the world. The tra\u0000c t o the application varies, but access often increases suddenly to more than 10,000 PUT requests and GET requests each second. As the application has grown in popularity, users report poor quality of video streaming. Which solution will provide the LARGEST improvement in performance?",
    "options": [
      "A. Create an Amazon Route 53 geolocation routing policy.",
      "B. Duplicate content in multiple AWS Regions by using S3 Cross Region-Replication.",
      "C. Use S3 Intelligent-Tiering to move data based on access patterns.",
      "D. Create an Amazon CloudFront distribution with Amazon S3 as an origin."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q288",
    "text": "A developer is creating a Java application that will store sensitive data in an Amazon DynamoDB table. The data must be encrypted at all times. How can the developer meet this requirement?",
    "options": [
      "A. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) AWS owned key for the DynamoDB table.",
      "B. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) customer managed key for the DynamoDB table.",
      "C. Implement client-side encryption in the application code by using the DynamoDB Encryption Client.",
      "D. Use an HTTPS connection to encrypt data in transit."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q289",
    "text": "A company is using AWS Elastic Beanstalk to manage web applications that are running on Amazon EC2 instances. A developer needs to make con\u0000guration changes. The developer must deploy the changes to new instances only. Which types of deployment can the developer use to meet this requirement? (Choose two.)",
    "options": [
      "A. All at once",
      "B. Immutable",
      "C. Rolling",
      "D. Blue/green",
      "E. Rolling with additional batch"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q290",
    "text": "A developer has created a REST API using Amazon API Gateway. The developer wants to log who and how each caller accesses the API. The developer also wants to control how long the logs are kept. What should the developer do to meet these requirements?",
    "options": [
      "A. Enable API Gateway execution logging. Delete old logs using API Gateway retention settings.",
      "B. Enable API Gateway access logs. Use Amazon CloudWatch retention settings to delete old logs.",
      "C. Enable detailed Amazon CloudWatch metrics. Delete old logs with a recurring AWS Lambda function.",
      "D. Create and use API Gateway usage plans. Delete old logs with a recurring AWS Lambda function."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q291",
    "text": "A Developer has been asked to make changes to the source code of an AWS Lambda function. The function is managed using an AWS CloudFormation template. The template is con\u0000gured to load the source code from an Amazon S3 bucket. The Developer manually created a .ZIP \u0000le deployment package containing the changes and put the \u0000le into the correct location on Amazon S3. When the function is invoked, the code changes have not been applied. What step is required to update the function with the changes?",
    "options": [
      "A. Delete the .ZIP \u0000le on S3, and re-upload by using a different object key name.",
      "B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.",
      "C. Ensure that the function source code is base64-encoded before uploading the deployment package to S3.",
      "D. Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP \u0000le."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q292",
    "text": "A developer is deploying Amazon Cognito as part of a new application. The Amazon Cognito user pool domain's hosted UI must match the application's deployed domain. DNS records must be updated appropriately. What should the developer do to meet these requirements?",
    "options": [
      "A. Con\u0000gure the application's domain DNS setting to use the prede\u0000ned domain.",
      "B. Con\u0000gure the pre\u0000x of the Amazon Cognito domain, amazoncognito.com, in the user pool app integration. Con\u0000gure the application's",
      "C. Create an AWS Certi\u0000cate Manager (ACM) certi\u0000cate in the us-east-1 Region. Con\u0000gure the user pool's app integration domain name with",
      "D. Create an AWS Certi\u0000cate Manager (ACM) certi\u0000cate in the us-east-1 Region. Con\u0000gure the user pool's domain app client settings with the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q293",
    "text": "A government agency deploys a REST application on AWS. The agency integrates the application with AWS Lambda. The agency accesses the application through Amazon API Gateway. The agency has the following policies: • Number versions to manage the deployment of all Lambda functions to production • Create a PROD alias to point to each function • Reference the PROD aliases in the production stages of API Gateway One Lambda function contains the environment variables that are used to externalize connection parameters. The PROD alias points to version 10 of the Lambda function. A developer needs to update the connection parameters and ensure that the updated Lambda function is available on production. Which solution will meet these requirements?",
    "options": [
      "A. Update the environment variable values on version 10 of the Lambda function. Do not change the PROD alias.",
      "B. Update the environment variable values on version 10 of the Lambda function. Save the changes to create version 11. Update the PROD",
      "C. Update the environment variable values on the SLATEST version. Do not change the PROD alias",
      "D. Update the environment variable values on the SLATEST version. Publish SLATEST to create version 11 of the Lambda function. Update the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q294",
    "text": "A company's developer is creating an application that uses Amazon API Gateway. The company wants to ensure that only users in the Sales department can use the application. The users authenticate to the application by using federated credentials from a third-party identity provider (ldP) through Amazon Cognito. The developer has set up an attribute mapping to map an attribute that is named Department and to pass the attribute to a custom AWS Lambda authorizer. To test the access limitation, the developer sets their department to Engineering in the IdP and attempts to log in to the application. The developer is denied access. The developer then updates their department to Sales in the IdP and attempts to log in. Again, the developer is denied access. The developer checks the logs and discovers that access is being denied because the developer's access token has a department value of Engineering. Which of the following is a possible reason that the developer’s department is still being reported as Engineering instead of Sales?",
    "options": [
      "A. Authorization caching is enabled in the custom Lambda authorizer.",
      "B. Authorization caching is enabled on the Amazon Cognito user pool.",
      "C. The IAM role for the custom Lambda authorizer does not have a Department tag.",
      "D. The IAM role for the Amazon Cognito user pool does not have a Department tag."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q295",
    "text": "A developer is creating an AWS Lambda function to process streaming data from an Amazon Kinesis data stream. When the Lambda function parses the data and encounters a malformed record from the stream, the Lambda function exits with an error. The developer is observing duplicate records downstream from the function. When the developer uses a different client to examine the Kinesis data stream output, no duplicate records are visible in the stream. What is the reason for the duplicate records?",
    "options": [
      "A. The Lambda function did not advance the Kinesis data stream pointer to the next record after the error.",
      "B. The Lambda event source used asynchronous invocation.",
      "C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.",
      "D. The Lambda function did not keep up with the amount of data that was coming from the Kinesis data stream."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q296",
    "text": "A developer is testing a new \u0000le storage application that uses an Amazon CloudFront distribution to serve content from an Amazon S3 bucket. The distribution accesses the S3 bucket by using an origin access identity (OAI). The S3 bucket's permissions explicitly deny access to all other users. The application prompts users to authenticate on a login page and then uses signed cookies to allow users to access their personal storage directories. The developer has con\u0000gured the distribution to use its default cache behavior with restricted viewer access and has set the origin to point to the S3 bucket. However, when the developer tries to navigate to the login page, the developer receives a 403 Forbidden error. The developer needs to implement a solution to allow unauthenticated access to the login page. The solution also must keep all private content secure. Which solution will meet these requirements?",
    "options": [
      "A. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second",
      "B. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second",
      "C. Add a second origin as a failover origin to the default cache behavior. Point the failover origin to the S3 bucket. Set the path pattern for the",
      "D. Add a bucket policy to the S3 bucket to allow read access. Set the resource on the policy to the Amazon Resource Name (ARN) of the login"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q297",
    "text": "A company must encrypt sensitive data that the company will store in Amazon S3. A developer must retain total control over the company's AWS Key Management Service (AWS KMS) key and the company’s data keys. The company currently uses an on-premises hardware security module (HSM) solution. The company wants to move its key management onto AWS. Which solution will meet these requirements?",
    "options": [
      "A. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use AWS CloudHSM to generate the KMS key and data keys to",
      "B. Implement server-side encryption with customer-provided encryption keys (SSE-C). Use AWS CloudHSM to generate the KMS key and",
      "C. Implement server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use AWS CloudHSM to generate the KMS key and",
      "D. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use the AWS KMS custom key store feature to manage the data"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q298",
    "text": "A developer is deploying a company's application to Amazon EC2 instances. The application generates gigabytes of data \u0000les each day. The \u0000les are rarely accessed, but the \u0000les must be available to the application’s users within minutes of a request during the \u0000rst year of storage. The company must retain the \u0000les for 7 years. How can the developer implement the application to meet these requirements MOST cost-effectively?",
    "options": [
      "A. Store the \u0000les in an Amazon S3 bucket Use the S3 Glacier Instant Retrieval storage class. Create an S3 Lifecycle policy to transition the \u0000les",
      "B. Store the \u0000les in an Amazon S3 bucket. Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition the \u0000les to the S3",
      "C. Store the \u0000les on an Amazon Elastic Block Store (Amazon EBS) volume. Use Amazon Data Lifecycle Manager (Amazon DLM) to create",
      "D. Store the \u0000les on an Amazon Elastic File System (Amazon EFS) mount. Con\u0000gure EFS lifecycle management to transition the \u0000les to the EFS"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q299",
    "text": "An application receives authenticated user data in the form of a JSON Web Token (JWT) from an Amazon Cognito user pool. A developer is setting up an Amazon API Gateway API to handle requests from the application and is using the token to verify the user’s identity. Which of the following must the developer validate before the user data can be trusted?",
    "options": [
      "A. The token’s nonce",
      "B. The key ID in the token’s header",
      "C. The token's signature",
      "D. The token's issuer claim"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q300",
    "text": "A new mobile app uses Amazon Cognito web identity federation. Immediately after a user logs in, the following error occurs: AccessDenied -- Not authorized to perform sts:AssumeRoleWithWebIdentity A developer determines that the Amazon Cognito con\u0000guration appears to be correct. Which of the following could be the cause of the error?",
    "options": [
      "A. The app’s developer incorrectly de\u0000ned the authenticated principal role access policy.",
      "B. The app could not con\u0000rm the user in the user pool.",
      "C. The app could not properly authenticate the user with the identity provider.",
      "D. The app’s developer incorrectly de\u0000ned the authenticated principal role trust policy."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q301",
    "text": "A business intelligence application runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Application-level audits require a searchable log of all API calls from users to the application. The application’s developers must store the logs centrally on AWS. Which solution will meet these requirements?",
    "options": [
      "A. Install the Amazon CloudWatch agent on the Amazon EC2 host that runs Fargate.",
      "B. Con\u0000gure the awslogs log driver in the ECS task de\u0000nition.",
      "C. Con\u0000gure AWS CloudTrail for the ECS containers.",
      "D. Install the ECS logs collector on the ECS hosts."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q302",
    "text": "A company hosts a client-side web application for one of its subsidiaries on Amazon S3. The web application can be accessed through Amazon CloudFront from https://www.example.com. After a successful rollout, the company wants to host three more client-side web applications for its remaining subsidiaries on three separate S3 buckets. To achieve this goal, a developer moves all the common JavaScript \u0000les and web fonts to a central S3 bucket that serves the web applications. However, during testing, the developer notices that the browser blocks the JavaScript \u0000les and web fonts. What should the developer do to prevent the browser from blocking the JavaScript \u0000les and web fonts?",
    "options": [
      "A. Create four access points that allow access to the central S3 bucket. Assign an access point to each web application bucket.",
      "B. Create a bucket policy that allows access to the central S3 bucket. Attach the bucket policy to the central S3 bucket.",
      "C. Create a cross-origin resource sharing (CORS) con\u0000guration that allows access to the central S3 bucket. Add the CORS con\u0000guration to the",
      "D. Create a Content-MD5 header that provides a message integrity check for the central S3 bucket. Insert the Content-MD5 header for each"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q303",
    "text": "A company has a new application. The company needs to secure sensitive con\u0000guration data such as database connection strings, application license codes, and API keys that the application uses to access external resources. The company must track access to the con\u0000guration data for auditing purposes. The resources are managed outside the application. The company is not required to manage rotation of the connection strings, license codes, and API keys in the application. The company must implement a solution to securely store the con\u0000guration data and to give the application access to the con\u0000guration data. The solution must comply with security best practices. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Store the con\u0000guration data in an encrypted \u0000le on the source code bundle. Grant the application access by using IAM policies.",
      "B. Store the con\u0000guration data in AWS Systems Manager Parameter Store. Grant the application access by using IAM policies.",
      "C. Store the con\u0000guration data on an Amazon Elastic Block Store (Amazon EBS) encrypted volume. Attach the EBS volume to an Amazon EC2",
      "D. Store the con\u0000guration data in AWS Secrets Manager. Grant the application access by using IAM policies."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q304",
    "text": "A developer deploys a custom application to three Amazon EC2 instances. The application processes messages from an Amazon Simple Queue Service (Amazon SQS) standard queue with default settings. When the developer runs a load test on the Amazon SQS queue, the developer discovers that the application processes many messages multiple times. How can the developer ensure that the application processes each message exactly once?",
    "options": [
      "A. Modify the SQS standard queue to an SQS FIFO queue.",
      "B. Process the messages on one EC2 instance instead of three instances.",
      "C. Create a new SQS FIFO queue. Point the application to the new queue.",
      "D. Increase the DelaySeconds value on the current SQS queue."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q305",
    "text": "A company is running its website on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. A developer needs to secure the internet-facing connection with HTTPS. The developer uses AWS Certi\u0000cate Manager (ACM) to issue an X.509 certi\u0000cate. What should the developer do to secure the connection?",
    "options": [
      "A. Con\u0000gure the ALB to use the X.509 certi\u0000cate by using the AWS Management Console.",
      "B. Con\u0000gure each EC2 instance to use the same X.509 certi\u0000cate by using the AWS Management Console.",
      "C. Export the root key of the X.509 certi\u0000cate to an Amazon S3 bucket. Con\u0000gure each EC2 instance to use the same X.509 certi\u0000cate from",
      "D. Export the root key of the X.509 certi\u0000cate to an Amazon S3 bucket. Con\u0000gure the ALB to use the X.509 certi\u0000cate from the S3 bucket."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q306",
    "text": "A developer uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to store data in Amazon S3. The developer needs to decrypt and download the encrypted objects by using the GetObject API call. What is the LEAST amount of information that the developer must provide in the API call to meet this requirement?",
    "options": [
      "A. The S3 object key only",
      "B. The S3 object key and the encryption key",
      "C. The S3 object key and the Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key",
      "D. The S3 object key and a randomly salted Hash-based Message Authentication Code (HMAC) value of the encryption key"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q307",
    "text": "A developer is managing an application that uploads user \u0000les to an Amazon S3 bucket named companybucket. The company wants to maintain copies of all the \u0000les uploaded by users for compliance purposes, while ensuring users still have access to the data through the application. Which IAM permissions should be applied to users to ensure they can create but not remove \u0000les from the bucket?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q308",
    "text": "A company is developing a microservice that will manage customer account data in an Amazon DynamoDB table. Insert, update, and delete requests will be rare. Read tra\u0000c will be heavy. The company must have the ability to access customer data quickly by using a customer ID. The microservice can tolerate stale data. Which solution will meet these requirements with the FEWEST possible read capacity units (RCUs)?",
    "options": [
      "A. Read the table by using eventually consistent reads.",
      "B. Read the table by using strongly consistent reads.",
      "C. Read the table by using transactional reads.",
      "D. Read the table by using strongly consistent PartiQL queries."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q309",
    "text": "A developer deploys an ecommerce application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. The EC2 instances are based on an Amazon Machine Image (AMI) that uses an Amazon Elastic Block Store (Amazon EBS) root volume. After deployment, the developer notices that a third of the instances seem to be idle. These instances are not receiving requests from the load balancer. The developer veri\u0000es that all the instances are registered with the load balancer. The developer must implement a solution to allow the EC2 instances to receive requests from the load balancer. Which action will meet this requirement?",
    "options": [
      "A. Reregister the failed instances with the ALB.",
      "B. Enable all Availability Zones for the ALB.",
      "C. Use the instance refresh feature to redeploy the EC2 Auto Scaling group.",
      "D. Restart the EC2 instances that are not receiving tra\u0000c."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q310",
    "text": "An application stores \u0000nancial statements in an Amazon S3 bucket. A recent security audit found that the bucket does not comply with company standards. Currently, several IAM policies allow encrypted calls and unencrypted calls to the bucket. The company needs to create a bucket policy that forces all requests to the bucket to use encrypted connections. Which solution will meet this requirement?",
    "options": [
      "A. Add a bucket policy with a condition of \"aws:SecureTransport\": \"true\" and an effect of \"Allow.\"",
      "B. Add a bucket policy with a resource of \"am:aws:s3:::https/bucketname\" and an effect of \"Allow.\"",
      "C. Add a bucket policy with a condition of \"aws:SecureTransport\": \"false\" and an effect of \"Deny.\"",
      "D. Add a bucket policy with a resource of \"arn:aws:s3:::http/bucketname\" and an effect of \"Deny.\""
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q311",
    "text": "A company uses the AWS SDK for JavaScript in the Browser to build a web application and then hosts the application on Amazon S3. The company wants the application to support 10,000 users concurrently. The company selects Amazon DynamoDB to store user preferences in a table. There is a requirement to uniquely identify users at any scale. Which solution will meet these requirements?",
    "options": [
      "A. Create a user cookie. Attach an 1AM role to the S3 bucket that hosts the application.",
      "B. Deploy an Amazon CloudFront distribution with an origin access identity (OAI) to access the S3 bucket.",
      "C. Con\u0000gure and use Amazon Cognito. Access DynamoDB with the authenticated users.",
      "D. Create an IAM user for each user. Use \u0000ne-grained access control on the DynamoDB table to control access."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q312",
    "text": "An application on AWS is using third-party APIs. A developer needs to monitor API errors in the code. The developer needs to receive noti\u0000cations if failures reach a set threshold value. How can the developer meet these requirements?",
    "options": [
      "A. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Email Service (Amazon SES) for noti\u0000cation.",
      "B. Use an Amazon CloudWatch API error metric. Use Amazon Simple Noti\u0000cation Service (Amazon SNS) for noti\u0000cation.",
      "C. Use an Amazon CloudWatch API error metric. Use Amazon Simple Email Service (Amazon SES) for noti\u0000cation.",
      "D. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Noti\u0000cation Service (Amazon SNS) for"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q313",
    "text": "A company is preparing to migrate an application to the company’s \u0000rst A WS environment. Before this migration, a developer is creating a proof- of-concept application to validate a model for building and deploying container-based applications on AWS. Which combination of steps should the developer take to deploy the containerized proof-of-concept application with the LEAST operational effort? (Choose two.)",
    "options": [
      "A. Package the application into a .zip \u0000le by using a command line tool. Upload the package to Amazon S3.",
      "B. Package the application into a container image by using the Docker CLI. Upload the image to Amazon Elastic Container Registry (Amazon",
      "C. Deploy the application to an Amazon EC2 instance by using AWS CodeDeploy.",
      "D. Deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on AWS Fargate.",
      "E. Deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q314",
    "text": "A developer is building a web application that processes and tracks votes. A voting device submits the votes to an Amazon S3 bucket named DOC- EXAMPLE-BUCKET. The application needs to record the votes to an Amazon DynamoDB table named Example. The developer writes an AWS Lambda function to process the objects. The developer writes the following policy for the execution role of the Lambda function: The developer ran a successful test on the Lambda function. However, the developer could not \u0000nd a record of the invocation in the logs. What should the developer do to record invocations of this function in the logs?",
    "options": [
      "A. Modify the Lambda function resource con\u0000guration in the AWS Management Console to log Lambda function invocations to Amazon",
      "B. Modify the Lambda code to produce event log output. Send the event log output to stdout. Redirect the stdout to Amazon CloudWatch",
      "C. Modify the Lambda execution role to have permissions to a create log groups, log streams, and log events in Amazon CloudWatch Logs.",
      "D. Modify the Lambda invocation permissions to allow DynamoDB and Amazon S3 to log Lambda actions to Amazon CloudWatch Logs."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q315",
    "text": "A developer has written the following IAM policy to provide access to an Amazon S3 bucket: Which access does the policy allow regarding the s3:GetObject and s3:PutObject actions?",
    "options": [
      "A. Access on all buckets except the \"DOC-EXAMPLE-BUCKET\" bucket",
      "B. Access on all buckets that start with \"DOC-EXAMPLE-BUCKET\" except the \"DOC-EXAMPLE-BUCKET/secrets\" bucket",
      "C. Access on all objects in the \"DOC-EXAMPLE-BUCKET\" bucket along with access to all S3 actions for objects in the \"DOC-EXAMPLE-",
      "D. Access on all objects in the \"DOC-EXAMPLE-BUCKET\" bucket except on objects that start with \"secrets\""
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q316",
    "text": "A developer is building various microservices for an application that will run on Amazon EC2 instances. The developer needs to monitor the end- to-end view of the requests between the microservices and debug any issues in the various microservices. What should the developer do to accomplish these tasks?",
    "options": [
      "A. Use Amazon CloudWatch to aggregate the microservices' logs and metrics, and build the monitoring dashboard.",
      "B. Use AWS CloudTrail to aggregate the microservices' logs and metrics, and build the monitoring dashboard.",
      "C. Use the AWS X-Ray SDK to add instrumentation in all the microservices, and monitor using the X-Ray service map.",
      "D. Use AWS Health to monitor the health of all the microservices."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q317",
    "text": "A developer is using AWS CodeDeploy to automate a company's application deployments to Amazon EC2. Which application speci\u0000cation \u0000le properties are required to ensure the software deployments do not fail? (Choose two.)",
    "options": [
      "A. The \u0000le must be a JSON-formatted \u0000le named appspec.json.",
      "B. The \u0000le must be a YAML-formatted \u0000le named appspec.yml.",
      "C. The \u0000le must be stored in AWS CodeBuild and referenced from the application's source code.",
      "D. The \u0000le must be placed in the root of the directory structure of the application's source code.",
      "E. The \u0000le must be stored in Amazon S3 and referenced from the application's source code."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q318",
    "text": "A developer maintains an Amazon API Gateway REST API. Customers use the API through a frontend UI and Amazon Cognito authentication. The developer has a new version of the API that contains new endpoints and backward-incompatible interface changes. The developer needs to provide beta access to other developers on the team without affecting customers. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. De\u0000ne a development stage on the API Gateway API. Instruct the other developers to point the endpoints to the development stage.",
      "B. De\u0000ne a new API Gateway API that points to the new API application code. Instruct the other developers to point the endpoints to the new",
      "C. Implement a query parameter in the API application code that determines which code version to call.",
      "D. Specify new API Gateway endpoints for the API endpoints that the developer wants to add."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q319",
    "text": "A company with multiple branch locations has an analytics and reporting application. Each branch o\u0000ce pushes a sales report to a shared Amazon S3 bucket at a prede\u0000ned time each day. The company has developed an AWS Lambda function that analyzes the reports from all branch o\u0000ces in a single pass. The Lambda function stores the results in a database. The company needs to start the analysis once each day at a speci\u0000c time. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Con\u0000gure an S3 event noti\u0000cation to invoke the Lambda function when a branch o\u0000ce uploads a sales report.",
      "B. Create an AWS Step Functions state machine that invokes the Lambda function once each day at the prede\u0000ned time.",
      "C. Con\u0000gure the Lambda function to run continuously and to begin analysis only at the prede\u0000ned time each day.",
      "D. Create an Amazon EventBridge scheduled rule that invokes the Lambda function once each day at the prede\u0000ned time."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q320",
    "text": "A company is expanding the compatibility of its photo-sharing mobile app to hundreds of additional devices with unique screen dimensions and resolutions. Photos are stored in Amazon S3 in their original format and resolution. The company uses an Amazon CloudFront distribution to serve the photos. The app includes the dimension and resolution of the display as GET parameters with every request. A developer needs to implement a solution that optimizes the photos that are served to each device to reduce load time and increase photo quality. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and",
      "B. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and",
      "C. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. Change the CloudFront TTL",
      "D. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. In the same function, store"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q321",
    "text": "A developer is monitoring an application that runs on an Amazon EC2 instance. The developer has con\u0000gured a custom Amazon CloudWatch metric with data granularity of 1 second. If any issues occur, the developer wants to be noti\u0000ed within 30 seconds by Amazon Simple Noti\u0000cation Service (Amazon SNS). What should the developer do to meet this requirement?",
    "options": [
      "A. Con\u0000gure a high-resolution CloudWatch alarm.",
      "B. Set up a custom CloudWatch dashboard.",
      "C. Use Amazon CloudWatch Logs Insights.",
      "D. Change to a default CloudWatch metric."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q322",
    "text": "A current architecture uses many Lambda functions invoking one another as a large state machine. The coordination of this state machine is legacy custom code that breaks easily. Which AWS Service can help refactor and manage the state machine?",
    "options": [
      "A. AWS Data Pipeline",
      "B. AWS SNS with AWS SOS",
      "C. Amazon Elastic MapReduce",
      "D. AWS Step Functions"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q323",
    "text": "A developer is running an application on an Amazon EC2 instance. When the application tries to read an Amazon S3 bucket, the application fails. The developer notices that the associated IAM role is missing the S3 read permission. The developer needs to give the application the ability to read the S3 bucket. Which solution will meet this requirement with the LEAST application disruption?",
    "options": [
      "A. Add the permission to the role. Terminate the existing EC2 instance. Launch a new EC2 instance.",
      "B. Add the permission to the role so that the change will take effect automatically.",
      "C. Add the permission to the role. Hibernate and restart the existing EC2 instance.",
      "D. Add the permission to the S3 bucket. Restart the EC2 instance."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q324",
    "text": "A company needs to develop a proof of concept for a web service application. The application will show the weather forecast for one of the company's o\u0000ce locations. The application will provide a REST endpoint that clients can call. Where possible, the application should use caching features provided by AWS to limit the number of requests to the backend service. The application backend will receive a small amount of tra\u0000c only during testing. Which approach should the developer take to provide the REST endpoint MOST cost-effectively?",
    "options": [
      "A. Create a container image. Deploy the container image by using Amazon Elastic Kubernetes Service (Amazon EKS). Expose the functionality",
      "B. Create an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM). Expose the Lambda functionality by using",
      "C. Create a container image. Deploy the container image by using Amazon Elastic Container Service (Amazon ECS). Expose the functionality",
      "D. Create a microservices application in a preferred programming language. Deploy the application to AWS Elastic Beanstalk. Expose the AWS"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q325",
    "text": "A company's developer is creating an AWS Lambda function that will read data from an Amazon RDS database. The company's security policies require the database credentials to be encrypted at rest by AWS Key Management Service (AWS KMS) keys. The database credentials must also be automatically rotated. The Lambda function needs to be able to read the database credentials securely. Which solution will meet these requirements?",
    "options": [
      "A. Create an AWS Secrets Manager secret for the database credentials encrypted with a KMS key. Modify the Lambda function to retrieve the",
      "B. Create an Amazon S3 bucket for the database credentials. Encrypt the database credentials with server-side encryption with KMS keys",
      "C. Create SecureString parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the",
      "D. Create String parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q326",
    "text": "A developer is creating an application that will store personal health information (PHI). The PHI needs to be encrypted at all times. An encrypted Amazon RDS for MySQL DB instance is storing the data. The developer wants to increase the performance of the application by caching frequently accessed data while adding the ability to sort or rank the cached datasets. Which solution will meet these requirements?",
    "options": [
      "A. Create an Amazon ElastiCache for Redis instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the",
      "B. Create an Amazon ElastiCache for Memcached instance. Enable encryption of data in transit and at rest. Store frequently accessed data in",
      "C. Create an Amazon RDS for MySQL read replica. Connect to the read replica by using SSL. Con\u0000gure the read replica to store frequently",
      "D. Create an Amazon DynamoDB table and a DynamoDB Accelerator (DAX) cluster for the table. Store frequently accessed data in the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q327",
    "text": "A company manages a \u0000nancial services application that stores a large volume of data in an Amazon DynamoDB table. A developer needs to improve the performance of the DynamoDB read queries without increasing the cost. Which solution meets these requirements?",
    "options": [
      "A. Use parallel scans.",
      "B. Add a local secondary index (LSI).",
      "C. Create a DynamoDB Accelerator (DAX) cluster.",
      "D. Query with the ProjectionExpression parameter."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q328",
    "text": "A development team is working on a mobile app that allows users to upload pictures to Amazon S3. The team expects the app will be used by hundreds of thousands of users during a single event simultaneously. Once the pictures are uploaded, the backend service will scan and parse the pictures for inappropriate content. Which approach is the MOST resilient way to achieve this goal, which also smooths out temporary volume spikes for the backend service?",
    "options": [
      "A. Develop an AWS Lambda function to check the upload folder in the S3 bucket. If new uploaded pictures are detected, the Lambda function",
      "B. Once a picture is uploaded to Amazon S3, publish the event to an Amazon SQS queue. Use the queue as an event source to trigger an AWS",
      "C. When the user uploads a picture. invoke an API hosted in Amazon API Gateway. The API will invoke an AWS Lambda function to scan and",
      "D. Create a state machine in AWS Step Functions to check the upload folder in the S3 bucket. If a new picture is detected, invoke an AWS"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q329",
    "text": "A developer is writing an application that will run on Amazon EC2 instances in an Auto Scaling group. The developer wants to externalize the session state to support the application. Which AWS services or resources can the developer use to meet these requirements? (Choose two.)",
    "options": [
      "A. Amazon DynamoDB",
      "B. Amazon Cognito",
      "C. Amazon ElastiCache",
      "D. Application Load Balancer",
      "E. Amazon Simple Queue Service (Amazon SQS)"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q330",
    "text": "A developer registered an AWS Lambda function as a target for an Application Load Balancer (ALB) using a CLI command. However, the Lambda function is not being invoked when the client sends requests through the ALB. Why is the Lambda function not being invoked?",
    "options": [
      "A. A Lambda function cannot be registered as a target for an ALB.",
      "B. A Lambda function can be registered with an ALB using AWS Management Console only.",
      "C. The permissions to invoke the Lambda function are missing.",
      "D. Cross-zone is not enabled on the ALB."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q331",
    "text": "A company is using AWS CodePipeline to deliver one of its applications. The delivery pipeline is triggered by changes to the main branch of an AWS CodeCommit repository and uses AWS CodeBuild to implement the test and build stages of the process and AWS CodeDeploy to deploy the application. The pipeline has been operating successfully for several months and there have been no modi\u0000cations. Following a recent change to the application's source code, AWS CodeDeploy has not deployed the updated application as expected. What are the possible causes? (Choose two.)",
    "options": [
      "A. The change was not made in the main branch of the AWS CodeCommit repository.",
      "B. One of the earlier stages in the pipeline failed and the pipeline has terminated.",
      "C. One of the Amazon EC2 instances in the company's AWS CodePipeline cluster is inactive.",
      "D. The AWS CodePipeline is incorrectly con\u0000gured and is not invoking AWS CodeDeploy.",
      "E. AWS CodePipeline does not have permissions to access AWS CodeCommit."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q332",
    "text": "A developer created a web API that receives requests by using an internet-facing Application Load Balancer (ALB) with an HTTPS listener. The developer con\u0000gures an Amazon Cognito user pool and wants to ensure that every request to the API is authenticated through Amazon Cognito. What should the developer do to meet this requirement?",
    "options": [
      "A. Add a listener rule to the listener to return a \u0000xed response if the Authorization header is missing. Set the \u0000xed response to 401",
      "B. Create an authentication action for the listener rules of the ALSet the rule action type to authenticate-cognito. Set the",
      "C. Create an Amazon API Gateway API. Con\u0000gure all API methods to be forwarded to the ALB endpoint. Create an authorizer of the",
      "D. Create a new target group that includes an AWS Lambda function target that validates the Authorization header by using Amazon Cognito."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q333",
    "text": "A developer needs to build an AWS CloudFormation template that self-populates the AWS Region variable that deploys the CloudFormation template. What is the MOST operationally e\u0000cient way to determine the Region in which the template is being deployed?",
    "options": [
      "A. Use the AWS::Region pseudo parameter.",
      "B. Require the Region as a CloudFormation parameter.",
      "C. Find the Region from the AWS:StackId pseudo parameter by using the Fn::Split intrinsic function.",
      "D. Dynamically import the Region by referencing the relevant parameter in AWS Systems Manager Parameter Store."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q334",
    "text": "A company has a web application that is deployed on AWS. The application uses an Amazon API Gateway API and an AWS Lambda function as its backend. The application recently demonstrated unexpected behavior. A developer examines the Lambda function code, \u0000nds an error, and modi\u0000es the code to resolve the problem. Before deploying the change to production, the developer needs to run tests to validate that the application operates properly. The application has only a production environment available. The developer must create a new development environment to test the code changes. The developer must also prevent other developers from overwriting these changes during the test cycle. Which combination of steps will meet these requirements with the LEAST development effort? (Choose two.)",
    "options": [
      "A. Create a new resource in the current stage. Create a new method with Lambda proxy integration. Select the Lambda function. Add the hot\u0000x",
      "B. Update the Lambda function in the API Gateway API integration request to use the hot\u0000x alias. Deploy the API Gateway API to a new stage",
      "C. Modify the Lambda function by \u0000xing the code. Test the Lambda function. Create the alias hot\u0000x. Point the alias to the $LATEST version.",
      "D. Modify the Lambda function by \u0000xing the code. Test the Lambda function. When the Lambda function is working as expected, publish the",
      "E. Create a new API Gateway API for the development environment. Add a resource and method with Lambda integration. Choose the Lambda"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q335",
    "text": "A company that manages movie reviews wants to make its movie review data available to its customers by calling a set of REST web service endpoints. The company will develop the retrieval functionality as AWS Lambda functions and will expose the functionality to customers as an Amazon API Gateway REST API. The company needs to ensure that no consumer exceeds 100 requests a day to the API during the initial deployment. The company decides to use API Gateway API keys to restrict access. The company creates and issues API keys for each customer. What should the company do next to meet these requirements with the LEAST administrative effort?",
    "options": [
      "A. Create a usage plan that applies throttling at 100 requests a day. Associate the usage plan with the API keys of all customers.",
      "B. Create an Amazon DynamoDB table to track all the requests that use a particular API key. For each request to the API, count the number of",
      "C. Create a usage plan that applies a quota of 100 requests a day. Associate the usage plan with the API keys of all customers.",
      "D. Create an Amazon Aurora table to track all the requests that use a particular API key. For each request to the API, count the number of"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q336",
    "text": "A distributed application includes an AWS Lambda function that runs successfully in the DEV environment with 128 MB of memory assigned. The same function is failing in the TEST environment. The developer is monitoring the application using AWS X-Ray, but the Lambda function cannot be seen on the X-Ray service graph. The Lambda execution role has AWS X-Ray permissions. What is the MOST LIKELY cause for AWS X-Ray not showing any data for the Lambda function?",
    "options": [
      "A. The AWS SDK needs to be included in the AWS Lambda deployment package.",
      "B. VPC Flow Logs are not enabled for the application VPC.",
      "C. Active tracing needs to be enabled for the Lambda function.",
      "D. The memory needs to be increased to 2 GB for the TEST environments."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q337",
    "text": "A developer wants to process personally identi\u0000able information by using a public HTTP API that is hosted on Amazon EC2. The developer also wants to protect the data as securely as possible in transit. Which combination of steps will meet these requirements? (Choose two.)",
    "options": [
      "A. Use the Amazon CloudFront \u0000eld-level encryption feature for the incoming data.",
      "B. Apply the principle of least privilege for access to the AWS Key Management Service (AWS KMS) service page.",
      "C. Frequently rotate any API access keys for the HTTP API.",
      "D. Turn on multi-factor authentication (MFA) for all IAM users.",
      "E. Implement TLS for the HTTP API."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q338",
    "text": "A developer is modifying an existing AWS Lambda function. While checking the code, the developer notices hardcoded parameter values for an Amazon RDS for SQL Server user name, password, database, host, and port. There also are hardcoded parameter values for an Amazon DynamoDB table, an Amazon S3 bucket, and an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. The developer wants to securely store the parameter values outside the code in an encrypted format and wants to turn on rotation for the credentials. The developer also wants to be able to reuse the parameter values from other applications and to update the parameter values without modifying code. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation.",
      "B. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation.",
      "C. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Create",
      "D. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Store"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q339",
    "text": "A company is developing a serverless ecommerce web application. The application needs to make coordinated, all-or-nothing changes to multiple items in the company's inventory table in Amazon DynamoDB. Which solution will meet these requirements?",
    "options": [
      "A. Enable transactions for the DynamoDB table. Use the BatchWriteItem operation to update the items.",
      "B. Use the TransactWriteItems operation to group the changes. Update the items in the table.",
      "C. Set up a FIFO queue using Amazon SOS. Group the changes in the queue. Update the table based on the grouped changes.",
      "D. Create a transaction table in an Amazon Aurora DB cluster to manage the transactions. Write a backend process to sync the Aurora DB"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q340",
    "text": "A developer has created a Node.js web application on a local development machine. The developer wants to use AWS technology to host the website. The developer needs a solution that requires the least possible operational overhead and no code changes. Which AWS service should the developer use to meet these requirements?",
    "options": [
      "A. AWS Elastic Beanstalk",
      "B. Amazon EC2",
      "C. AWS Lambda",
      "D. Amazon Elastic Kubernetes Service (Amazon EKS)"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q341",
    "text": "An AWS Lambda function requires read access to an Amazon S3 bucket and requires read/write access to an Amazon DynamoDB table. The correct IAM policy already exists. What is the MOST secure way to grant the Lambda function access to the S3 bucket and the DynamoDB table?",
    "options": [
      "A. Attach the existing IAM policy to the Lambda function.",
      "B. Create an IAM role for the Lambda function. Attach the existing IAM policy to the role. Attach the role to the Lambda function.",
      "C. Create an IAM user with programmatic access. Attach the existing IAM policy to the user. Add the user access key ID and secret access key",
      "D. Add the AWS account root user access key ID and secret access key as encrypted environment variables in the Lambda function."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q342",
    "text": "A developer has an Amazon DynamoDB table that must be in provisioned mode to comply with user requirements. The application needs to support the following: • Average item size: 10 KB • Item reads each second: 10 strongly consistent • Item writes each second: 2 transactional Which read and write capacity cost-effectively meets these requirements?",
    "options": [
      "A. Read 10; write 2",
      "B. Read 30; write 40",
      "C. Use on-demand scaling",
      "D. Read 300; write 400"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q343",
    "text": "A developer is creating an AWS CloudFormation template to deploy Amazon EC2 instances across multiple AWS accounts. The developer must choose the EC2 instances from a list of approved instance types. How can the developer incorporate the list of approved instance types in the CloudFormation template?",
    "options": [
      "A. Create a separate CloudFormation template for each EC2 instance type in the list.",
      "B. In the Resources section of the CloudFormation template, create resources for each EC2 instance type in the list.",
      "C. In the CloudFormation template, create a separate parameter for each EC2 instance type in the list.",
      "D. In the CloudFormation template, create a parameter with the list of EC2 instance types as Allowed Values."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q344",
    "text": "An ecommerce company is using an AWS Lambda function behind Amazon API Gateway as its application tier. To process orders during checkout, the application calls a POST API from the frontend. The POST API invokes the Lambda function asynchronously. In rare situations, the application has not processed orders. The Lambda application logs show no errors or failures. What should a developer do to solve this problem?",
    "options": [
      "A. Inspect the frontend logs for API failures. Call the POST API manually by using the requests from the log \u0000le.",
      "B. Create and inspect the Lambda dead-letter queue. Troubleshoot the failed functions. Reprocess the events.",
      "C. Inspect the Lambda logs in Amazon CloudWatch for possible errors. Fix the errors.",
      "D. Make sure that caching is disabled for the POST API in API Gateway."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q345",
    "text": "A developer is building a three-tier application with an Application Load Balancer (ALB), Amazon EC2 instances, and Amazon RDS. There is an alias record in Amazon Route 53 that points to the ALB. When the developer tries to access the ALB from a laptop, the request times out. Which logs should the developer investigate to verify that the request is reaching the AWS network?",
    "options": [
      "A. VPC Flow Logs",
      "B. Amazon Route 53 logs",
      "C. AWS Systems Manager Agent logs",
      "D. Amazon CloudWatch agent logs"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q346",
    "text": "A developer is designing a serverless application for a game in which users register and log in through a web browser. The application makes requests on behalf of users to a set of AWS Lambda functions that run behind an Amazon API Gateway HTTP API. The developer needs to implement a solution to register and log in users on the application's sign-in page. The solution must minimize operational overhead and must minimize ongoing management of user identities. Which solution will meet these requirements?",
    "options": [
      "A. Create Amazon Cognito user pools for external social identity providers. Con\u0000gure IAM roles for the identity pools.",
      "B. Program the sign-in page to create users' IAM groups with the IAM roles attached to the groups.",
      "C. Create an Amazon RDS for SQL Server DB instance to store the users and manage the permissions to the background resources in AWS.",
      "D. Con\u0000gure the sign-in page to register and store the users and their passwords in an Amazon DynamoDB table with an attached IAM policy."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q347",
    "text": "A developer is creating an AWS Lambda function in VPC mode. An Amazon S3 event will invoke the Lambda function when an object is uploaded into an S3 bucket. The Lambda function will process the object and produce some analytic results that will be recorded into a \u0000le. Each processed object will also generate a log entry that will be recorded into a \u0000le. Other Lambda functions, AWS services, and on-premises resources must have access to the result \u0000les and log \u0000le. Each log entry must also be appended to the same shared log \u0000le. The developer needs a solution that can share \u0000les and append results into an existing \u0000le. Which solution should the developer use to meet these requirements?",
    "options": [
      "A. Create an Amazon Elastic File System (Amazon EFS) \u0000le system. Mount the EFS \u0000le system in Lambda. Store the result \u0000les and log \u0000le in",
      "B. Create an Amazon Elastic Block Store (Amazon EBS) Multi-Attach enabled volume. Attach the EBS volume to all Lambda functions. Update",
      "C. Create a reference to the /tmp local directory. Store the result \u0000les and log \u0000le by using the directory reference. Append the log entry to the",
      "D. Create a reference to the /opt storage directory. Store the result \u0000les and log \u0000le by using the directory reference. Append the log entry to"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q348",
    "text": "A developer is creating a new batch application that will run on an Amazon EC2 instance. The application requires read access to an Amazon S3 bucket. The developer needs to follow security best practices to grant S3 read access to the application. Which solution meets these requirements?",
    "options": [
      "A. Add the permissions to an IAM policy. Attach the policy to a role. Attach the role to the EC2 instance pro\u0000le.",
      "B. Add the permissions inline to an IAM group. Attach the group to the EC2 instance pro\u0000le.",
      "C. Add the permissions to an IAM policy. Attach the policy to a user. Attach the user to the EC2 instance pro\u0000le.",
      "D. Add the permissions to an IAM policy. Use IAM web identity federation to access the S3 bucket with the policy."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q349",
    "text": "A developer is creating a serverless orchestrator that performs a series of steps to processes incoming IoT data. The orchestrator transforms the data, performs a series of calculations, and stores the results in Amazon DynamoDB. The entire process is completed in less than a minute. The orchestrator must process tens of thousands of transactions each second. The orchestrator must not miss a transaction and must process each transaction at least once. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Use Amazon Simple Noti\u0000cation Service (Amazon SNS) to process the data through an HTTP or HTTPS endpoint.",
      "B. Use AWS Step Functions to process the data as Standard Work\u0000ows.",
      "C. Use AWS Step Functions to process the data as Synchronous Express Work\u0000ows.",
      "D. Use AWS Step Functions to process the data as Asynchronous Express Work\u0000ows."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q350",
    "text": "A developer wants to reduce risk when deploying a new version of an existing AWS Lambda function. To test the Lambda function, the developer needs to split the tra\u0000c between the existing version and the new version of the Lambda function. Which solution will meet these requirements?",
    "options": [
      "A. Con\u0000gure a weighted routing policy in Amazon Route 53. Associate the versions of the Lambda function with the weighted routing policy.",
      "B. Create a function alias. Con\u0000gure the alias to split the tra\u0000c between the two versions of the Lambda function.",
      "C. Create an Application Load Balancer (ALB) that uses the Lambda function as a target. Con\u0000gure the ALB to split the tra\u0000c between the two",
      "D. Create the new version of the Lambda function as a Lambda layer on the existing version. Con\u0000gure the function to split the tra\u0000c between"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q351",
    "text": "A company has hundreds of AWS Lambda functions that the company's QA team needs to test by using the Lambda function URLs. A developer needs to con\u0000gure the authentication of the Lambda functions to allow access so that the QA IAM group can invoke the Lambda functions by using the public URLs. Which solution will meet these requirements?",
    "options": [
      "A. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to",
      "B. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to create",
      "C. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to",
      "D. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to loop"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q352",
    "text": "A developer has an application that pushes \u0000les from an on-premises local server to an Amazon S3 bucket. The application uses an AWS access key and a secret key that are stored on the server for authentication. The application calls AWS Security Token Service (AWS STS) to assume a role with access to perform the S3 PUT operation to upload the \u0000le. The developer is migrating the server to an Amazon EC2 instance. The EC2 instance is con\u0000gured with an IAM instance pro\u0000le in the same AWS account that owns the S3 bucket. What is the MOST secure solution for the developer to use to migrate the automation code?",
    "options": [
      "A. Remove the code that calls the STS AssumeRole operation. Use the same access key and secret key from the server to access the S3",
      "B. Remove the access key and the secret key. Use the STS AssumeRole operation to add permissions to access the S3 bucket.",
      "C. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Use an IAM instance pro\u0000le r ole that grants",
      "D. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Create a new access key and secret key. Use"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q353",
    "text": "A developer is writing a new web application that will be deployed and managed with AWS Elastic Beanstalk. The application will include an Amazon RDS DB instance. What steps should the developer take to access the RDS DB instance from the code? (Choose two.)",
    "options": [
      "A. Modify the endpoint name using either the AWS Management Console or AWS CLI.",
      "B. Upload the driver to Amazon S3 and reference it in the code.",
      "C. Download the appropriate database driver and include it with the application.",
      "D. Construct a connection string using the Elastic Beanstalk environment variables.",
      "E. Create a CNAME record referencing database instances ALIAS."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q354",
    "text": "A developer is using AWS Amplify Hosting to build and deploy an application. The developer is receiving an increased number of bug reports from users. The developer wants to add end-to-end testing to the application to eliminate as many bugs as possible before the bugs roach production. Which solution should the developer implement to meet these requirements?",
    "options": [
      "A. Run the amplify add test command in the Amplify CLI.",
      "B. Create unit tests in the application. Deploy the unit tests by using the amplify push command in the Amplify CLI.",
      "C. Add a test phase to the amplify.yml build settings for the application.",
      "D. Add a test phase to the aws-exports.js \u0000le for the application."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q355",
    "text": "A developer is building a serverless application that uses the AWS Cloud Development Kit (AWS CDK) to deploy application infrastructure. The developer is creating an AWS Lambda function that queries an HTTP API. The API needs all requests to include an access token for authentication and authorization. The developer needs to store the access token securely and to give the Lambda function access to the token. Which solution will meet these requirements?",
    "options": [
      "A. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to capture the",
      "B. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to create an AWS",
      "C. Update the AWS CDK stack to create an AWS Systems Manager Parameter Store String parameter. Update the Lambda function's execution",
      "D. Update the AWS CDK stack to create an AWS Secrets Manager secret. Con\u0000gure the permissions for the secret and the Lambda function to"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q356",
    "text": "A developer is working on an application that is deployed on an Amazon EC2 instance. The application needs to transfer a \u0000le to an Amazon S3 bucket. What should the developer do to authenticate the application's access to the S3 bucket in the MOST secure way?",
    "options": [
      "A. Create an access key for an IAM user. Store the access key in the application's environment variables.",
      "B. Create an IAM role. Create an access key for the role. Store the access key in the application's environment variables.",
      "C. Associate an IAM role with the EC2 instance. Use the instance metadata service to retrieve the credentials.",
      "D. Con\u0000gure a bucket policy for the S3 bucket. Allow access from the EC2 instance ID in the bucket policy."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q357",
    "text": "A company is running its application on the most recent generation of hare metal Amazon EC2 instances. A developer is adding a low-latency computation feature to the application. The feature depends on highly sensitive personally identi\u0000able information (PII). When computation occurs on unencrypted data, the feature needs to run in an isolated environment that provides CPU and memory isolation. Which solution will meet these requirements?",
    "options": [
      "A. Build and deploy the feature on the original EC2 instance store.",
      "B. Add the now feature in the original application. Deploy the application on a Dedicated Host.",
      "C. Package the now feature and deploy the now feature on AWS Lambda. Use AWS Key Management Service (AWS KMS) to encrypt and",
      "D. Build and deploy the now feature as part of the original application. Run the feature on AWS Nitro Enclaves."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q358",
    "text": "A developer has created an AWS Lambda function that interacts with an Amazon Aurora MySQL database. The Lambda function makes queries to the database. After a performance test for the Lambda function, the database starts to show an error for too many connections. Which solution will solve this problem with the LEAST operational effort?",
    "options": [
      "A. Create a road replica for the database. Query the replica database instead of the primary database.",
      "B. Migrate the data to an Amazon DynamoDB database.",
      "C. Sot a limit to the Lambda function's concurrency.",
      "D. Create a proxy in Amazon RDS Proxy. Query the proxy instead of the database."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q359",
    "text": "A calendar application gives users the ability to schedule and share events. The application stores its data in several Amazon DynamoDB tables. The Events table stores all events for the application. The Events table has a primary key in which the partition key is the date of the event and the sort key is the user’s unique ID number. A developer is working on a dashboard that will show each user all the details for all their events scheduled on a single day. The developer needs to get the data from the Events table. What should the developer do to get the relevant data MOST e\u0000ciently?",
    "options": [
      "A. Perform a scan on the Events table by using the partition key and the sort key as \u0000lter expressions.",
      "B. Perform a query on the Events table by using the partition key and the sort key as \u0000lter expressions.",
      "C. Perform a scan on the Events table by using the partition key and the sort key in a key condition expression.",
      "D. Perform a query on the Events table by using the partition key and the sort key in a key condition expression."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q360",
    "text": "A developer is integrating Amazon ElastiCache in an application. The cache will store data from a database. The cached data must populate real- time dashboards. Which caching strategy will meet these requirements?",
    "options": [
      "A. A read-through cache",
      "B. A write-behind cache",
      "C. A lazy-loading cache",
      "D. A write-through cache"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q361",
    "text": "A social media application uses the AWS SDK for JavaScript on the frontend to get user credentials from AWS Security Token Service (AWS STS). The application stores its assets in an Amazon S3 bucket. The application serves its content by using an Amazon CloudFront distribution with the origin sot to the S3 bucket. The credentials for the role that the application assumes to make the SDK calls are stored in plaintext in a JSON \u0000le within the application code. The developer needs to implement a solution that will allow the application to get user credentials without having any credentials hardcoded in the application code. Which solution will meet these requirements?",
    "options": [
      "A. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to",
      "B. Add a CloudFront function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to",
      "C. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON \u0000le into the",
      "D. Add a CloudFront function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON \u0000le into the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q362",
    "text": "A company has an ecommerce application. To track product reviews, the company's development team uses an Amazon DynamoDB table. Every record includes the following: • A Review ID, a 16-digit universally unique identi\u0000er (UUID) • A Product ID and User ID, 16-digit UUIDs that reference other tables • A Product Rating on a scale of 1-5 • An optional comment from the user The table partition key is the Review ID. The most performed query against the table is to \u0000nd the 10 reviews with the highest rating for a given product. Which index will provide the FASTEST response for this query?",
    "options": [
      "A. A global secondary index (GSI) with Product ID as the partition key and Product Rating as the sort key",
      "B. A global secondary index (GSI) with Product ID as the partition key and Review ID as the sort key",
      "C. A local secondary index (LSI) with Product ID as the partition key and Product Rating as the sort key",
      "D. A local secondary index (LSI) with Review ID as the partition key and Product ID as the sort key"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q363",
    "text": "A media company wants to test its web application more frequently. The company deploys the application by using a separate AWS CloudFormation stack for each environment. The same CloudFormation template is deployed to each stack as the application progresses through the development lifecycle. A developer needs to build an automated alert for the quality assurance (QA) team. The developer wants the alert to occur for new deployments in the \u0000nal pre-production environment. Which solution will moot these requirements?",
    "options": [
      "A. Create an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic. Add a subscription to notify the QA team. Update the CloudFormation",
      "B. Create an AWS Lambda function that noti\u0000es the QA team. Create an Amazon EventBridge rule to invoke the Lambda function on the",
      "C. Create an Amazon CloudWatch alarm that monitors the metrics from CloudFormation. Filter the metrics on the stack name and the stack",
      "D. Create an AWS Lambda function that noti\u0000es the QA team. Con\u0000gure the event source mapping to receive events from CloudFormation."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q364",
    "text": "A developer is preparing a containerized application for deployment to AWS Lambda. The developer wants to build and optimize the container images to reduce duplicate work and improve build, deploy, and update times. Which combination of steps should the developer take to meet these requirements? (Choose two.)",
    "options": [
      "A. Use an AWS provided base image.",
      "B. Use the smallest compatible third-party base image.",
      "C. Build frequently changing layers in the imago \u0000rst, followed by stable layers.",
      "D. Store images for functions with large layers in the same Amazon Elastic Container Registry (Amazon ECR) repository.",
      "E. Maximize the number of layers in the built image."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q365",
    "text": "A developer is using Amazon CodeGuru Pro\u0000ler . The developer has con\u0000gured the application with the CodeGuru Pro\u0000ler agent. However, when the application runs, the developer notices that a signi\u0000cant number of events are missing from the generated pro\u0000le. How can the developer reduce the number of missed events in the pro\u0000le?",
    "options": [
      "A. Set a lower value for the SamplingIntervalInMilliseconds property.",
      "B. Set a lower value for the ReportingIntervalInMilliseconds property.",
      "C. Set a higher value for the SamplingIntervalInMilliseconds property.",
      "D. Set a higher value for the ReportingIntervalInMilliseconds property."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q366",
    "text": "A development team set up a pipeline to launch a test environment. The developers want to automate tests for their application. The team created an AWS CodePipeline stage to deploy the application to a test environment in batches using AWS Elastic Beanstalk. A later CodePipeline stage contains a single action that uses AWS CodeBuild to run numerous automated Selenium-based tests on the deployed application. The team must speed up the pipeline without removing any of the individual tests. Which set of actions will MOST effectively speed up application deployment and testing?",
    "options": [
      "A. Set up an all-at-once deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions.",
      "B. Set up a rolling update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.",
      "C. Set up an immutable update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.",
      "D. Set up a tra\u0000c-splitting deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q367",
    "text": "A developer migrated a legacy application to an AWS Lambda function. The function uses a third-party service to pull data with a series of API calls at the end of each month. The function then processes the data to generate the monthly reports. The function has been working with no issues so far. The third-party service recently issued a restriction to allow a \u0000xed number of API calls each minute and each day. If the API calls exceed the limit for each minute or each day, then the service will produce errors. The API also provides the minute limit and daily limit in the response header. This restriction might extend the overall process to multiple days because the process is consuming more API calls than the available limit. What is the MOST operationally e\u0000cient way to refactor the serverless application to accommodate this change?",
    "options": [
      "A. Use an AWS Step Functions state machine to monitor API failures. Use the Wait state to delay calling the Lambda function.",
      "B. Use an Amazon Simple Queue Service (Amazon SQS) queue to hold the API calls. Con\u0000gure the Lambda function to poll the queue within",
      "C. Use an Amazon CloudWatch Logs metric to count the number of API calls. Con\u0000gure an Amazon CloudWatch alarm that stops the currently",
      "D. Use Amazon Kinesis Data Firehose to batch the API calls and deliver them to an Amazon S3 bucket with an event noti\u0000cation to invoke the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q368",
    "text": "A developer is creating an Amazon DynamoDB table by using the AWS CLI. The DynamoDB table must use server-side encryption with an AWS owned encryption key. How should the developer create the DynamoDB table to meet these requirements?",
    "options": [
      "A. Create an AWS Key Management Service (AWS KMS) customer managed key. Provide the key’s Amazon Resource Name (ARN) in the",
      "B. Create an AWS Key Management Service (AWS KMS) AWS managed key. Provide the key’s Amazon Resource Name (ARN) in the",
      "C. Create an AWS owned key. Provide the key’s Amazon Resource Name (ARN) in the KMSMasterKeyId parameter during creation of the",
      "D. Create the DynamoDB table with the default encryption options."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q369",
    "text": "A company has a three-tier application that is deployed in Amazon Elastic Container Service (Amazon ECS). The application is using an Amazon RDS for MySQL DB instance. The application performs more database reads than writes. During times of peak usage, the application’s performance degrades. When this performance degradation occurs, the DB instance’s ReadLatency metric in Amazon CloudWatch increases suddenly. How should a developer modify the application to improve performance?",
    "options": [
      "A. Use Amazon ElastiCache to cache query results.",
      "B. Scale the ECS cluster to contain more ECS instances.",
      "C. Add read capacity units (RCUs) to the DB instance.",
      "D. Modify the ECS task de\u0000nition to increase the task memory."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q370",
    "text": "A company is running an application on AWS Elastic Beanstalk in a single-instance environment. The company’s deployments must avoid any downtime. Which deployment option will meet these requirements?",
    "options": [
      "A. All at once",
      "B. Rolling",
      "C. Rolling with additional batch",
      "D. Immutable"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q371",
    "text": "A developer wants to debug an application by searching and \u0000ltering log data. The application logs are stored in Amazon CloudWatch Logs. The developer creates a new metric \u0000lter to count exceptions in the application logs. However, no results are returned from the logs. What is the reason that no \u0000ltered results are being returned?",
    "options": [
      "A. A setup of the Amazon CloudWatch interface VPC endpoint is required for \u0000ltering the CloudWatch Logs in the VPC.",
      "B. CloudWatch Logs only publishes metric data for events that happen after the \u0000lter is created.",
      "C. The log group for CloudWatch Logs should be \u0000rst streamed to Amazon OpenSearch Service before metric \u0000ltering returns the results.",
      "D. Metric data points for logs groups can be \u0000ltered only after they are exported to an Amazon S3 bucket."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q372",
    "text": "A company is using Amazon Cognito user pools for sign-up and login functionality for a web application. The company is using Amazon RDS for the application’s data persistence and is using Amazon API Gateway and AWS Lambda for the application’s API functionality. Users must provide their \u0000rst name, last name, email address, and phone number to sign up. All API endpoints have a Cognito user pool authorizer to guard against unauthenticated requests. A developer wants to show a personalized welcome screen to users after they log in. The welcome screen needs to show the user’s \u0000rst name and the user’s previous login date. According to company policy, developers who work on the web application cannot store any personally identi\u0000able information in RDS instances. Which solution should the developer implement to meet these requirements?",
    "options": [
      "A. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the identity token in the",
      "B. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the access token in the",
      "C. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the identity token in the",
      "D. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the access token in the"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q373",
    "text": "A company has a web application that contains an Amazon API Gateway REST API. A developer has created an AWS CloudFormation template for the initial deployment of the application. The developer has deployed the application successfully as part of an AWS CodePipeline continuous integration and continuous delivery (CI/CD) process. All resources and methods are available through the deployed stage endpoint. The CloudFormation template contains the following resource types: • AWS::ApiGateway::RestApi • AWS::ApiGateway::Resource • AWS::ApiGateway::Method • AWS::ApiGateway::Stage • AWS::ApiGateway::Deployment The developer adds a new resource to the REST API with additional methods and redeploys the template. CloudFormation reports that the deployment is successful and that the stack is in the UPDATE_COMPLETE state. However, calls to all new methods are returning 404 (Not Found) errors. What should the developer do to make the new methods available?",
    "options": [
      "A. Specify the disable-rollback option during the update-stack operation.",
      "B. Unset the CloudFormation stack failure options.",
      "C. Add an AWS CodeBuild stage to CodePipeline to run the aws apigateway create-deployment AWS CLI command.",
      "D. Add an action to CodePipeline to run the aws cloudfront create-invalidation AWS CLI command."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q374",
    "text": "A company is developing a publicly accessible single-page application. The application makes calls from a client web browser to backend services to provide a user interface to customers. The application depends on a third-party web service exposed as an HTTP API. The web client must provide an API key to the third-party web service by using the HTTP header as part of the HTTP request. The company’s API key must not be exposed to the users of the web application. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. Use Amazon API Gateway to create a private REST API. Create an HTTP integration to integrate with the third-party HTTP API. Add the",
      "B. Use Amazon API Gateway to create a private REST API. Create an AWS Lambda proxy integration. Make calls to the third-party HTTP API",
      "C. Use Amazon API Gateway to create a REST API. Create an HTTP integration to integrate with the third-party HTTP API. Add the company’s",
      "D. Use Amazon API Gateway to create a REST API. Create an AWS Lambda proxy integration. Make calls to the third-party HTTP API from the"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q375",
    "text": "A company is developing a publicly accessible single-page application. The application makes calls from a client web browser to backend services to provide a user interface to customers. The application depends on a third-party web service exposed as an HTTP API. The web client must provide an API key to the third-party web service by using the HTTP header as part of the HTTP request. The company’s API key must not be exposed to the users of the web application. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "A. For each integration, con\u0000gure a mapping template for Content-Type text/json that transforms the incoming request by using Velocity",
      "B. For each integration, con\u0000gure a mapping template for Content-Type text/json that transforms the incoming request by using Embedded",
      "C. For each integration, con\u0000gure a mapping template for Content-Type application/json that transforms the incoming request by using",
      "D. For each integration, con\u0000gure a mapping template for Content-Type application/json that transforms the incoming request by using"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q376",
    "text": "A developer has deployed a serverless application to AWS Lambda. The developer needs to encrypt the Lambda function's environment variables by using an AWS Key Management Service (AWS KMS) customer managed key. When the developer attempts to con\u0000gure the KMS key for the environment variables, an error occurs. The error message indicates that access to the KMS key was denied. What should the developer do to resolve this error?",
    "options": [
      "A. Set an IAM policy that allows the developer to have appropriate access to the KMS key.",
      "B. Set an IAM policy that allows the Lambda function to have appropriate access to the KMS key.",
      "C. Apply the AWSLambdaBasicExecutionRole managed policy to the Lambda function.",
      "D. Create a trust policy for the Lambda function. In the trust policy, specify kms.amazonaws.com as a service principal."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q377",
    "text": "A company is creating a continuous integration and continuous delivery (CI/CD) process by using AWS CodePipeline for its application on AWS. The CI/CD process will pull code from an AWS CodeCommit repository, create the application infrastructure by using AWS CloudFormation, deploy the frontend code to an Amazon S3 bucket that is con\u0000gured for static website hosting, and deploy the application backend on an Amazon Elastic Container Service (Amazon ECS) cluster. A developer needs to create a new CodePipeline stage that creates the application infrastructure. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. Create a new action with AWS Lambda as the action provider. Create a Lambda function that makes an AWS SDK API call to create the",
      "B. Create a new action with CloudFormation as the action provider. Set the action mode to CREATE_UPDATE. Target the CloudFormation stack",
      "C. Create a new action with Jenkins as the action provider. Create and con\u0000gure a Jenkins job to make an API call by using the AWS CLI to",
      "D. Create a new action with AWS CodeBuild as the action provider. Con\u0000gure the buildspec to make an API call by using the AWS CLI to create"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q378",
    "text": "A developer is setting up the deployment of application stacks to new test environments by using the AWS Cloud Development Kit (AWS CDK). The application contains the code for several AWS Lambda functions that will be deployed as assets. Each Lambda function is de\u0000ned by using the AWS CDK Lambda construct library. The developer has already successfully deployed the application stacks to the alpha environment in the \u0000rst account by using the AWS CDK CLI’s cdk deploy command. The developer is preparing to deploy to the beta environment in a second account for the \u0000rst time. The developer makes no signi\u0000cant changes to the CDK code between deployments, but the initial deployment in the second account is unsuccessful and returns a NoSuchBucket error. Which command should the developer run before redeployment to resolve this error?",
    "options": [
      "A. cdk synth",
      "B. cdk bootstrap",
      "C. cdk init",
      "D. cdk destroy"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q379",
    "text": "A company’s infrastructure team is using AWS CloudFormation to deploy common infrastructure resources such as VPCs, subnets, Amazon RDS DB cluster endpoints, and Amazon DynamoDB tables for other teams to use. The CloudFormation templates also create AWS Systems Manager Parameter Store parameters to store information about these resources for application developers. The parameters include elements such as RDS DB cluster endpoints for clusters that the templates create. A developer creates a CloudFormation template that includes an AWS Lambda function that reads the SSM parameter value to access RDS DB cluster endpoints. The Lambda function has reserved concurrency con\u0000gured to match the value of the Parameter Store maximum throughput (transactions per second) quota for the account and the AWS Region that hosts the account. The developer wants to prepare for a potential load increase. The developer expects the Lambda function’s concurrent invocation rate to be two times more than the Parameter Store maximum throughput quota value. Which solution will prepare for the load increase MOST cost-effectively?",
    "options": [
      "A. Move the code that is reading the SSM parameter value outside the Lambda function handler. Store the RDS DB cluster endpoint value in a",
      "B. Move the code that is reading the SSM parameter value outside the Lambda function handler. Store the RDS DB cluster endpoint value in an",
      "C. Request a service quota increase for the Systems Manager GetParameter rate quota value to match the Lambda function's concurrency.",
      "D. Add an SSM parameter to the CloudFormation template that resolves the RDS DB cluster endpoint value at deployment time by using the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q380",
    "text": "A developer is troubleshooting an application that uses Amazon DynamoDB in the us-west-2 Region. The application is deployed to an Amazon EC2 instance. The application requires read-only permissions to a table that is named Cars. The EC2 instance has an attached IAM role that contains the following IAM policy: When the application tries to read from the Cars table, an Access Denied error occurs. How can the developer resolve this error?",
    "options": [
      "A. Modify the IAM policy resource to be “arn:aws:dynamodb-us-west-2:account-id:table/*”",
      "B. Modify the IAM policy to include the dynamodb:* action.",
      "C. Create a trust policy that speci\u0000es the EC2 service principal. Associate the role with the policy.",
      "D. Create a trust relationship between the role and dynamodb.amazonaws.com."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q381",
    "text": "A developer has created a Java application that runs on AWS Elastic Beanstalk with the default Elastic Beanstalk instance pro\u0000le. The developer needs to visualize a map of the application’s interactions with AWS services to help identify and debug issues with the application. Which combination of steps should the developer take to meet this requirement with the LEAST operational effort? (Choose two.)",
    "options": [
      "A. Instrument the code by using the AWS X-Ray software development kit (SDK) for Java.",
      "B. Create an Elastic Beanstalk con\u0000guration \u0000le to download and install the AWS X-Ray daemon on the underlying Amazon EC2 instances.",
      "C. Enable the AWS X-Ray daemon in the Elastic Beanstalk console.",
      "D. Enable Elastic Beanstalk enhanced health reporting.",
      "E. Con\u0000gure AWS CloudTrail to visualize the services map."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q382",
    "text": "A developer is creating a photo website. Amazon Route 53 hosts the website’s domain. The developer wants to store the application code and images in an Amazon S3 bucket. The developer also wants to use Amazon CloudFront to deliver the images to users. The developer has created the S3 bucket and a CloudFront distribution. The developer wants the images to be accessed only through the website’s domain. Users must not use the S3 URLs. Which solution will meet these requirements?",
    "options": [
      "A. Create a CloudFront origin access identity (OAI). Associate the OAI with the CloudFront distribution. Modify the S3 bucket policy to allow",
      "B. Create a CloudFront origin access identity (OAI). Associate the OAI with the CloudFront distribution. Modify the S3 bucket policy to allow",
      "C. Block public access in the S3 bucket policy. Con\u0000gure CloudFront to use the S3 bucket endpoint. Create an alias in Route 53 that points the",
      "D. Block public access in the S3 bucket policy. Con\u0000gure CloudFront to use the S3 bucket endpoint. Create an alias in Route 53 that points the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q383",
    "text": "Deploy the image to the production Amazon Elastic Container Service (Amazon ECS) cluster by using AWS CodeDeploy. Recently, the CodeDeploy deployments began failing in Stage 4. The deployments are unable to perform rollbacks. The developer must minimize the number of failures that reach production without slowing down the pipeline. Which solution will meet these requirements?",
    "options": [
      "A. Add a human review and approval stage between Stage 3 and Stage 4.",
      "B. Perform a more comprehensive test before Stage 2 by adding a test for the CodeCommit trigger in Stage 1.",
      "C. Replace Stage 4 with a manual deployment until the developer can add more quality tests to the automation.",
      "D. Modify Stage 3 so that it uses Amazon ECS and CodeDeploy."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q384",
    "text": "An application is real-time processing millions of events that are received through an API. What service could be used to allow multiple consumers to process the data concurrently and MOST cost-effectively?",
    "options": [
      "A. Amazon SNS with fanout to an SQS queue for each application",
      "B. Amazon SNS with fanout to an SQS FIFO (\u0000rst-in, \u0000rst-out) queue for each application",
      "C. Amazon Kinesis Firehose",
      "D. Amazon Kinesis Streams"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q385",
    "text": "A logistics company built an asset-tracking microservice by using the AWS Serverless Application Model (AWS SAM). One of the microservice’s AWS Lambda functions needs to import a large geospatial dataset from Amazon S3 before the function can process the requests. The import of the dataset requires signi\u0000cant time and is causing the function to take too long to \u0000nish running. The results are increased latency and cost. A developer needs to optimize the function to process requests faster with the least possible cost. Which solution will meet these requirements?",
    "options": [
      "A. Store the geospatial dataset on Amazon Elastic File System (Amazon EFS) instead of on Amazon S3. Attach the EFS \u0000le system to the",
      "B. Store the geospatial dataset on Amazon Elastic File System (Amazon EFS) instead of on Amazon S3. Attach the EFS \u0000le system to the",
      "C. Declare the Amazon S3 SDK and object request outside of the function handler. Con\u0000gure provisioned concurrency for the function.",
      "D. Declare the Amazon S3 SDK and object request outside of the function handler. Increase memory capacity of the function to 1,769 MB."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q386",
    "text": "A company set up a continuous build process that uses AWS CodeBuild and AWS CodeCommit. During the development phase, developers are frequently pushing code and causing signi\u0000cant build failures. The company wants a solution that will build code before the developers push the code to the main branch. Which solution meets these requirements MOST cost-effectively?",
    "options": [
      "A. Con\u0000gure an Amazon EC2 instance with the CodeBuild agent to build the code.",
      "B. Con\u0000gure CodeBuild jobs on AWS for each branch build process.",
      "C. Con\u0000gure the CodeBuild agent to build the code in the local system.",
      "D. Con\u0000gure a Jenkins plugin for CodeBuild to run the code build process."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q387",
    "text": "A company uses AWS CloudFormation to deploy an application that uses an Amazon API Gateway REST API with AWS Lambda function integration. The application uses Amazon DynamoDB for data persistence. The application has three stages: development, testing, and production. Each stage uses its own DynamoDB table. The company has encountered unexpected issues when promoting changes to the production stage. The changes were successful in the development and testing stages. A developer needs to route 20% of the tra\u0000c t o the new production stage API with the next production release. The developer needs to route the remaining 80% of the tra\u0000c t o the existing production stage. The solution must minimize the number of errors that any single customer experiences. Which approach should the developer take to meet these requirements?",
    "options": [
      "A. Update 20% of the planned changes to the production stage. Deploy the new production stage. Monitor the results. Repeat this process \u0000ve",
      "B. Update the Amazon Route 53 DNS record entry for the production stage API to use a weighted routing policy. Set the weight to a value of",
      "C. Deploy an Application Load Balancer (ALB) in front of the REST API. Change the production API Amazon Route 53 record to point tra\u0000c t  o",
      "D. Con\u0000gure canary settings for the production stage API. Change the percentage of tra\u0000c dir  ected to canary deployment to 20%. Make the"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q388",
    "text": "A company’s developer has deployed an application in AWS by using AWS CloudFormation. The CloudFormation stack includes parameters in AWS Systems Manager Parameter Store that the application uses as con\u0000guration settings. The application can modify the parameter values. When the developer updated the stack to create additional resources with tags, the developer noted that the parameter values were reset and that the values ignored the latest changes made by the application. The developer needs to change the way the company deploys the CloudFormation stack. The developer also needs to avoid resetting the parameter values outside the stack. Which solution will meet these requirements with the LEAST development effort?",
    "options": [
      "A. Modify the CloudFormation stack to set the deletion policy to Retain for the Parameter Store parameters.",
      "B. Create an Amazon DynamoDB table as a resource in the CloudFormation stack to hold con\u0000guration data for the application. Migrate the",
      "C. Create an Amazon RDS DB instance as a resource in the CloudFormation stack. Create a table in the database for parameter con\u0000guration.",
      "D. Modify the CloudFormation stack policy to deny updates on Parameter Store parameters."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q389",
    "text": "A company deploys a new application to AWS. The company is streaming application logs to Amazon CloudWatch Logs. The company’s development team must receive noti\u0000cation by email when the word “ERROR” appears in any log lines. A developer sets up an Amazon Simple Noti\u0000cation Service (Amazon SNS) topic and subscribes the development team to the topic. What should the developer do next to meet the requirements?",
    "options": [
      "A. Select the appropriate log group. Create a CloudWatch metric \u0000lter with “ERROR” as the search term. Create an alarm on this metric that",
      "B. In CloudWatch Logs Insights, select the appropriate log group. Create a metric query to search for the term “ERROR” in the logs. Create an",
      "C. Select the appropriate log group. Create an SNS subscription \u0000lter with “ERROR” as the \u0000lter pattern. Select the SNS topic as the",
      "D. Create a CloudWatch alarm that includes “ERROR” as a \u0000lter pattern, a log group dimension that de\u0000nes the appropriate log group, and a"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q390",
    "text": "A developer runs an application that uses an Amazon API Gateway REST API. The developer needs to implement a solution to proactively monitor the health of both API responses and latencies in case a deployment causes a service disruption despite passing deployment pipeline tests. The solution also must check for endpoint vulnerability and unauthorized changes to APIs, URLs, and website content. Which solution will meet these requirements?",
    "options": [
      "A. Use the Amazon CloudWatch Synthetics canary functionality to call the API and check the responses and duration of the request.",
      "B. Use a custom health check in the API that queries hosts to check the duration of the request.",
      "C. Implement a custom AWS Lambda function with an Amazon EventBridge event to periodically call the API and check the responses and",
      "D. Use the built-in API Gateway metrics to monitor the average duration of the API response."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q391",
    "text": "A company is developing a social leaderboard application in the AWS Cloud. The company will host the application on Amazon S3. The application will retrieve data from an Amazon DynamoDB table for anyone who visits the application without a login. A developer must ensure that all the interactions with AWS services are secure and that all the interactions use proper permissions. Which AWS feature can the developer use to meet these requirements?",
    "options": [
      "A. Amazon Cognito identity pool",
      "B. Amazon Cognito user pool",
      "C. IAM identity-based policy",
      "D. Amazon Cognito authorizer in Amazon API Gateway"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q392",
    "text": "A developer is creating a new application for a pet store. The application will manage customer rewards points. The developer will use Amazon DynamoDB to store the data for the application. The developer needs to optimize query performance and limit partition overload before actual performance analysis. Which option should the developer use for a partition key to meet these requirements?",
    "options": [
      "A. A randomly generated universally unique identi\u0000er (UUID)",
      "B. The customer’s full name",
      "C. The date when the customer signed up for the rewards program",
      "D. The name of the customer’s pet"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q393",
    "text": "A company needs an application that consumes logs from Apache HTTP servers at a large scale with near real-time processing. The logs will vary in size from 300 KB to 500 KB. As part of processing, the company needs to convert the logs to JSON format and then upload the logs to an Amazon OpenSearch Service cluster. Which combination of steps will meet these requirements? (Choose two.)",
    "options": [
      "A. Install the Amazon CloudWatch agent on the Apache HTTP servers. Con\u0000gure the CloudWatch agent to push the logs to an Amazon Simple",
      "B. Install the Amazon CloudWatch agent on the Apache HTTP servers. Con\u0000gure the CloudWatch agent to push the logs to the Amazon",
      "C. Install the Amazon Kinesis agent on the Apache HTTP servers. Con\u0000gure the Kinesis agent to push the logs to the Amazon Kinesis Data",
      "D. Create an AWS Lambda function that converts the logs to JSON format and pushes the results to the OpenSearch Service cluster. Consume",
      "E. Create an Amazon Kinesis Data Firehose delivery stream. Set the source as Direct PUT. Implement an AWS Lambda function to convert the"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q394",
    "text": "A company is building a serverless application that uses AWS Lambda. The application includes Lambda functions that are exposed by Amazon API Gateway. The functions will use several large third-party libraries, and the build artifacts will exceed 50 MB in size. Which combination of steps should a developer take to prepare and perform the deployment? (Choose two.)",
    "options": [
      "A. Issue the aws lambda update-function-code CLI command with the --zip-\u0000le \u0000leb://my-function.zip parameter.",
      "B. Upload the build artifact to Amazon S3.",
      "C. Issue the aws cloudformation package CLI command.",
      "D. Issue the aws lambda update-function-code CLI command with the --s3-bucket and --s3-key parameters.",
      "E. Issue the aws lambda update-function-code CLI command with a parameter that points to the source code in AWS CodeCommit."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q395",
    "text": "A developer is implementing an AWS Lambda function that will be invoked when an object is uploaded to Amazon S3. The developer wants to test the Lambda function in a local development machine before publishing the function to a production AWS account. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. Upload an object to Amazon S3 by using the aws s3api put-object CLI command. Wait for the local Lambda invocation from the S3 event.",
      "B. Create a sample JSON text \u0000le for a put object S3 event. Invoke the Lambda function locally. Use the aws lambda invoke CLI command with",
      "C. Use the sam local start-lambda CLI command to start Lambda. Use the sam local generate-event s3 put CLI command to create the",
      "D. Create a JSON string for the put object S3 event. In the AWS Management Console, use the JSON string to create a test event for the local"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q396",
    "text": "A company is running Amazon EC2 instances in multiple AWS accounts. A developer needs to implement an application that collects all the lifecycle events of the EC2 instances. The application needs to store the lifecycle events in a single Amazon Simple Queue Service (Amazon SQS) queue in the company's main AWS account for further processing. Which solution will meet these requirements?",
    "options": [
      "A. Con\u0000gure Amazon EC2 to deliver the EC2 instance lifecycle events from all accounts to the Amazon EventBridge event bus of the main",
      "B. Use the resource policies of the SQS queue in the main account to give each account permissions to write to that SQS queue. Add to the",
      "C. Write an AWS Lambda function that scans through all EC2 instances in the company accounts to detect EC2 instance lifecycle changes.",
      "D. Con\u0000gure the permissions on the main account event bus to receive events from all accounts. Create an Amazon EventBridge rule in each"
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q397",
    "text": "A developer has an application container, an AWS Lambda function, and an Amazon Simple Queue Service (Amazon SQS) queue. The Lambda function uses the SQS queue as an event source. The Lambda function makes a call to a third-party machine learning API when the function is invoked. The response from the third-party API can take up to 60 seconds to return. The Lambda function’s timeout value is currently 65 seconds. The developer has noticed that the Lambda function sometimes processes duplicate messages from the SQS queue. What should the developer do to ensure that the Lambda function does not process duplicate messages?",
    "options": [
      "A. Con\u0000gure the Lambda function with a larger amount of memory.",
      "B. Con\u0000gure an increase in the Lambda function's timeout value.",
      "C. Con\u0000gure the SQS queue’s delivery delay value to be greater than the maximum time it takes to call the third-party API.",
      "D. Con\u0000gure the SQS queue’s visibility timeout value to be greater than the maximum time it takes to call the third-party API."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q398",
    "text": "When using the AWS Encryption SDK, how does the developer keep track of the data encryption keys used to encrypt data?",
    "options": [
      "A. The developer must manually keep track of the data encryption keys used for each data object.",
      "B. The SDK encrypts the data encryption key and stores it (encrypted) as part of the returned ciphertext.",
      "C. The SDK stores the data encryption keys automatically in Amazon S3.",
      "D. The data encryption key is stored in the Userdata for the EC2 instance."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q399",
    "text": "A company is automating a process and is moving the process from on premises to AWS. The company is using an AWS CodePipeline pipeline. Before publishing the code, the company wants to create and implement test suites when the pipeline is running. The pipeline should publish the code only after the pipeline passes all the checks. Which solution will implement this functionality with the LEAST operational overhead?",
    "options": [
      "A. Create a custom test action for CodePipeline. Host the job worker on the on-premises server.",
      "B. Use AWS CodeBuild and include the test checks. When the test checks clear, use AWS CodeDeploy to deploy and publish the code.",
      "C. Create a custom test action for CodePipeline. Host the job worker on an Amazon EC2 instance to run the testing request.",
      "D. Write test cases. Test the test cases locally before pushing the code changes to the version control."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q400",
    "text": "A company built an online event platform. For each event, the company organizes quizzes and generates leaderboards that are based on the quiz scores. The company stores the leaderboard data in Amazon DynamoDB and retains the data for 30 days after an event is complete. The company then uses a scheduled job to delete the old leaderboard data The DynamoDB table is con\u0000gured with a \u0000xed write capacity. During the months when many events occur, the DynamoDB write API requests are throttled when the scheduled delete job runs. A developer must create a long-term solution that deletes the old leaderboard data and optimizes write throughput. Which solution meets these requirements?",
    "options": [
      "A. Con\u0000gure a TTL attribute for the leaderboard data.",
      "B. Use DynamoDB Streams to schedule and delete the leaderboard data",
      "C. Use AWS Step Functions to schedule and delete the leaderboard data.",
      "D. Set a higher write capacity when the scheduled delete job runs."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q401",
    "text": "A developer is implementing a serverless application by using AWS CloudFormation to provision Amazon S3 web hosting, Amazon API Gateway, and AWS Lambda functions. The Lambda function source code is zipped and uploaded to an S3 bucket. The S3 object key of the zipped source code is speci\u0000ed in the Lambda resource in the CloudFormation template. The developer notices that there are no changes in the Lambda function every time the CloudFormation stack is updated. How can the developer resolve this issue?",
    "options": [
      "A. Create a new Lambda function alias before updating the CloudFormation stack.",
      "B. Change the S3 object key or the S3 version in the CloudFormation template before updating the CloudFormation stack.",
      "C. Upload the zipped source code to another $3 bucket before updating the CloudFormation stack.",
      "D. Associate a code signing con\u0000guration with the Lambda function before updating the CloudFormation stack."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q402",
    "text": "A company uses Amazon DynamoDB as a data store for its order management system. The company frontend application stores orders in a DynamoDB table. The DynamoDB table is con\u0000gured to send change events to a DynamoDB stream. The company uses an AWS Lambda function to log and process the incoming orders based on data from the DynamoDB stream. An operational review reveals that the order quantity of incoming orders is sometimes set to 0. A developer needs to create a dashboard that will show how many unique customers this problem affects each day. What should the developer do to implement the dashboard?",
    "options": [
      "A. Grant the Lambda function's execution role permissions to upload logs to Amazon CloudWatch Logs. Implement a CloudWatch Logs",
      "B. Use Amazon Athena to query AWS CloudTrail API logs for API calls. Implement an Athena query that selects the number of unique",
      "C. Con\u0000gure the Lambda function to send events to Amazon EventBridge. Create an EventBridge rule that groups the number of unique",
      "D. Turn on custom Amazon CloudWatch metrics for the DynamoDB stream of the DynamoDB table. Create a CloudWatch alarm that groups the"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q403",
    "text": "A developer has built an AWS Lambda function to update a legacy system. The developer has set the Lambda function’s trigger type to Amazon EventBridge. The legacy system was overwhelmed after the initial deployment of the Lambda function. The root cause was too many requests to the legacy system at the same time. The developer needs to limit the number of requests to the legacy system and must maintain high throughput. Which solution will meet these requirements without requiring architecture changes?",
    "options": [
      "A. Con\u0000gure provisioned concurrency for the Lambda function. Set the provisioned concurrency to the desired number of maximum",
      "B. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Con\u0000gure the SQS queue to invoke the Lambda function. Update the",
      "C. Con\u0000gure reserved concurrency for the Lambda function. Increase the number of asynchronous invocation retry attempts and the maximum",
      "D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Con\u0000gure the SQS queue to invoke the Lambda function. Update"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q404",
    "text": "A company wants to migrate applications from its on-premises servers to AWS. As a \u0000rst step, the company is modifying and migrating a non- critical application to a single Amazon EC2 instance. The application will store information in an Amazon S3 bucket. The company needs to follow security best practices when deploying the application on AWS. Which approach should the company take to allow the application to interact with Amazon S3?",
    "options": [
      "A. Create an IAM role that has administrative access to AWS. Attach the role to the EC2 instance.",
      "B. Create an IAM user. Attach the AdministratorAccess policy. Copy the generated access key and secret key. Within the application code, use",
      "C. Create an IAM role that has the necessary access to Amazon S3. Attach the role to the EC2 instance.",
      "D. Create an IAM user. Attach a policy that provides the necessary access to Amazon S3. Copy the generated access key and secret key."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q405",
    "text": "A developer needs to secure the static assets in a company’s Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The company has an Amazon CloudFront distribution that serves the S3 bucket’s assets to the public. The developer has already created the origin access identity (OAI) and has associated the OAI with the distribution. The developer must write a bucket policy that allows only the CloudFront distribution to access the S3 bucket. Which policy will meet this requirement MOST securely?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q406",
    "text": "A company’s mock data from development environments has been appearing in the production environment. The company wants a member of the Admin IAM user group to manually approve all promotions to production in the company’s AWS CodePipeline pipeline before the promotions can proceed. Which combination of steps will meet these requirements? (Choose two.)",
    "options": [
      "A. Add an approval action to the pipeline. Set the Provider \u0000eld to Group and the Owner \u0000eld to the name of the IAM user group. Set the",
      "B. Add an approval action to the pipeline. Set the Provider \u0000eld to Manual and the Owner \u0000eld to AWS. Set the approval action to run before the",
      "C. Add an approval action to the pipeline. Set the Provider \u0000eld to Manual and the Owner \u0000eld to the name of the IAM user group. Set the",
      "D. Add an inline policy to the Admin IAM user group to allow the codepipeline:GetPipeline* action and the codepipeline:PutApprovalResult",
      "E. Add an inline policy to the Admin IAM user group to allow the codepipeline:GetPipeline* action. Set the pipeline as the resource for the"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q407",
    "text": "A company runs an application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group. The company has con\u0000gured the Amazon CloudWatch agent to capture custom metrics within the instances. When the company launches new instances, the agent starts successfully, but it does not deliver any custom metrics to CloudWatch. Which action will deliver the custom metrics to CloudWatch?",
    "options": [
      "A. Ensure that the CloudWatch agent JSON con\u0000guration \u0000le has an IAM policy that has the CloudWatch:PutMetricLogs permission attached.",
      "B. Ensure that the role used in the EC2 Auto Scaling launch template has the CloudWatchAgentServerPolicy IAM policy attached.",
      "C. Attach the CloudWatchAgentServerPolicy IAM policy directly to the EC2 Auto Scaling launch template in the AWS Management Console.",
      "D. Attach a JSON script with the CloudWatch:PutMetricLogs permission to the EC2 Auto Scaling launch template in the AVVS Management"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q408",
    "text": "An application development team decides to use AWS X-Ray to monitor application code to analyze performance and perform root cause analysis. What does the team need to do to begin using X-Ray? (Choose two.)",
    "options": [
      "A. Log instrumentation output into an Amazon SQS queue.",
      "B. Use a visualization tool to view application traces.",
      "C. Instrument application code using the AWS SDK.",
      "D. Install the X-Ray agent on the application servers.",
      "E. Create an Amazon DynamoDB table to store the trace logs."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q409",
    "text": "A developer manages an Amazon RDS for PostgreSQL database. An Amazon Elastic Container Service (Amazon ECS) container that uses AWS Fargate needs to modify the contents of the database during a nightly run. Which combination of steps should the developer take to provide database access to the container in the MOST secure manner? (Choose two.)",
    "options": [
      "A. De\u0000ne a database secret in AWS Secrets Manager. Provide the credentials to the container by using the task de\u0000nition.",
      "B. De\u0000ne a password in AWS CloudFormation. Pass the password into the environment variables of the container.",
      "C. Enable IAM authentication for the database. Grant the appropriate permissions to the container.",
      "D. Use an Amazon Cognito identity pool to authenticate the container. Use the provided response token to connect to the database.",
      "E. De\u0000ne an AWS Key Management Service (AWS KMS) key that encrypts the contents of the database. Grant permission to decrypt to the"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q410",
    "text": "A company is offering APIs as a service over the internet to provide unauthenticated read access to statistical information that is updated daily. The company uses Amazon API Gateway and AWS Lambda to develop the APIs. The service has become popular, and the company wants to enhance the responsiveness of the APIs. Which action can help the company achieve this goal?",
    "options": [
      "A. Enable API caching in API Gateway.",
      "B. Con\u0000gure API Gateway to use an interface VPC endpoint",
      "C. Enable cross-origin resource sharing (CORS) for the APIs.",
      "D. Con\u0000gure usage plans and API keys in API Gateway."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q411",
    "text": "An ecommerce company is launching a new application that will be publicly accessible. The company deployed the application on Amazon EC2 instances behind an Application Load Balancer (ALB) in the us-east-1 Region. The EC2 instances are in an Auto Scaling group. A developer needs to make the application secure by using TLS/SSL certi\u0000cates provisioned by AWS. The developer also needs to con\u0000gure the existing domain www.example.com in Amazon Route 53. Which combination of steps should the developer take to meet these requirements? (Choose two.)",
    "options": [
      "A. Con\u0000gure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certi\u0000cate in IAM server certi\u0000cates.",
      "B. Con\u0000gure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certi\u0000cate in AWS Certi\u0000cate",
      "C. Add the www.example.com certi\u0000cate to the HTTP listener. Add a rule with www.example.com as the host. Forward the tra\u0000c t  o a target",
      "D. Con\u0000gure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certi\u0000cate in Route 53.",
      "E. Create an HTTPS listener in the ALB. Add the www.example.com certi\u0000cate to the listener. Add a rule with www.example.com as the host."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q412",
    "text": "A security review for a software company’s application infrastructure shows that there is no test coverage in any of the company’s deployment pipelines. A developer must \u0000x this issue as soon as possible. The company has been integrating the AWS Cloud Development Kit (AWS CDK) into the deployment process. However, much of the pipeline still uses AWS CloudFormation templates. The developer needs to add test coverage to all the deployment code. Which solution will meet these requirements with the LEAST amount of con\u0000guration?",
    "options": [
      "A. Write unit tests by using the AWS CDK assertions module. Create CloudFormation template instances by using the module's Template class",
      "B. Write unit tests by using the AWS CDK assertions module. Create CloudFormation template instances by using the module’s",
      "C. Convert the CloudFormation templates into CDK stacks by using the AWS CDK CfnInciude construct. Write unit tests against the templates",
      "D. Convert the CDK stacks into CloudFormation templates by using the AWS CDK CfnInclude construct. Write unit tests against the templates"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q413",
    "text": "A developer tests an application that a company developed by using AWS Lambda. The Lambda functions are behind an AmazonAPI Gateway API. The timeout for the API method is set to the same timeout as the Lambda functions. When a request is sent to the API, the responses are timing out. Which action would help the developer troubleshoot this issue?",
    "options": [
      "A. Check the IntegrationLatency metric of the API in Amazon CloudWatch",
      "B. Check the Duration metric for the Lambda functions in Amazon CloudWatch",
      "C. Check the Count metric of the API in Amazon CloudWatch",
      "D. Check the Errors metric for the Lambda functions in Amazon CloudWatch"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q414",
    "text": "A developer is creating a web application for a guitar store where customers can look for instruments in a catalog. The developer chooses Amazon DynamoDB in provisioned mode for the database. The database must contain a catalog for the instruments that are displayed in the application. The required information includes category (for example, acoustic guitar, electric guitar, bass guitar), part number, model, brand, country of fabrication, color, orientation (left-handed, right-handed), and price. The application must give customers the ability to look for instruments by browsing category, then brand, and \u0000nally model. Customers must also be able to search by part number. Based on these requirements, the developer must choose the proper partition key, sort key, and indexes that will minimize the number of read capacity units (RCUs) that the queries consume. All query results must return all attributes. Which combination of steps should the developer use in the table design to meet these requirements? (Choose two.)",
    "options": [
      "A. Set part number as the partition key. Do not set a sort key.",
      "B. Set brand as the partition key. Set category as the sort key.",
      "C. Create a global secondary index (GSI) with category as the partition key and brand+model as the sort key. Select ALL for attribute",
      "D. Create a global secondary index (GSI) with category as the partition key and brand as the sort key. Use \u0000lter expression by model when",
      "E. Create a global secondary index (GSI) with category+brand as the partition key and model as the sort key. Select INCLUDE for attribute"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q415",
    "text": "A company has a virtual reality (VR) game. The game has a serverless backend that consists of Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. Recently, the company noticed a sudden increase of new users globally. The company also noticed delays in the retrieval of user data. Which AWS service or feature can the company use to reduce the database response time to microseconds?",
    "options": [
      "A. Amazon ElastiCache",
      "B. DynamoDB Accelerator (DAX)",
      "C. DynamoDB auto scaling",
      "D. Amazon CloudFront"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q416",
    "text": "A developer is building an application on Amazon EC2. The developer encountered an “Access Denied” error on some of the API calls to AWS services while testing. The developer needs to modify permissions that have been already given to the instance. How can these requirements be met with minimal changes and minimum downtime?",
    "options": [
      "A. Make a new IAM role with the needed permissions. Stop the instance. Attach the new IAM role to the instance. Start the instance.",
      "B. Delete the existing IAM role. Attach a new IAM role with the needed permissions.",
      "C. Stop the instance. Update the attached IAM role adding the needed permissions. Start the instance.",
      "D. Update the attached IAM role adding the needed permissions."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q417",
    "text": "A developer wants to use AWS CodeDeploy to deploy an AWS Lambda function. What are the MINIMUM properties required in the 'resources' section of the AppSpec \u0000le for CodeDeploy to deploy the function successfully?",
    "options": [
      "A. name, alias, currentversion, and targetversion",
      "B. TaskDe\u0000nition, ContainerName, and PlatformVersion",
      "C. TaskDe\u0000nition, ContainerName, and ContainerPort",
      "D. name, currentversion, NetworkCon\u0000guration, and PlatformVersion"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q418",
    "text": "A company is working on a new serverless application. A developer needs to \u0000nd an automated way to deploy AWS Lambda functions and the dependent infrastructure with minimum coding effort. The application also needs to be reliable. Which method will meet these requirements with the LEAST operational overhead?",
    "options": [
      "A. Build the application by using shell scripts to create .zip \u0000les for each Lambda function. Manually upload the .zip \u0000les to the AWS",
      "B. Build the application by using the AWS Serverless Application Model (AWS SAM). Use a continuous integration and continuous delivery",
      "C. Build the application by using shell scripts to create .zip \u0000les for each Lambda function. Upload the .zip \u0000les. Deploy the .zip \u0000les as",
      "D. Build a container for each Lambda function. Store the container images in AWS CodeArtifact. Deploy the containers as Lambda functions"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q419",
    "text": "A developer is creating a new application that will be accessed by users through an API created using Amazon API Gateway. The users need to be authenticated by a third-party Security Assertion Markup Language (SAML) identity provider. Once authenticated, users will need access to other AWS services, such as Amazon S3 and Amazon DynamoDB. How can these requirements be met?",
    "options": [
      "A. Use an Amazon Cognito user pool with SAML as the resource server.",
      "B. Use Amazon Cognito identity pools with a SAML identity provider as one of the authentication providers.",
      "C. Use the AWS IAM service to provide the sign-up and sign-in functionality.",
      "D. Use Amazon CloudFront signed URLs to connect with the SAML identity provider."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q420",
    "text": "A developer is writing an application to encrypt \u0000les outside of AWS before uploading the \u0000les to an Amazon S3 bucket. The encryption must be symmetric and must be performed inside the application. How can the developer implement the encryption in the application to meet these requirements?",
    "options": [
      "A. Create a data key in AWS Key Management Service (AWS KMS). Use the AWS Encryption SDK to encrypt the \u0000les.",
      "B. Create a Hash-Based Message Authentication Code (HMAC) key in AWS Key Management Service (AWS KMS). Use the AWS Encryption SDK",
      "C. Create a data key pair in AWS Key Management Service (AWS KMS). Use the AWS CL to encrypt the \u0000les.",
      "D. Create a data key in AWS Key Management Service (AWS KMS). Use the AWS CLI to encrypt the \u0000les."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q421",
    "text": "A developer is building a web application that uses Amazon API Gateway to expose an AWS Lambda function to process requests from clients. During testing, the developer notices that the API Gateway times out even though the Lambda function \u0000nishes under the set time limit. Which of the following API Gateway metrics in Amazon CloudWatch can help the developer troubleshoot the issue? (Choose two.)",
    "options": [
      "A. CacheHitCount",
      "B. IntegrationLatency",
      "C. CacheMissCount",
      "D. Latency",
      "E. Count"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q422",
    "text": "A company deployed an application as a set of microservices that run on Amazon Elastic Container Service (Amazon ECS) behind an Application Load Balancer (ALB). The performance of the microservices has started to degrade for a speci\u0000c set of user requests. The company needs to gain deeper insight into the request behavior that is associated with the performance degradation. Which process will meet this requirement?",
    "options": [
      "A. Create a Docker image that runs the AWS X-Ray daemon. Run the image alongside the microservices in Amazon ECS. Use the X-Ray console",
      "B. Perform distributed tracing based on the ALB's built-in tra\u0000c r  equest metrics.",
      "C. Use Amazon CloudWatch to collect metrics and logs from Amazon ECS. Perform distributed tracing based on the ECS metrics and logs.",
      "D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to capture the ECS metrics and logs. Use the EventBridge console to view"
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q423",
    "text": "A developer is working on a serverless project. Initial testing shows that a cold start takes about 8 seconds on average for AWS Lambda functions. Which actions should the developer take to reduce the cold start time? (Choose two.)",
    "options": [
      "A. Add a dependency injection framework to the project.",
      "B. Reduce the deployment package by including only the needed modules.",
      "C. Con\u0000gure provisioned concurrency for the Lambda functions.",
      "D. Increase the timeout setting for the Lambda functions.",
      "E. Change the Lambda invocation mode from synchronous to asynchronous."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q424",
    "text": "A company has an online web application that includes a product catalog. The catalog is stored in an Amazon S3 bucket that is named DOC- EXAMPLE-BUCKET. The application must be able to list the objects in the S3 bucket and must be able to download objects through an IAM policy. Which policy allows MINIMUM access to meet these requirements?",
    "options": [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q425",
    "text": "A company has three AWS Lambda functions that are written in Node.js. The Lambda functions include a mix of custom code and open-source modules. When bugs are occasionally detected in the open-source modules, all three Lambda functions must be patched. What is the MOST operationally e\u0000cient solution to deploy a patched open-source library for all three Lambda functions?",
    "options": [
      "A. Create a custom AWS CloudFormation public registry extension. Reference a GitHub repository that hosts the open-source modules in the",
      "B. Create an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Upload the patched modules to Amazon S3 when",
      "C. Launch an Amazon EC2 instance. Host a private open-source module registry on the EC2 instance. Upload the modi\u0000ed open-source",
      "D. Create a Lambda layer with the open-source modules. Modify all three Lambda functions to depend on the layer. Remove the open-source"
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q426",
    "text": "A developer has an application that can upload tens of thousands of objects per second to Amazon S3 in parallel within a single AWS account. As part of new requirements, data stored in S3 must use server-side encryption with AWS KMS keys (SSE-KMS). After creating this change, performance of the application is slower. Which of the following is MOST likely the cause of the application latency?",
    "options": [
      "A. Amazon S3 throttles the rate at which uploaded objects can be encrypted using KMS keys.",
      "B. The AWS KMS API calls limit is less than needed to achieve the desired performance.",
      "C. The client encryption of the objects is using a poor algorithm.",
      "D. KMS requires that an alias be used to create an independent display name that can be mapped to a KMS key."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q427",
    "text": "A 3D printing company has developed a proof-of-concept application that is running on AWS Elastic Beanstalk. The application displays a list of products that are available for 3D printing, in addition to any available customizations. When the company deploys new versions of the application, the company wants to ensure that there is no application downtime. Additionally, the application must remain at the same level of server capacity throughout the deployment. Which deployment strategies will meet these requirements? (Choose two.)",
    "options": [
      "A. All-at-once",
      "B. Rolling",
      "C. Rolling with additional batch",
      "D. Immutable",
      "E. All-at-once with additional batch"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q428",
    "text": "A developer is writing a mobile application that allows users to view images from an S3 bucket. The users must be able to log in with their Amazon login, as well as supported social media accounts. How can the developer provide this authentication functionality?",
    "options": [
      "A. Use Amazon Cognito with web identity federation.",
      "B. Use Amazon Cognito with SAML-based identity federation.",
      "C. Use IAM access keys and secret keys in the application code to allow Get* on the S3 bucket.",
      "D. Use AWS STS AssumeRole in the application code and assume a role with Get* permissions on the S3 bucket."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q429",
    "text": "A company uses a custom root certi\u0000cate authority certi\u0000cate chain (Root CA Cert) that is 10 KB in size to generate SSL certi\u0000cates for its on- premises HTTPS endpoints. One of the company’s cloud-based applications has hundreds of AWS Lambda functions that pull data from these endpoints. A developer updated the trust store of the Lambda execution environment to use the Root CA Cert when the Lambda execution environment is initialized. The developer bundled the Root CA Cert as a text \u0000le in the Lambda deployment bundle. After 3 months of development, the Root CA Cert is no longer valid and must be updated. The developer needs a more e\u0000cient solution to update the Root CA Cert for all deployed Lambda functions. The solution must not include rebuilding or updating all Lambda functions that use the Root CA Cert. The solution must also work for all development, testing, and production environments. Each environment is managed in a separate AWS account. Which combination of steps should the developer take to meet these requirements MOST cost-effectively? (Choose two.)",
    "options": [
      "A. Store the Root CA Cert as a secret in AWS Secrets Manager. Create a resource-based policy. Add IAM users to allow access to the secret.",
      "B. Store the Root CA Cert as a SecureString parameter in AWS Systems Manager Parameter Store. Create a resource-based policy. Add IAM",
      "C. Store the Root CA Cert in an Amazon S3 bucket. Create a resource-based policy to allow access to the bucket.",
      "D. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store inside the Lambda",
      "E. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store outside the Lambda"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q430",
    "text": "A developer is exposing an API by using Amazon API Gateway and AWS Lambda as the backend for an application. The developer wants to add validation rules for a POST method to ensure that the data from the frontend web form is valid. The validation rules must include mandatory \u0000elds, data type, length, and regular expressions. Which solution will meet these requirements?",
    "options": [
      "A. Create an API Gateway model with schema for data validation.",
      "B. Create API Gateway HTTP request headers for data validation.",
      "C. Create API Gateway URL query string parameters for data validation.",
      "D. Create API Gateway URL path parameters for data validation."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q431",
    "text": "A developer is migrating an on-premises web application to AWS. The web application allows users to log in and modify their user pro\u0000les. The web application consists of a web server and a relational database. The developer has created an Amazon Machine Image (AMI) that will be used to launch Amazon EC2 instances to provide the web server. The developer also has created a database in Amazon RDS. As part of the migration, the developer wants to create an Amazon EC2 Auto Scaling group to launch the web server instances behind an Application Load Balancer. The launch con\u0000guration for the Auto Scaling group will specify the AMI for the web server. Which additional step should the developer take to give the web application the ability to automatically scale?",
    "options": [
      "A. Select an EC2 instance type that is large enough to handle increased demand.",
      "B. Create an Amazon ElastiCache cluster. Con\u0000gure the web application to store session state in the cluster.",
      "C. Install the database on one of the EC2 instances. Recreate the AMI from that EC2 instance.",
      "D. Create an RDS read replica. Con\u0000gure the web application to use the read replica for all read operations."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q432",
    "text": "A company has a serverless application that uses Amazon API Gateway backed by AWS Lambda proxy integration. The company is developing several backend APIs. The company needs a landing page to provide an overview of navigation to the APIs. A developer creates a new /LandingPage resource and a new GET method that uses mock integration. What should the developer do next to meet these requirements?",
    "options": [
      "A. Con\u0000gure the integration request mapping template with Content-Type of text/html and statusCode of 200. Con\u0000gure the integration",
      "B. Con\u0000gure the integration request mapping template with Content-Type of application/json. In the integration request mapping template,",
      "C. Con\u0000gure the integration request mapping template with Content-Type of application/json and statusCode of 200. Con\u0000gure the integration",
      "D. Con\u0000gure the integration request mapping template with Content-Type of text/html. In the integration request mapping template, include"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q433",
    "text": "A developer needs to manage AWS infrastructure as code and must be able to deploy multiple identical copies of the infrastructure, stage changes, and revert to previous versions. Which approach addresses these requirements?",
    "options": [
      "A. Use cost allocation reports and AWS OpsWorks to deploy and manage the infrastructure.",
      "B. Use Amazon CloudWatch metrics and alerts along with resource tagging to deploy and manage the infrastructure.",
      "C. Use AWS Elastic Beanstalk and AWS CodeCommit to deploy and manage the infrastructure.",
      "D. Use AWS CloudFormation and AWS CodeCommit to deploy and manage the infrastructure."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q434",
    "text": "A company stores all personally identi\u0000able information (PII) in an Amazon DynamoDB table named PII in Account A. Developers are working on an application that is running on Amazon EC2 instances in Account B. The application in Account B requires access to the PII table. An administrator in Account A creates an IAM role named AccessPII that has permission to access the PII table. The administrator also creates a trust policy that speci\u0000es Account B as a principal that can assume the role. Which combination of steps should the developers take in Account B to allow their application to access the PII table? (Choose two.)",
    "options": [
      "A. Allow the EC2 IAM role the permission to assume the AccessPII role",
      "B. Allow the EC2 IAM role the permission to access the PII table.",
      "C. Include the AWS API in the application code logic to obtain temporary credentials from the EC2 IAM role to access the PII table.",
      "D. Include the AssumeRole API operation in the application code logic to obtain temporary credentials to access the PII table.",
      "E. Include the GetSessionToken API operation in the application code logic to obtain temporary credentials to access the PII table."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q435",
    "text": "A company has a web application that uses an Amazon Cognito user pool for authentication. The company wants to create a login page that includes the company logo. What should a developer do to meet these requirements?",
    "options": [
      "A. Create a hosted user interface (UI) in Amazon Cognito. Customize the hosted UI with the company logo.",
      "B. Create a login page that includes the company logo. Upload the login page to Amazon Cognito,",
      "C. Create a login page that includes the company logo in Amazon API Gateway. Save the link in Amazon Cognito.",
      "D. Upload the company logo to an Amazon S3 bucket. Specify the S3 object path in app client settings in Amazon Cognito."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q436",
    "text": "A developer has an application that is composed of many different AWS Lambda functions. The Lambda functions all use some of the same dependencies. To avoid security issues, the developer is constantly updating the dependencies of all of the Lambda functions. The result is duplicated effort for each function. How can the developer keep the dependencies of the Lambda functions up to date with the LEAST additional complexity?",
    "options": [
      "A. De\u0000ne a maintenance window for the Lambda functions to ensure that the functions get updated copies of the dependencies.",
      "B. Upgrade the Lambda functions to the most recent runtime version.",
      "C. De\u0000ne a Lambda layer that contains all of the shared dependencies.",
      "D. Use an AWS CodeCommit repository to host the dependencies in a centralized location."
    ],
    "correctOption": 1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q437",
    "text": "An application that is deployed to Amazon EC2 is using Amazon DynamoDB. The application calls the DynamoDB REST API. Periodically, the application receives a ProvisionedThroughputExceededException error when the application writes to a DynamoDB table. Which solutions will mitigate this error MOST cost-effectively? (Choose two.)",
    "options": [
      "A. Modify the application code to perform exponential backoff when the error is received.",
      "B. Modify the application to use the AWS SDKs for DynamoDB.",
      "C. Increase the read and write throughput of the DynamoDB table.",
      "D. Create a DynamoDB Accelerator (DAX) cluster for the DynamoDB table.",
      "E. Create a second DynamoDB table. Distribute the reads and writes between the two tables."
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q438",
    "text": "A developer creates an AWS Lambda function that publishes a message to an Amazon Simple Queue Service (Amazon SQS) queue. The developer needs to ensure that the message is not processed for 60 seconds after delivery to the destination queue. Which solution will meet these requirements?",
    "options": [
      "A. Increase the SQS queue’s delivery delay value to 60 seconds.",
      "B. Increase the SQS queue’s visibility timeout value to 60 seconds.",
      "C. Increase the Lambda function’s timeout value to 60 seconds.",
      "D. Increase the Lambda function’s memory."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q439",
    "text": "A developer compiles an AWS Lambda function and packages the result as a .zip \u0000le. The developer uses the Functions page on the Lambda console to attempt to upload the local packaged .zip \u0000le. When pushing the package to Lambda, the console returns the following error: An error occurred (RequestEntityTooLargeException) when calling the UpdateFunctionCode operation Which solutions can the developer use to publish the code? (Choose two.)",
    "options": [
      "A. Upload the package to Amazon S3. Use the Functions page on the Lambda console to upload the package from the S3 location.",
      "B. Create an AWS Support ticket to increase the maximum package size.",
      "C. Use the update-function-code AWS CLI command. Pass the --publish parameter.",
      "D. Repackage the Lambda function as a Docker container image. Upload the image to Amazon Elastic Container Registry (Amazon ECR).",
      "E. Sign the .zip \u0000le digitally. Create a new Lambda function by using the Lambda console. Update the con\u0000guration of the new Lambda"
    ],
    "correctOption": -1,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q440",
    "text": "A company has an application that provides blog hosting services to its customers. The application includes an Amazon DynamoDB table with a primary key. The primary key consists of the customers’ UserName as a partition key and the NumberOfBlogs as a sort key. The application stores the TotalReactionsOnBlogs as an attribute on the same DynamoDB table. A developer needs to implement an operation to retrieve the top 10 customers based on the greatest number of reactions on their blogs. This operation must not consume the DynamoDB table’s existing read capacity. What should the developer do to meet these requirements in the MOST operationally e\u0000cient manner?",
    "options": [
      "A. For the existing DynamoDB table, create a new global secondary index (GSI) that has the UserName as a partition key and the",
      "B. For the existing DynamoDB table, create a new local secondary index (LSI) that has the UserName as a partition key and the",
      "C. Back up and restore the DynamoDB table to a new DynamoDB table. Create a new global secondary index (GSI) that has the UserName as a",
      "D. Back up and restore the DynamoDB table to a new DynamoDB table. Create a new local secondary index (LSI) that has the UserName as a"
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q441",
    "text": "A developer is deploying an AWS Lambda function. The developer wants the ability to return to older versions of the function quickly and seamlessly. How can the developer achieve this goal with the LEAST operational overhead?",
    "options": [
      "A. Use AWS OpsWorks to perform blue/green deployments.",
      "B. Use a function alias with different versions.",
      "C. Maintain deployment packages for older versions in Amazon S3.",
      "D. Use AWS CodePipeline for deployments and rollbacks."
    ],
    "correctOption": 3,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q442",
    "text": "A developer is creating a utility application as an AWS Lambda function. The code is using multiple threads. The developer runs the Lambda function, and the function does not perform as well as the developer expected. What should the developer do to improve the performance of the Lambda function?",
    "options": [
      "A. Increase the Lambda function timeout setting.",
      "B. Request to increase the Lambda function concurrency quota.",
      "C. Increase the memory allocation of the Lambda function.",
      "D. Modify the reserved concurrency of the Lambda function to a higher number."
    ],
    "correctOption": 0,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  },
  {
    "id": "q443",
    "text": "A company has a web application in an Amazon Elastic Container Service (Amazon ECS) cluster running hundreds of secure services in AWS Fargate containers. The services are in target groups routed by an Application Load Balancer (ALB). Application users log in to the website anonymously, but they must be authenticated using any OpenID Connect protocol-compatible identity provider (IdP) to access the secure services. Which authentication approach would meet these requirements with the LEAST amount of effort?",
    "options": [
      "A. Con\u0000gure the services to use Amazon Cognito.",
      "B. Con\u0000gure the ALB to use Amazon Cognito.",
      "C. Con\u0000gure the services to use AWS Security Token Service (AWS STS) with the OpenID Connect IdP.",
      "D. Con\u0000gure the Amazon ECS cluster to use AWS Security Token Service (AWS STS) with the OpenID Connect IdP."
    ],
    "correctOption": 2,
    "explanation": "",
    "category": "AWS Certified Developer",
    "difficulty": "medium",
    "tags": [
      "AWS"
    ]
  }
];