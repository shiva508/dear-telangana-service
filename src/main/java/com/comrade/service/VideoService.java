package com.comrade.service;

import com.comrade.document.VideoDocument;
import com.comrade.model.CommonResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VideoService {
	
	Mono<VideoDocument> save(VideoDocument videoDocument);
	
	Flux<VideoDocument> findAll();
	
	Mono<CommonResponse> delete(String videoId);
}
