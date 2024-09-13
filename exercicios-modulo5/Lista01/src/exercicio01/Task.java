package exercicio01;



public class Task {
	
	private Integer id;
	
	private String task;
	
	private Status status;
	

	public Task(Integer id, String task, Status status) {
		super();
		this.id = id;
		this.task = task;
		this.status = Status.TO_DO;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTask() {
		return task;
	}


	public void setTask(String task) {
		this.task = task;
	}


	public Status getStatus() {
		return status;
	}


	public void setStatus(Status status) {
		this.status = status;
	}


	@Override
	public String toString() {
		return "Task [id=" + id + ", task=" + task + ", status=" + status + "]";
	}
	
	
	
	

}
