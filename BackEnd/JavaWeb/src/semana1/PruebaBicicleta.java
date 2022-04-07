package semana1;

public class PruebaBicicleta {
    public static void main(String[] args) {
        def();
    }

    // Es static, porque quiero que se muestre en main
    public static void def() {
        Bicicleta biciMountain = new Bicicleta();
        Bicicleta biciPista = new Bicicleta("Blanco");

        biciMountain.setColor("Negra");
        biciMountain.setPins(6);
        biciMountain.setRodada(26);
        biciMountain.setVelocidad(13.2);

        String msg = "Soy una bici de montaña con estas características: ";
        msg += "\nColor: " + biciMountain.getColor();
        msg += "\nPins: " + biciMountain.getPins();
        msg += "\nRodada: " + biciMountain.getRodada();
        msg += "\nVelocidad: " + biciMountain.getVelocidad();

        System.out.print(msg);
    }
}
