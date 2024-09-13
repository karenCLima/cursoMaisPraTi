package exercicio02;

public class Site {
	
	private String url;

	public Site(String url) {
		super();
		this.url = url;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Site [url=" + url + "]";
	}
	
	

}
