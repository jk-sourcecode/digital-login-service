node {
    def app

    stage('Pull Source Code') {
        checkout scm
    }
  
    stage('Build image') {
        sh "docker build -t digital_login-service ."
      }
    
    stage('Push Image') {
        sh "docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials') {
            app.push('latest') 
        } "
    }
}
