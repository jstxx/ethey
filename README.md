# Dockerized Node Sample App

## Purpose

Shows an example app that queries the etherscan API and store the transactions associated with an ethereum address in mongoDB.  Examples for CI/CD are included from circle-ci (.circleci/config.yml) and AWS CodeDeploy (appspec.yml).

## Deploy

### CircleCI
Create a circle-ci environment, pass it the environment variables: 
`AWS_ACCESS_KEY_ID <YourAccessKey>`
`AWS_SECRET_ACCESS_KEY <YourSecretKey>`

### AWS Code Deploy
https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-codedeploy.html

## Run
`npm start`
