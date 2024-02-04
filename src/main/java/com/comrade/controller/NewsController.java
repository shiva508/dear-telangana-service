package com.comrade.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.comrade.document.NewsDocument;
import com.comrade.service.NewsService;
import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/news")
@AllArgsConstructor
public class NewsController {

	private final NewsService newsService;

	@PostMapping("/save")
	Mono<NewsDocument> save(@RequestBody NewsDocument newsDocument) {
		return newsService.save(newsDocument);
	}

	@GetMapping("/all")
	Flux<NewsDocument> all() {
		return newsService.all();
	}
}
