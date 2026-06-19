# Student API

Proyecto realizado con Spring Boot para gestionar estudiantes mediante una API REST.
La aplicación permite listar, crear, buscar, actualizar y eliminar estudiantes usando endpoints REST y pruebas con Postman.

## Integrantes

* Melany Rosales
* Josué Gómez

## Tecnologías utilizadas

* Java 17
* Spring Boot
* Spring Web
* Spring Data JPA
* H2 Database
* Maven
* Postman
* GitHub

## Estructura del proyecto

```text
student-api/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/studentapi/
│       │       ├── controller/
│       │       │   └── StudentController.java
│       │       ├── model/
│       │       │   └── Student.java
│       │       ├── repository/
│       │       │   └── StudentRepository.java
│       │       ├── service/
│       │       │   └── StudentService.java
│       │       └── StudentApiApplication.java
│       └── resources/
│           └── application.properties
└── pom.xml
```

## Descripción de las clases

### Student.java

Clase que representa la entidad estudiante. Contiene los atributos:

* id
* firstName
* lastName
* email
* age

### StudentRepository.java

Interfaz que extiende de `JpaRepository` y permite realizar operaciones con la base de datos sin escribir consultas SQL manuales.

### StudentService.java

Clase donde se maneja la lógica del CRUD de estudiantes.
Permite listar, buscar, crear, actualizar y eliminar registros.

### StudentController.java

Controlador REST que expone los endpoints de la API bajo la ruta:

```text
/api/students
```

## Endpoints de la API

| Método | URL                  | Descripción                       |
| ------ | -------------------- | --------------------------------- |
| GET    | `/api/students`      | Lista todos los estudiantes       |
| GET    | `/api/students/{id}` | Busca un estudiante por ID        |
| POST   | `/api/students`      | Crea un nuevo estudiante          |
| PUT    | `/api/students/{id}` | Actualiza un estudiante existente |
| DELETE | `/api/students/{id}` | Elimina un estudiante             |

## Cómo ejecutar el proyecto

1. Abrir el proyecto en IntelliJ IDEA.
2. Esperar a que Maven cargue las dependencias.
3. Ejecutar la clase principal:

```text
StudentApiApplication.java
```

4. Verificar que la aplicación esté corriendo en el puerto 8080.

URL para probar en el navegador:

```text
http://localhost:8080/api/students
```

Si no hay estudiantes registrados, debe mostrar:

```json
[]
```

## Ejemplo JSON para crear un estudiante

Para crear un estudiante con Postman, usar el método `POST` en:

```text
http://localhost:8080/api/students
```

Body → raw → JSON:

```json
{
  "firstName": "Melany",
  "lastName": "Rosales",
  "email": "melany.rosales@email.com",
  "age": 20
}
```

## Ejemplo JSON para actualizar un estudiante

Para actualizar un estudiante con Postman, usar el método `PUT` en:

```text
http://localhost:8080/api/students/1
```

Body → raw → JSON:

```json
{
  "firstName": "Melany",
  "lastName": "Rosales Mora",
  "email": "melany.rosales@email.com",
  "age": 21
}
```

## Pruebas realizadas en Postman

Se realizaron las siguientes pruebas:

1. `GET /api/students` para listar estudiantes.
2. `POST /api/students` para crear un estudiante.
3. `GET /api/students/1` para buscar un estudiante por ID.
4. `PUT /api/students/1` para actualizar un estudiante.
5. `DELETE /api/students/1` para eliminar un estudiante.
6. `GET /api/students` para confirmar que el estudiante fue eliminado.

## Base de datos H2

La aplicación utiliza una base de datos H2 en memoria.

Consola H2:

```text
http://localhost:8080/h2-console
```

Datos de conexión:




## Trabajo realizado por integrante

### Melany Rosales

* Creación del proyecto Spring Boot.
* Creación de la entidad `Student`.
* Creación de `StudentRepository`.
* Creación de `StudentService`.
* Configuración de H2 en `application.properties`.
* Subida inicial del proyecto a GitHub.

### Josué Gómez

* Creación de `StudentController`.
* Pruebas de los endpoints en Postman.
* Documentación del proyecto en el archivo `README.md`.
* Verificación del funcionamiento del CRUD.

## Conclusión

Con este laboratorio se logró construir una API REST funcional utilizando Spring Boot.
La aplicación permite realizar operaciones CRUD sobre estudiantes y fue validada mediante Postman. Además, se utilizó GitHub para trabajar de forma colaborativa y mantener el control de versiones del proyecto.
