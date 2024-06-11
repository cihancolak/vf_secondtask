Node.js Uygulaması Kubernetes Deployment Projesi

Bu proje, bir Node.js uygulamasını Kubernetes ortamında kolayca dağıtmak için gerekli yapılandırmaları içerir.

Amaç:

    Node.js uygulamasını containerize etmek (Docker kullanarak).
    Kubernetes üzerinde ölçeklenebilir ve hataya dayanıklı bir şekilde çalıştırmak.
    Uygulamaya Load Balancer üzerinden dışarıdan erişim sağlamak.

Proje İçeriği:

    Dockerfile: Node.js uygulamasını Docker imajına dönüştürmek için gerekli talimatları içerir.
    deployment-and-service.yml: Kubernetes Deployment ve Service tanımlarını bir arada bulunduran YAML dosyasıdır.
        Deployment: Uygulamanın kaç replika (kopya) olarak çalışacağını, hangi Docker imajını kullanacağını ve port ayarlarını belirler.
        Service: Uygulamaya nasıl erişileceğini tanımlar (LoadBalancer tipi). Ayrıca, uygulamaya gelen istekleri doğru pod'lara yönlendirir.
    index.js: Node.js uygulamasının kaynak kodunu içerir. Basit bir HTTP sunucusu oluşturur ve farklı endpoint'ler için yanıtlar döndürür.

Nasıl Kullanılır:

    Docker İmajını Oluştur:

    docker build -t thetips4you/nodeapp:latest .


Docker İmajını Yayınla: (Docker Hub hesabınız varsa)


docker push thetips4you/nodeapp:latest 


Kubernetes Yapılandırmasını Uygula:

kubectl apply -f deployment-and-service.yml


Uygulamaya Erişim:

    Load Balancer'ın dış IP adresini öğrenmek için:
    Bash

    kubectl get services nodeapp-service

    Kodu dikkatli kullanın.

        Tarayıcınızda veya API istemcinizde bu IP adresini kullanarak uygulamaya erişebilirsiniz. Örnek endpoint'ler:
            http://<EXTERNAL_IP>/
            http://<EXTERNAL_IP>/will
            http://<EXTERNAL_IP>/ready
            http://<EXTERNAL_IP>/health

