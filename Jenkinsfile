node {
    def app

    stage('Clone repository') {
        checkout scm
    }
    stage('Build Docker'){

            sh './dockerBuild.sh'
       }
    
}
