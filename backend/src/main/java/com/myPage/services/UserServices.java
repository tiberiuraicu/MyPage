package com.myPage.services;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.IOUtils;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.myPage.database.DatabaseOperations;
import com.myPage.model.User;

public class UserServices {
	
	DatabaseOperations databaseOperations = new DatabaseOperations();
	Properties prop = new Properties();
	String baseServerStockUrl="D:/ServerStock/";
	
	public List<User> getAllUsers() {
		List<User> list = databaseOperations.getAllUsers();
		return list;
	}
	
	public ResponseEntity<Object> setProfilePicture(MultipartFile file, String email) throws IOException{
		
		File profilePicture = new File( baseServerStockUrl + email + "/" + file.getOriginalFilename());
		profilePicture.getParentFile().mkdirs();
		profilePicture.createNewFile();
		FileOutputStream fout = new FileOutputStream(profilePicture);
		fout.write(file.getBytes());
		fout.close();

		FileOutputStream fileOutputStream = new FileOutputStream(new File(baseServerStockUrl + email + "/profile.properties"));
		prop.load(new FileInputStream(baseServerStockUrl + email + "/profile.properties"));
		prop.setProperty("profile-picture", file.getOriginalFilename());
		prop.store(fileOutputStream, "Properties");
		
		return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);

	}
	
	public ResponseEntity<byte[]> getProfilePicture(String email) throws IOException{
		
		prop.load(new FileInputStream(baseServerStockUrl + email + "/profile.properties"));
	    File profilePicture = new File(baseServerStockUrl + email+ "/" + prop.getProperty("profile-picture"));
	   
	       
	    FileSystemResource fileResource = new FileSystemResource(profilePicture);
	    byte[] base64ProfilePicture = Base64.getEncoder().encode(IOUtils.toByteArray(fileResource.getInputStream()));

	    HttpHeaders headers = new HttpHeaders();
	    headers.add("profile-picture", fileResource.getFilename());

	    return ResponseEntity.ok().headers(headers).body(base64ProfilePicture);
		
	}
}
