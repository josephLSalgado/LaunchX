public class Teemo extends Champion implements TeemoActionCallbacks {
    public Teemo(int id, String name, String role, String difficulty, String description) {
        super(id, name, role, difficulty, description);
    }

    @Override
    public void guerrillaWarfare(Screen s) {
        s.setVisible(true);
        s.out(showMessage(), "Helvetica", 28, Colors.BlueHorizon);
        s.showImage("guerrillaWarfare.gif");
        s.setBounds(200, 100, 1100, 900);
    }

    @Override
    public void blindingDart(Screen s) {
        s.cls();
        s.repaint();
        s.out(showMessage(), "Helvetica", 28, Colors.BlueHorizon);
        s.showImage("blindingDart.gif");
        s.setBounds(200, 100, 1100, 900);
    }

    @Override
    public void moveQuick(Screen s) {
        s.cls();
        s.repaint();
        s.out(showMessage(), "Helvetica", 28, Colors.BlueHorizon);
        s.showImage("moveQuick.gif");
        s.setBounds(200, 100, 1100, 900);
    }

    @Override
    public void toxicShot(Screen s) {
        s.cls();
        s.repaint();
        s.out(showMessage(), "Helvetica", 28, Colors.BlueHorizon);
        s.showImage("toxicShot.gif");
        s.setBounds(200, 100, 1100, 900);
    }

    @Override
    public void noxiousTrap(Screen s) {
        s.cls();
        s.repaint();
        s.out(showMessage(), "Helvetica", 28, Colors.BlueHorizon);
        s.showImage("noxiousTrap.gif");
        s.setBounds(200, 100, 1100, 900);
    }
}
