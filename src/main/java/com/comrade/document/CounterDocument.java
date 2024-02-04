package com.comrade.document;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CounterDocument implements Serializable{
	private static final long serialVersionUID = 1L;
	private String counterParty;
	private String counterPerson;
	private String counterDetail;
}
