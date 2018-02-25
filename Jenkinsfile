node {
    env.NODEJS_HOME = "${tool 'NodeJS6.9.4'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    def PACKAGE_VERSION = sh(returnStdout: true, script: /sed -nE 's\/^\s*"version": "(.*?)",$\/\1\/p' package.json/).trim()

    stage('Pull Source') {
        echo 'Pulling source code from github'
        checkout scm
    }
   /* stage('Setup Environment') {
        echo 'Installing NPM packages to run test package'
        sh 'npm install'
    }
    stage('Run Test') {
        echo 'Excueting test case using mocha chai test framework'
        sh 'npm test'
    }*/
    stage('Build Image') {
        echo 'Building docker image'
        echo """building version-${PACKAGE_VERSION}"""
        /* Below commanded code is used to build the image based on docker hub repository */
        /*sh 'docker build -t kabilj/digital_login-service .'*/
        /* Build and tag the image for ecr */
        sh """docker build -t 491933328047.dkr.ecr.eu-west-2.amazonaws.com/digital_login-service:version-${PACKAGE_VERSION} ."""
    }
    stage('Push Image') {
        echo 'Publishing docker image'
       /* Below commanded code to push the image to docker hub */
       /* docker.withRegistry('','docker-hub-credentials') {
            sh 'docker push kabilj/digital_login-service'
        }*/
        /* Pushing docker image to aws ecr */
        docker.withRegistry('https://491933328047.dkr.ecr.eu-west-2.amazonaws.com','ecr:eu-west-2:ee7f1f6c-e865-4c32-a899-7e41fe5cb2f1') {
            sh """docker push 491933328047.dkr.ecr.eu-west-2.amazonaws.com/digital_login-service:version-${PACKAGE_VERSION}"""
        }   
    
    }
}
