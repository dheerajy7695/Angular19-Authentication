pipeline {
    agent any

    stages {
        stage('checkout git repo') {
            steps {
                checkout scm 
            }
        }

        stage('Test the repo'){
            steps {
                bat 'echo npm install'
            }
        }
    }
}
