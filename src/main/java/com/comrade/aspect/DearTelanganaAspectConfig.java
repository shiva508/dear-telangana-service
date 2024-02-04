package com.comrade.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import com.comrade.util.DearTelanganaConstants;
import lombok.extern.slf4j.Slf4j;

@Component
@Aspect
@Slf4j
public class DearTelanganaAspectConfig {
	
	@Around("@annotation(com.comrade.aspect.TimeTracker)")
	public Object methodExecutionTimeTracker(ProceedingJoinPoint joinPoint) throws Throwable {
		long startTime =System.currentTimeMillis();
		Object proceed = joinPoint.proceed();
		long endTime =System.currentTimeMillis();
		log.info(DearTelanganaConstants.METHOD_TIME_TRACKER, proceed.getClass().toString(), (endTime-startTime));
		return proceed;
	}

}
