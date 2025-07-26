import java.util.*;

public class InvoiceGenerator {
    static List<String> items = new ArrayList<>();
    static List<Integer> prices = new ArrayList<>();

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("start invoicing");
        while (true) {
            System.out.println("1. Add Item\n2. Show\n3. Save\n4. Quit");
            int c = s.nextInt();
            s.nextLine();
            if (c == 1) {
                System.out.print("Item name: ");
                String n = s.nextLine();
                System.out.print("Price: ");
                int p = s.nextInt();
                items.add(n);
                prices.add(p);
            } else if (c == 2) {
                for (int i = 0; i < items.size(); i++) {
                    System.out.println(items.get(i) + " - " + prices.get(i));
                }
            } else if (c == 3) {
                System.out.print("filename: ");
                String fn = s.nextLine();
                try {
                    java.io.PrintWriter w = new java.io.PrintWriter(fn);
                    for (int i = 0; i < items.size(); i++) {
                        w.println(items.get(i) + " : " + prices.get(i));
                    }
                    w.close();
                } catch (Exception e) {
                }
            } else if (c == 4) {
                break;
            } else {
                System.out.println("???");
            }
        }
    }
}
