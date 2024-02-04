package com.comrade.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.comrade.aspect.TimeTracker;
import com.comrade.document.VideoDocument;
import com.comrade.model.CommonResponse;
import com.comrade.service.VideoService;
import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/video")
public class VideoController {
	
	private final VideoService videoService;
	
	@PostMapping("/save")
	@TimeTracker
	public Mono<VideoDocument> save(@RequestBody VideoDocument videoDocument) {
		return videoService.save(videoDocument);
	}
	
	@GetMapping("/all")
	@TimeTracker
	public Flux<VideoDocument> findAll(){
		return videoService.findAll();
	}
	
	@DeleteMapping("/delete/{videoId}")
	@TimeTracker
	Mono<CommonResponse> delete(@PathVariable("videoId") String videoId){
		return videoService.delete(videoId);
	}

}
