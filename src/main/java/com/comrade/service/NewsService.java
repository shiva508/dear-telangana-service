package com.comrade.service;

import com.comrade.document.NewsDocument;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface NewsService {
	Mono<NewsDocument> save(NewsDocument newsDocument);

	Flux<NewsDocument> all();
}
