package exercicio05;

import java.util.LinkedList;
import java.util.List;

public class Player {
	
	private List<String> hand;
	
	public Player() {
		this.hand = new LinkedList<>();
	}
	
	public List<String> add(String card){
		hand.add(card);
		return hand;
	}
	
	public List<String> remove(String card){
		hand.remove(card);
		return hand;
	}
	
	public List<String> replace(String card, int cardPosition){
		int cardIndex = hand.indexOf(card);
		String replacedCard = hand.get(cardPosition);
		hand.set(cardPosition, card);
		hand.set(cardIndex, replacedCard);
		
		return hand;
	}

	public List<String> getHand() {
		return hand;
	}

	public void setHand(List<String> hand) {
		this.hand = hand;
	}
	
	

}
