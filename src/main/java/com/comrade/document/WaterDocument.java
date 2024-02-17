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
public class WaterDocument implements Serializable {
	@Id
	private String waterId;
	private String waterSource;
	private String origin;
	
}
