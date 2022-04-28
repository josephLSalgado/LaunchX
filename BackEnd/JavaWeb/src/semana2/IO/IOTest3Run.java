package semana2.IO;

import java.io.FileInputStream;
import java.io.IOException;

public class IOTest3Run {
    public static void main(String[] args) {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                try {
                    FileInputStream fis = new FileInputStream(".\\hola.txt");
                    int i = fis.read();
                    System.out.println((char)i);
                    fis.close();
                } catch (IOException ioe) {
                    ioe.printStackTrace();
                }
            }
        };

        Thread t1 = new Thread(r);
        t1.start();
    }
}
