package exercicio02;

import java.util.ArrayList;
import java.util.List;


public class Browser {
	
	private List<Site> historicNavegation;
	
	
	
	public Browser() {
		this.historicNavegation = new ArrayList<>();
	}
	
	public List<Site> search(String url){
		addSite(url);
		
		return this.historicNavegation;
	}



	public List<Site> addSite(String site){
		Site newSite = new Site(site);
		historicNavegation.add(newSite);
		verifyToRemove(historicNavegation);
		return historicNavegation;
	}
	
	public void verifyToRemove(List<Site> historic) {
		if(historic.size()>5) {
			historic.remove(0);
		}
			
	}

	@Override
	public String toString() {
		return "Browser [historicNavegation=" + historicNavegation + "]";
	}
		
	

}
