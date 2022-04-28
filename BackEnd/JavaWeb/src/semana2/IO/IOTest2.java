package semana2.IO;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class IOTest2 {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream(".\\magia.txt");
            String s = "Magia!!";
            byte b[] = s.getBytes();
            fos.write(b);
            fos.close();
            System.out.println("Magia!!");
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
    }
}
