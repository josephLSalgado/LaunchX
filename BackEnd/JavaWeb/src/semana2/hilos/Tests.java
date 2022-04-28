package semana2.hilos;

public class Tests extends Thread{
    @Override
    public void run() {
        for(int i = 1; i <= 10; i++) {
            try {
                Thread.sleep(500);
                System.out.println(i);
            } catch (InterruptedException ie) {
                ie.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        Tests h1 = new Tests();
        h1.start();

        HilosS h2 = new HilosS();
        Thread hr2 = new Thread(h2);
        hr2.start();
    }
}

class HilosS implements Runnable {
    @Override
    public void run() {
        for(int i = 1; i < 10; i++) {
            try {
                Thread.sleep(500);
                System.out.println(i);
            } catch (InterruptedException ie) {
                ie.printStackTrace();
            }
        }
    }
}
