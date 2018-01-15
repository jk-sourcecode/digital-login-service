node {
    def app

    stage('Pull Source Code') {
        checkout scm
    }
  
    stage('Build image') {
        sh "docker build -t digital_login-service ."
      }
    
}
