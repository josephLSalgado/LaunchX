public class Game {
    public static void main(String[] args) throws InterruptedException {
        testTeemo();
    }

    private static void testTeemo() throws InterruptedException {
        Screen screen = new Screen();

        Teemo teemo = new Teemo(
                01,
                "Teemo",
                "Marksman",
                "Moderate",
                "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit."
        );
        /*
        teemo.guerrillaWarfare(screen);
        Thread.sleep(3000);
        teemo.blindingDart(screen);
         */
        Runnable attack = new Runnable() {
            @Override
            public void run() {
                try {
                    teemo.guerrillaWarfare(screen);
                    Thread.sleep(3000);

                    teemo.blindingDart(screen);
                    Thread.sleep(3000);

                    teemo.moveQuick(screen);
                    Thread.sleep(3000);

                    teemo.toxicShot(screen);
                    Thread.sleep(3000);

                    teemo.noxiousTrap(screen);
                    Thread.sleep(3000);
                } catch (InterruptedException ie) {
                    ie.printStackTrace();
                }
            }
        };

        Thread attackTeemo = new Thread(attack);

        attackTeemo.start();
    }
}
