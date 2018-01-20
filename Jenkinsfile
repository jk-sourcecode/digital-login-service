node {
    
    stage('Pull Source Code') {
        checkout scm
    }
    stage('Install Packages') {
       /* sh 'export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin' */
        def nodeHome = tool name: 'v6.11.5', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        sh "${nodeHome}/bin/node -v"
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
