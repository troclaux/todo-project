pipeline {
    
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                script {
                    dockerapp = docker.build("troclaux/todo-backend")
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Push to Dockerhub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            dockerapp.push("latest")
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
