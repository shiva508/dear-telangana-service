package com.comrade.service;

import com.comrade.document.VideoDocument;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VideoService {
	
	Mono<VideoDocument> save(VideoDocument videoDocument);
	
	Flux<VideoDocument> findAll();
}
