package com.comrade.service;

import org.springframework.stereotype.Service;
import com.comrade.document.VideoDocument;
import com.comrade.model.CommonResponse;
import com.comrade.repository.VideoRepository;
import com.comrade.util.DearTelanganaConstants;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Slf4j
@AllArgsConstructor
public class VideoServiceImpl implements VideoService {

	private final VideoRepository videoRepository;
	
	@Override
	public Mono<VideoDocument> save(VideoDocument videoDocument) {
		log.info("VideoServiceImpl.save {}",videoDocument);		
		return videoRepository.save(videoDocument);
	}

	@Override
	public Flux<VideoDocument> findAll() {
		log.info("VideoServiceImpl.findAll");	
		return videoRepository.findAll();
	}

	@Override
	public Mono<CommonResponse> delete(String videoId) {
		return videoRepository.deleteById(videoId)
				.thenReturn(CommonResponse.builder()
										  .message(DearTelanganaConstants.DELETE_VIDEO_MSG.concat("=").concat(videoId)).build());
	}

}
