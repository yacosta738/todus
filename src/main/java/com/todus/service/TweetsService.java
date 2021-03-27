package com.todus.service;

import com.todus.domain.Tweets;
import com.todus.repository.TweetsRepository;
import com.todus.service.dto.TweetsDTO;
import com.todus.service.mapper.TweetsMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link Tweets}.
 */
@Service
public class TweetsService {

    private final Logger log = LoggerFactory.getLogger(TweetsService.class);

    private final TweetsRepository tweetsRepository;

    private final TweetsMapper tweetsMapper;

    public TweetsService(TweetsRepository tweetsRepository, TweetsMapper tweetsMapper) {
        this.tweetsRepository = tweetsRepository;
        this.tweetsMapper = tweetsMapper;
    }

    /**
     * Save a tweets.
     *
     * @param tweetsDTO the entity to save.
     * @return the persisted entity.
     */
    public TweetsDTO save(TweetsDTO tweetsDTO) {
        log.debug("Request to save Tweets : {}", tweetsDTO);
        Tweets tweets = tweetsMapper.toEntity(tweetsDTO);
        tweets = tweetsRepository.save(tweets);
        return tweetsMapper.toDto(tweets);
    }

    /**
     * Partially update a tweets.
     *
     * @param tweetsDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<TweetsDTO> partialUpdate(TweetsDTO tweetsDTO) {
        log.debug("Request to partially update Tweets : {}", tweetsDTO);

        return tweetsRepository
            .findById(tweetsDTO.getId())
            .map(
                existingTweets -> {
                    tweetsMapper.partialUpdate(existingTweets, tweetsDTO);
                    return existingTweets;
                }
            )
            .map(tweetsRepository::save)
            .map(tweetsMapper::toDto);
    }

    /**
     * Get all the tweets.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<TweetsDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Tweets");
        return tweetsRepository.findAll(pageable).map(tweetsMapper::toDto);
    }

    /**
     * Get one tweets by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<TweetsDTO> findOne(String id) {
        log.debug("Request to get Tweets : {}", id);
        return tweetsRepository.findById(id).map(tweetsMapper::toDto);
    }

    /**
     * Delete the tweets by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete Tweets : {}", id);
        tweetsRepository.deleteById(id);
    }
}
