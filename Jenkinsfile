node {
    env.NODEJS_HOME = "${tool 'NodeJS6.9.4'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    stage('Pull Source Code') {
        checkout scm
    }
    stage('Install Packages') {
       /* sh 'export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin' */
       /* def nodeHome = tool name: 'NodeJS6.9.4'
        sh "${nodeHome}/bin/node -v" */
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      /*  withNPM(npmrcConfig:'my-custom-npmrc') {
            echo "Performing npm build..."
            sh 'npm install'
        } */
    }
    stage('Test') {
        sh 'npm test'
    }
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
