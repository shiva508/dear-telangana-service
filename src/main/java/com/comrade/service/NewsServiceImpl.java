package com.comrade.service;

import org.springframework.stereotype.Service;
import com.comrade.document.NewsDocument;
import com.comrade.repository.NewsRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Slf4j
@AllArgsConstructor
public class NewsServiceImpl implements NewsService {
	
	private final NewsRepository newsRepository;
	
	@Override
	public Mono<NewsDocument> save(NewsDocument newsDocument) {
		log.info("NewsServiceImpl::save");
		return newsRepository.save(newsDocument);
	}

	@Override
	public Flux<NewsDocument> all() {
		log.info("NewsServiceImpl::all");
		return newsRepository.findAll();
	}

}
