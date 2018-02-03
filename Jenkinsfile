node {
    env.NODEJS_HOME = "${tool 'NodeJS6.9.4'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    stage('Pull Source') {
        checkout scm
    }
    stage('Setup Environment') {
        sh 'npm install'
    }
    stage('Run Test') {
        sh 'npm test'
    }
    stage('Build Image') {
        /*sh 'docker build -t kabilj/digital_login-service .'*/
        sh 'docker build -t kabilj/digital_login-service .'
    }
    stage('Push Image') {
       /* docker.withRegistry('','docker-hub-credentials') {
            sh 'docker push kabilj/digital_login-service'
        }*/
        echo 'Publishing docker containers'
     sh '\$(aws ecr get-login)'
 
     sh 'docker tag digital_login-service:latest 491933328047.dkr.ecr.eu-west-2.amazonaws.com/digital_login-service:latest'
	 
     sh 'docker push 491933328047.dkr.ecr.eu-west-2.amazonaws.com/digital_login-service:latest'
    }
}
