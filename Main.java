public class Main {

    public static void main(String[] args) {
        // \n - new line
        // \t - tab
        // \b - backspace

        // Exercise 1a: Shopping List with a method per ingredient

	    System.out.println("SHOPPING LIST");
	    Milk();
	    Eggs();
	    Bread();
    }

    public static void Milk() {
        System.out.println("\t- Milk");
        System.out.println("\t\t> Semi-skimmed");
        System.out.println("\t\t> Medium");
    }

    public static void Eggs() {
        System.out.println("\t- Eggs");
        System.out.println("\t\t> Free-range");
    }

    public static void Bread() {
        System.out.println("\t- Bread");
        System.out.println();
        List();
    }

    // Exercise 1b: Shopping List using straight println methods

    public static void List() {
        System.out.println("SHOPPING LIST");
        System.out.println("\t- Milk");
        System.out.println("\t\t> Semi-skimmed");
        System.out.println("\t\t> Medium");
        System.out.println("\t- Eggs");
        System.out.println("\t\t> Free-range");
        System.out.println("\t- Bread");
        System.out.println();
        Single();
    }

    // Exercise 1c: Shopping List in a single print method

    public static void Single() {
        System.out.print("SHOPPING LIST\n\t- Milk\n\t\t> Semi-skimmed\n\t\t> Medium\n\t- Eggs\n\t\t> Free-range\n\t-Bread");
        System.out.println();
        Cake();
    }

    // Exercise 2: One word per method

    public static void Cake() {
        firstWord();
        secondWord();
        thirdWord();
        fourthWord();
        fifthWord();
    }

    public static void firstWord() {
       System.out.println("The");
    }

    public static void secondWord() {
        System.out.println("\tCake");
    }

    public static void thirdWord() {
        System.out.print("Is");
    }

    public static void fourthWord() {
        System.out.println("\t\tA");
    }

    public static void fifthWord() {
        System.out.println("\tLie.");
    }
}