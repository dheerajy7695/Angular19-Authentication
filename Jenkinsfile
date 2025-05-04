pipeline {
    agent any

    stages {
        stage('checkout git repo') {
            steps {
                checkout scm
            }
        }
        stage('install npm') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test the repo') {
            steps {
                bat 'npx ng test --watch=false --browsers=ChromeHeadless'
            }
        }
    }

    post {
        success {
            echo 'All tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
