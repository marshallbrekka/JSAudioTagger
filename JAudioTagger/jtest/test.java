public class test {
    public static void main(String[] args) {
        byte[] a = new byte[4];
        a[0] = 4;
        byte[] b = new byte[3];
        b[0] = 2;
        
        System.arraycopy(a, 0, b, 0, a.length);
        System.out.println(b);
    }
}