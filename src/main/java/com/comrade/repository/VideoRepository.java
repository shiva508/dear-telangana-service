package com.comrade.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.comrade.document.VideoDocument;

public interface VideoRepository extends ReactiveMongoRepository<VideoDocument, String> {

}
