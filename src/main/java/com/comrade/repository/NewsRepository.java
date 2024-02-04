package com.comrade.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.comrade.document.NewsDocument;

public interface NewsRepository extends ReactiveMongoRepository<NewsDocument, String> {

}
