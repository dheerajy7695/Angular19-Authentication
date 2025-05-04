pipeline {
    agent any

    stages {
        stage('checkout git repo') {
            steps {
                checkout scm 
            }
        }
        stage('install npm'){
            steps {
                bat 'npm install'
            }
        }
        stage('Test the repo'){
            steps{
                bat 'npm run test'
            }
        }
    }
}
