package semana1.viernes;

// Se pueden crear clases dentro de una clase
class Persona {
    int id;
    String nombre;

    Persona(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

public class Emp extends Persona{
    double salario;

    Emp(int id, String nombre, double salario) {
        // con super se llama al contructor de la clase de quien hereda, lo que
        // hay arriba
        super(id, nombre);
        this.salario = salario;
    }

    void display() {
        System.out.println(id + " " + nombre + " " + salario);
    }
}

class TestPersonaEmpleado {
    public static void main(String[] args) {
        Emp empleado = new Emp(1, "David", 4550.32);
        empleado.display();
    }
}