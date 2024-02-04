FROM openjdk:17-alpine
WORKDIR /opt
ENV PORT 8088
EXPOSE 8088
COPY target/dear-telangana-service-0.0.1-SNAPSHOT.jar /opt/dear-telangana-service.jar
ENTRYPOINT exec java $JAVA_OPTS -jar dear-telangana-service.jar