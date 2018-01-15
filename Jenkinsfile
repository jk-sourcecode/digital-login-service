node {
    def app

    stage('Clone repository') {
        checkout scm
    }
  
  stage('Build image') {
      
      sh "docker build -t digital_login-service ."
      }
    
}
