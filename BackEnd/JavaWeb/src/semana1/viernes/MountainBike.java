package semana1.viernes;

/*
-Acoplamiento: medida de dependencia entre dos módulos

-Cohesión: una clase hace una sola cosa y la hace bien


-Firma o signatura tiene un valor (tipo) de retorno, nombre y parámetros

-Overload ocurre en una sola clase
-Override tipo de retorno idéntico, ocurre en dos clases o más, misma signatura
 */
public class MountainBike {
    public static void main(String[] args) {
        show();
    }

    public static void show() {
        Bike b = new Bike("Azul", 6);

        System.out.println(b.getColor());
        System.out.println(b.getVelocidad());
    }
}
