node {
    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("dpcalfola/fola-web-room")
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker_access') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}

stage('Build image') {
        app = docker.build("dpcalfola/fola-web-room")
}

stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker_access') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
    }
}