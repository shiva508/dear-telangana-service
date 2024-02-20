# dear-telangana-service

## Containerization

### Docker

#### Build Image
##### docker build -t dasari508201/dear-telangana-service:version .

#### Run Image
##### docker run --name dear-telangana-service --rm -p 8088:8088 dasari508201/dear-telangana-service:0.0.1


### Run Application Local
#### ./mvnw spring-boot:run


### Start mongo-db server
#### kubectl apply -f .

### Delete mongo-db server
#### kubectl delete -f .

### Start mongo-db client
#### kubectl apply -f .

### Delete mongo-db client
#### kubectl delete -f .
