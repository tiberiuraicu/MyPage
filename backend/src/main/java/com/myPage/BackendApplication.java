package com.myPage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.myPage.config.JwtFilter;

@SpringBootApplication
public class BackendApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*");
		registrationBean.addUrlPatterns("/rest1/*");
		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
