pipeline {
    
    agent any

    stages {
        stage('Docker build image') {
            steps {
                    sh 'docker build -t $DOCKERHUB_USERNAME/$DOCKERHUB_REPO:$BUILD_NUMBER .'
            }
        }
        stage('Docker login') {
            withCredentials([string(credentialsId: 'dockerhub', variable: 'DOCKERHUB')]) {
                steps {
                    sh 'docker login -u $DOCKERHUB' -p $DOCKERHUB'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

}
