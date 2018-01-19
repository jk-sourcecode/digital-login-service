node {
    stage('Pull Source Code') {
        checkout scm
    }
    stage('Install Packages') {
        sh 'export PATH=/usr/local/bin'
        sh 'npm install'
    }
    /*stage('Test') {
        sh 'npm test'
    }*/
    stage('Build image') {
        sh 'docker build -t kabilj/digital_login-service .'
      }
    stage('Push Image') {
        docker.withRegistry('','docker-hub-credentials') {
            sh 'docker push kabilj/digital_login-service'
        }
    }
    stage('Cleanup') {
        sh 'rm node_modules -rf'
    }
}
