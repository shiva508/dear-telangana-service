package com.comrade.document;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class VideoDocument implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	private String videoId;
	private String name;
	private String url;
	private String cover;
	private String starRating;
	private String rating;
	private String year;
	private String genre;
	private String runtime;
	private String cast;
}
