pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
  }
  triggers {
    //cron('H 7-12 * * *')
    gitlab(
      triggerOnPush: true,
      triggerOnMergeRequest: true
    )
  }
  stages {
    stage('Deploy') {
      steps {
        sh 'docker build -t fontys-cafe .'
        sh 'docker rm -f fontys-cafe-dev || true'
        sh 'docker run -d -p 8093:8093 --restart always --name fontys-cafe-dev fontys-cafe'
        sh 'docker image prune -f'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
