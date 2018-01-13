node {
    def app

    stage('Clone repository') {
        checkout scm
    }
   stage("First stage") {
    dockerFingerprintFrom([dockerfile: "."])
  }
  stage('Build image') {
      app = docker.build("digital_login-service")
      }
    
}
