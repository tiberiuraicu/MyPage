package com.myPage.database;

import java.util.List;
import java.util.Vector;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.myPage.model.User;

@PropertySource("classpath:config.properties")
public class DatabaseOperations {
	
	SessionFactory factory;
	Session session;

	public DatabaseOperations() {
		factory = new Configuration().configure().addAnnotatedClass(User.class).buildSessionFactory();
	}

	public void insert(User user) {	
			session = factory.getCurrentSession();
			session.beginTransaction();
			session.save(user);
			session.getTransaction().commit();			
	}
	public User getUserByEmail(String userName) {
		User userGastit = null;
		session = factory.getCurrentSession();
		session.beginTransaction();
		userGastit = session.get(User.class,userName);
		session.getTransaction().commit();	
		return userGastit;
	}
	public List<User> getAllUsers() {
		List<User> users = new Vector<User>();
		session = factory.openSession();
		session.beginTransaction();
		users = session.createQuery("from User").list();
		session.getTransaction().commit();	
		return users;
	}
}
