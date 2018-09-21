package com.myPage.messageStream;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Controller
public class WebSocketController {

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	@MessageMapping("/message/{name}")
	@SendTo("/topic/reply/{name}")
	public String simple(@Payload String message ,@DestinationVariable String name) {
		String namer = null;
		try {
		System.out.println(message+" " + name);
		JsonParser parser = new JsonParser();
		JsonObject o = parser.parse(message).getAsJsonObject();
		namer=o.get("message").getAsString();
		System.out.println(namer);
		}catch(Exception e) {
			
		}
		return namer;
	}
	
	@MessageExceptionHandler
    public String handleException(Throwable exception) {
        messagingTemplate.convertAndSend("/errors", exception.getMessage());
	    return exception.getMessage();
    }

}