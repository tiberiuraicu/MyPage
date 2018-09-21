package com.myPage.controller;


import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.myPage.database.DatabaseOperations;
import com.myPage.model.User;
import com.myPage.services.UserServices;

@RestController
@RequestMapping("/resources")
public class UserResourceController {
	UserServices userServices = new UserServices();
	

	@RequestMapping("/users")
	public List<User> getAllUsers() {
		return userServices.getAllUsers();
	}

	@RequestMapping(value = "/setProfilePicture/{email}", method = RequestMethod.POST)
	public ResponseEntity<Object> setProfilePicture(@RequestParam("file") MultipartFile file,
			@PathVariable("email") String email) throws IOException {
		
		return userServices.setProfilePicture(file,email);
	}

	@RequestMapping(value = "/getProfilePicture/{email}", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getProfilePicture(@PathVariable("email") String email) throws IOException {
	
	    return userServices.getProfilePicture(email);
	}
}
