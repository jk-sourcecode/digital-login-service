node {
    def app

    stage('Pull Source Code') {
        checkout scm
    }
  
    stage('Build image') {
        sh "docker build -t kabilj/digital_login-service ."
      }
    
    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials') {
            sh "docker push kabilj/digital_login-service:latest"
        }
    }
}
