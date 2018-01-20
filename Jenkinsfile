node {
    env.NODEJS_HOME = "${tool 'NodeJS6.9.4'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    stage('Pull Source Code') {
        checkout scm
    }
    stage('Install Packages') {
        sh 'npm install'
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
