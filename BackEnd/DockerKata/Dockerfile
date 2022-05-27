# Utilizamos el OpenJDK como imagen base de mi proyecto
FROM openjdk:18

# Creamos un nuevo folder para los archivos de mi aplicación que estarán
# contenidos en mi contenedor.
RUN mkdir /app

# Copiamos los archivos del host al contenedor
COPY out/production/DockerKata/ /app

# 'RUN' todo lo que tiene que ver con docker y 'COPY' con lo que haga la máquina

# Asignamos el directorio para ejecuciones futuras de comandos
WORKDIR /app

# Ejecutamos la clase Main
CMD java Main