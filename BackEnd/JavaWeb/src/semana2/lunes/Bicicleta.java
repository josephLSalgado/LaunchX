package semana2.lunes;

abstract class Mountain {
    Mountain() {
        System.out.println("Se ha creado una bicicleta de montaña.");
    }

    abstract void cambiarVelocidad();
    void cambiarColor() {
        System.out.println("Cambiando color a rojo.");
    }
}

class Magistroni extends Mountain {
    @Override // Etiqueta no necesaria de colocar
    void cambiarVelocidad() {
        System.out.println("Se deben desbloquear las perillas del manubrio primero");
    }
}

public class Bicicleta {
    void cambiarVelocidad() {
        System.out.println("Gira las perillas.");
    }

    public static void main(String[] args) {
        Mountain bicicleta1 = new Magistroni();
        bicicleta1.cambiarVelocidad();
        bicicleta1.cambiarColor();
    }
}
