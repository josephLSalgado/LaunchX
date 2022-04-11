package semana1.viernes;

class Animal2 {
    void eat() {
        System.out.println("Comiendo...");
    }
}

class Perro extends Animal {
    void eat() {
        System.out.println("Comiendo croquetas");
    }
}

class Cachorro extends Animal {
    void eat() {
        System.out.println("Tomando agua");
    }
}

public class Polimorfismo2 {
    public static void main(String[] args) {
        Animal dander;
        dander = new Animal();
        dander.eat();
        dander = new Perro();
        dander.eat();
        dander = new Cachorro();
        dander.eat();
    }
}
