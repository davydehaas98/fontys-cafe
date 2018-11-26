pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
  }
  stages {
    stage('Verify Tools') {
      steps {
        parallel (
          node: {
            sh 'npm -v'
          },
          docker: {
            sh 'docker --version'
            sh 'which docker'
          }
        )
      }
    }
    stage('Build') {
      steps {
        sh 'npm prune'
        sh 'npm install'
        sh 'npm run production'
      }
    }
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
