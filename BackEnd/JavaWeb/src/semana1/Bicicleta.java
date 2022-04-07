package semana1;

public class Bicicleta {
    // Constructor por omisión
    Bicicleta() {}

    Bicicleta(String color) {
        this.color = color;
    }

    // Características - Campos
    public int pins, rodada;
    public double velocidad;
    public String color;

    public int getPins() { return pins; }
    public int getRodada() { return rodada; }
    public double getVelocidad() { return velocidad; }
    public String getColor() { return color; }

    // Métodos
    // Sólo setters y getters son permitidos
    // A excepción del printState()
    public boolean setPins(int pins) {
        if (pins > 0) {
            this.pins = pins;
            return true;
        } else
            return false;
    }

    public boolean setRodada(int rodada) {
        if (rodada > 0) {
            this.rodada = rodada;
            return true;
        } else
            return false;
    }

    public boolean setVelocidad(double velocidad) {
        if (velocidad >= 0) {
            this.velocidad = velocidad;
            return true;
        } else
            return false;
    }

    public boolean setColor(String color) {
        if (!color.isEmpty()) {
            this.color = color;
            return true;
        } else
            return false;
    }
    public String printState() {
        return "pins: " + pins + "\n" +
                "rodada: " + rodada + "\n" +
                "velocidad: " + velocidad + "\n" +
                "color: " + color;
    }

    // *Bajo acoplamiento, alta coerción*
}
