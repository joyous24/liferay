package com.liferay.admin;


public class User {
	private String name;
	private int age;
	
	public User(){
		
	}
	
	public User(String name,int age){
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		StringBuffer buffer = new StringBuffer();
		buffer.append("user=[name:");
		buffer.append(name);
		buffer.append(",age:");
		buffer.append(age);
		buffer.append("]");
		return buffer.toString();
	}
	
	

}
