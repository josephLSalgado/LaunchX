package semana1.viernes;

/*
Overload
Override - Redefine
Overwrite
 */

public class Bike {
    private int velocidad;
    private String color, marca;

    // Constructor por omisión
    public Bike() {}

    // Sobrecarga de constructores
    public Bike(String color) { this.color = color; }

    public Bike(String color, int velocidad) {
        this.color = color;
        this.velocidad = velocidad;
    }

    public Bike(String color, String marca, int velocidad) {
        this.color = color;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    public int getVelocidad() { return velocidad; }
    public String getColor() { return color; }
    public String getMarca() { return marca; }
}
