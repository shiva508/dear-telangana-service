package com.comrade.document;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document
public class NewsDocument implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	private String newsId;
	private String heading;
	private String info;
	private List<CounterDocument> counter;
}
