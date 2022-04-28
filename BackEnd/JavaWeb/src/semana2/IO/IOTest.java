package semana2.IO;

import java.io.FileOutputStream;
import java.io.IOException;

public class IOTest {
    public static void main(String[] args) {
        /*
        try {
            FileOutputStream fos = new FileOutputStream("D:\\josep\\Desktop\\hola.txt");
            // Escribe un byte
            fos.write(65);
            // Flujo que abrimos, flujo que cerramos
            fos.close();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
         */

        Runnable t1 = new Runnable() {
            @Override
            public void run() {
                try {
                    FileOutputStream fos = new FileOutputStream(".\\holaHilo.txt");
                    // Escribe un byte
                    fos.write(65);
                    // Flujo que abrimos, flujo que cerramos
                    fos.close();
                } catch (IOException ioe) {
                    ioe.printStackTrace();
                }
            }
        };

        Thread writeFile = new Thread(t1);

        writeFile.start();
    }
}
