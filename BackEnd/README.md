# 💿 BackEnd

Actividades relacionadas a la Misión de BackEnd (Java con Spring) para LaunchX - 
Innovacción Virtual.

## 📖 Semana 1

### Introducción

**Clase** - Conjunto de objetos con características similares que se
identifican por nombre, atributos y una serie de funciones o métodos aplicables
a todo el conjunto. Es una plantilla para caracterizar o definir objetos.

**Objeto** - Es una entidad real o imaginaria que tiene identidad, estado y un
comportamiento, conforme al conjunto de objetos (Clase) a la que pertenece. Es
una instancia de una clase.

### Pilares POO

**Abstracción** - Es la facultad intuitiva del ser humano que le permite
conocer la esencia de las cosas.

**Modularidad** - Es un proceso mental que permite distinguir los componentes
de los objetos que están siendo estudiados.

**Encapsulamiento** - Permite ocultar las características no relevantes de una
clase, destacar las relevantes y modelar su comportamiento. Dando como
resultado la _Abstracción de Datos_.

**Herencia** - Relación entre clases cuya existencia depende de un ancestro, la
clase base delega sus atributos y métodos a las clases derivadas.

**Polimorfismo** - Es el conjunto de operaciones aplicables a un objeto por
medio de los mensajes que invocan a alguno de los métodos definidos en la clase
a la que pertenece el objeto de acuerdo al dominio de la aplicación (Contexto).
 
\
Un objeto ``launchx`` es una instancia de la clase ``Innovaccion``.

```
    Innovaccion launchx = new Innovaccion();
```

\
Una clase en Java contiene lo siguiente:

- Campos
- Métodos
- Constructores
- Bloques
- Clases anidadas e interfaces

```
    class <class name> {
        field;
        method;
    }
```

### Herencia

Una clase puede estar _ASOCIADA_ a otra (es débilmente acoplada)(a corto plazo).
"USA UN".

_AGREGACIÓN_ (depende de los servicios a largo plazo). "TIENE UN".

_COMPOSICIÓN_ (permanente). "CONTIENE UN".

- Simple
- Multinivel 
- Jerárquica

### Polimorfismo

- **Primitivo** - Sobrecarga de métodos
- **Real** - Redifinir métodos
- **Genérico** - Clases genéricas

## 📖 Semana 2

### Interfaces

**Abstracción** - Proceso de ocultar detalles, de IMPLEMENTACIÓN (cómo lo hace)

_Abstracción funcional_ - lo que hace

lo que hace 0 - 100% _abstract_ class (extends)

"" 100% _interface_ (implements)

### Thread & Runnable (Hilos)

Un hilo tiene 5 estados.

**Clase Thread**

- New
- Runnable
- Running - ThreadScheduler
- Non-Runnable - Blocked
- Terminated

La clase ``Thread`` extiende de la clase ``Object`` e implementa la clase
``Runnable``.

**Clase Runnable** 

Interface.

```
    public void run();
```

-> Lo que queremos que haga

### Input/Output - Sockets

## 📖 Semana 3

[Prácticas](https://github.com/josephLSalgado/BackEndJava)

- Modelado - practicaHarry

- Herencia y polimorfismo - practicaMona

## 📖 Semana 4

### Crear y ejecutar un contenedor Docker

- Traer imagen de `MySQL`

```
    docker pull mysql/mysql-server:latest
```

- Verificar imagenes

```
    docker images
```

- Crear un contenedor

```
    docker run --name=mySQLContainerInstance -p 3306:3306 -d mysql/mysql-server:latest
```

- Verificar que el contenedor se esté ejecutando

```
    docker ps
```

- Ejecutar el siguiente comando para buscar la contraseña que se generó
automáticamente

```
    docker logs mySQLContainerInstance
```

- Ejecutar contenedor

```
    docker exec -it mySQLContainerInstance mysql -uroot -p
```

### Crear una base de datos con MySQL

- Modificar la contraseña por una más sencilla, en este caso se utilizó
`password`.

```
    ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
```

- Crear una base de datos

```
    CREATE DATABASE myJavaDB;
```

- Usar dicha base de datos

```
    USE myJavaDB;
```

- Mostrar todas las bases de datos existentes

```
    SHOW DATABASES;
```

- Crear una tabla

```
    CREATE Table DeptosDalia(idDepto INT NOT NULL, nameDepto varchar(80) NOT 
    NULL, PRIMARY KEY (idDepto));
```

**PRIMARY KEY** -> identificador único

**Llaves primarias y llaves foráneas** -> enlazar una tabla con otra

- Mostrar las tablas existentes

```
    SHOW TABLES;
```

- Agregar filas a la tabla

```
    INSERT INTO DeptosDalia VALUES
    -> (1,'TI'), (2,'News and Media'), (3,'Producto'), (4,'Marketing'),
       (5,'Ventas B2C'), (6,'Ventas B2B'), (7,'Academy'), (8,'Community');
```

- Mostrar columnas de la tabla

```
    SHOW COLUMNS FROM DeptosDalia;
```

- Ver TODOS los registros de la tabla

```
    SELECT * FROM DeptosDalia;
```

- Crear una tabla que contiene una llave foránea que hace referencia a otra
tabla

```
    CREATE TABLE EmpleadosDalia (idEmp INT NOT NULL, nameEmp varchar(80) NOT
    NULL, idDepto INT NOT NULL, PRIMARY KEY (idEmp), FOREIGN KEY (idDepto)
    REFERENCES DeptosDalia (idDepto))ENGINE=INNODB;
```

## 🔗 Más información

[Misión BackEnd](https://github.com/LaunchX-InnovaccionVirtual/MissionJAVA)

LaunchX - Innovacción Virtual.