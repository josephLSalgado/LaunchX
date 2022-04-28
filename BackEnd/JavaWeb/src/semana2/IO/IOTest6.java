package semana2.IO;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class IOTest6 {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream(".\\magia.txt");
        BufferedInputStream bis = new BufferedInputStream(fis);

        int i = 0;

        while ((i = bis.read()) != -1) {
            System.out.print((char)i);
        }
        bis.close();
        fis.close();
    }
}
