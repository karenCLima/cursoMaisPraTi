import java.util.List;

import exercicio01.Task;
import exercicio01.TaskManager;
import exercicio02.Browser;
import exercicio02.Site;
import exercicio03.Editor;
import exercicio04.SimpleEditor;
import exercicio05.Player;
import exercicio06.BankLine;
import exercicio07.Printer;
import exercicio08.ProcessManager;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Lista 01
		
		//Exercício 1
		

//		TaskManager taskManager = new TaskManager();
//		
//		taskManager.addTask("comprar caderno");
//		taskManager.addTask("comprar lapis");
//		taskManager.addTask("comprar borracha");
//		
//		System.out.println(taskManager);
//		System.out.println(taskManager.getTasks().get(0));
//		
//		taskManager.removeTask(1);
//		
//		System.out.println(taskManager);
//		
//		taskManager.updateTask(2);
//		
//		System.out.println(taskManager);
		
		
		
		//Exercicio 02
//		
//		
//		Browser browser = new Browser();
//		
//		browser.search("www.google.com");
//		browser.search("www.bing.com");
//		browser.search("www.chatGPT.com");
//		browser.search("www.gemini.com");
//		browser.search("www.eclipse.com");
//		
//		System.out.println(browser);
//		
//		browser.search("www.figma.com");
//		
//		System.out.println(browser);
		
		
		
		//Exercicio 03
		
//		Editor editor = new Editor();
//		
//		String text1="First  version...";
//		String text1_1="Second version...";
//		String text1_2="Third version  ...    ";
//		
//		System.out.println(editor.edit(text1));
//		System.out.println(editor.edit(text1_1));
//		System.out.println(editor.edit(text1_2));
//		
//		System.out.println("Version Control: "+ editor.getActions());
//		
//		System.out.println(editor.undo());
//		System.out.println("Version Control: "+ editor.getActions());
//		System.out.println(editor.undo());
//		System.out.println("Version Control: "+ editor.getActions());
		
		
		
		//Exercicio 04
		
//		SimpleEditor editor = new SimpleEditor();
//		
//		String text1="First  version...";
//		String text1_1="Second version...";
//		String text1_2="Third version  ...    ";
//		String text1_3="Fourth version  ...  ...   ";
//	
//		System.out.println(editor.edit(text1));
//		System.out.println(editor.edit(text1_1));
//		System.out.println(editor.edit(text1_2));
//		System.out.println(editor.edit(text1_3));
//		
//		System.out.println("Version Control: "+ editor.getVersions());
//		
//		System.out.println(editor.undo());
//		System.out.println(editor.undo());
//		System.out.println(editor.redo());
//		System.out.println(editor.redo());
//		System.out.println(editor.redo());
		
		
		//Exercício 05
		
//		Player player = new Player();
//		
//		String card1= "1-azul";
//		String card2= "3-amarelo";
//		String card3= "9-vermelho";
//		String card4= "Reverter-amarelo";
//		String card5= "Compra +4";
//		String card6= "Compra +2";
//		String card7= "0-vermelho";
//		
//		player.add(card1);
//		player.add(card2);
//		player.add(card3);
//		player.add(card4);
//		player.add(card5);
//		player.add(card6);
//		player.add(card7);
//		
//		System.out.println(player.getHand());
//		
//		player.remove(card3);
//		
//		System.out.println(player.getHand());
//		
//		player.replace(card1, 5);
//		
//		System.out.println(player.getHand());
		
		
		
		//Exercicio 06
		
//		BankLine bank = new BankLine();
//		
//		bank.getInLine("John");
//		bank.getInLine("Amanda");
//		bank.getInLine("Nathan");
//		bank.getInLine("Josh");
//		bank.getInLine("Barbara");
//		
//		System.out.println(bank.callNextInLine());
//		System.out.println(bank.callNextInLine());
//		System.out.println(bank.callNextInLine());
//		System.out.println(bank.callNextInLine());
//		System.out.println(bank.callNextInLine());
//		System.out.println(bank.callNextInLine());
		
		
		
		//Exercicio 07
		
//		Printer printer = new Printer();
//		
//		printer.getInQueue("work1");
//		printer.getInQueue("document1");
//		printer.getInQueue("photo32");
//		printer.getInQueue("english_homework");
//		printer.getInQueue("site");
//		
//		System.out.println(printer.callNextWork());
//		System.out.println(printer.callNextWork());
//		System.out.println(printer.callNextWork());
//		System.out.println(printer.callNextWork());
//		System.out.println(printer.callNextWork());
//		System.out.println(printer.callNextWork());
		
		
		//Exercício 08
		
		ProcessManager manager = new ProcessManager();
		
		manager.getInQueue("Execution 1");
		manager.getInQueue("Execution 2");
		manager.getInQueue("Execution 3");
		manager.getInQueue("Execution 4");
		
		System.out.println(manager.callNext());
		System.out.println(manager.callNext());
		System.out.println(manager.callNext());
		System.out.println(manager.callNext());
		System.out.println(manager.callNext());


	}

}
