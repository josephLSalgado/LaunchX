package semana1.viernes;

// No se puede tener una misma clase en el mismo paquete

class Bike2 {
    void run() {
        System.out.println("running...");
    }
}

public class Polimorfismo extends Bike2{
    @Override
    void run() {
        System.out.println("running safely with 60 miles per hour");
    }

    public static void main(String[] args) {
        // Ligadura dinámica - upcasting
        // Objeto de tipo Bike2 pero se construye con Poliformismo
        Bike2 bike2 = new Polimorfismo();
        bike2.run();
    }
}
