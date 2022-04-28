package semana2.lunes;

abstract class Sombra {
    abstract void dibujarSombra();
}

class Arma extends Sombra {
    void dibujarSombra() {
        System.out.println("Dibujando una sombra azul");
    }
}

// Se trae lo de Arma
public class Personaje extends Arma{
    public static void main(String[] args) {
        Sombra flecha = new Personaje();
        Sombra arco = new Arma();

        flecha.dibujarSombra();
        arco.dibujarSombra();
    }

    //Redefine el método
    void dibujarSombra() {
        System.out.println("Dibujando una sombra blanca");
    }
}
