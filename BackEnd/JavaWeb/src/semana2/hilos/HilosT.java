package semana2.hilos;

public class HilosT extends Thread{
    @Override // runnable
    public void run() {
        System.out.println("El hilo se está ejecutando");
    }

    /*
    public void start() {
        // Iniciar la ejecución de un hilo
        // La JVM llama al método run() del hilo
    }

    sleep() - detiene de manera temporal el número especificado
    join() - espera a que el hilo se muera
    getPriority() - regresa la prioridad del hilo
    setPriority() - establecer la prioridad del hilo
    getName() - nombre del hilo
    currentThread() - referencia al hilo que se está ejecutando
    getId() - regresa el id del hilo
    Thread.State getState() - regresa el state del hilo
    isAlive() - si está vivo
    */

    public static void main(String[] args) {
        HilosT hilo = new HilosT(); // Entra al state new
        hilo.start();
    }
}

class HilosR implements Runnable {
    @Override
    public void run() {
        System.out.println("El hilo de runnable está corriendo");
    }

    public static void main(String[] args) {
        HilosR h = new HilosR();
        Thread t = new Thread(h);
        t.start();
    }
}