pipeline {
    agent any

    stages {
        stage('Checkout Git') {
            steps {
                checkout scm
            }
        }
        stage('Install NPM') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                bat 'npx ng test --watch=false --browsers=ChromeHeadless'
            }
        }
        stage('Build'){
            steps{
                echo 'Building angular project'
                bat 'npx ng build --configuration=production'
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
