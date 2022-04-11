package semana1.viernes;

/*
HERENCIA
-Simple - de empleado a Programadora

-Multinivel - de empleado a programadora a web

-Jerarquica - de empleado a programadora o a web

POLIMORFISMO
*/

public class Empleado {
    double salario = 40000;
}

class Programadora extends Empleado {
    int bono = 1000;

    public void main() {
        Programadora fer = new Programadora();
        System.out.println("El salario de la programadora es: " +
                fer.salario);
        System.out.println("El bono de la programadora es: " +
                fer.bono);
    }

    void mensaje() {
        System.out.println("Soy programadora.");
        main();
    }
}

class Web extends Programadora {
    public static void main(String[] args) {
        Web w = new Web();
        w.mensaje();
    }
}
