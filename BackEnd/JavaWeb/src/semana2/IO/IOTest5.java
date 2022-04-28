package semana2.IO;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class IOTest5 {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream(".\\magic.txt");
            BufferedOutputStream bos = new BufferedOutputStream(fos);

            String s = "Hola Viajeros de \nInnovacción Virtual";
            byte b[] = s.getBytes();

            bos.write(b);
            bos.flush();

            bos.close();
            fos.close();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
    }
}
