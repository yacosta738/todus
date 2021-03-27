package com.todus.web.rest;

import com.todus.repository.TweetsRepository;
import com.todus.service.TweetsService;
import com.todus.service.dto.TweetsDTO;
import com.todus.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.todus.domain.Tweets}.
 */
@RestController
@RequestMapping("/api")
public class TweetsResource {

    private final Logger log = LoggerFactory.getLogger(TweetsResource.class);

    private static final String ENTITY_NAME = "tweets";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TweetsService tweetsService;

    private final TweetsRepository tweetsRepository;

    public TweetsResource(TweetsService tweetsService, TweetsRepository tweetsRepository) {
        this.tweetsService = tweetsService;
        this.tweetsRepository = tweetsRepository;
    }

    /**
     * {@code POST  /tweets} : Create a new tweets.
     *
     * @param tweetsDTO the tweetsDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new tweetsDTO, or with status {@code 400 (Bad Request)} if the tweets has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/tweets")
    public ResponseEntity<TweetsDTO> createTweets(@Valid @RequestBody TweetsDTO tweetsDTO) throws URISyntaxException {
        log.debug("REST request to save Tweets : {}", tweetsDTO);
        if (tweetsDTO.getId() != null) {
            throw new BadRequestAlertException("A new tweets cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TweetsDTO result = tweetsService.save(tweetsDTO);
        return ResponseEntity
            .created(new URI("/api/tweets/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /tweets/:id} : Updates an existing tweets.
     *
     * @param id the id of the tweetsDTO to save.
     * @param tweetsDTO the tweetsDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tweetsDTO,
     * or with status {@code 400 (Bad Request)} if the tweetsDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the tweetsDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/tweets/{id}")
    public ResponseEntity<TweetsDTO> updateTweets(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody TweetsDTO tweetsDTO
    ) throws URISyntaxException {
        log.debug("REST request to update Tweets : {}, {}", id, tweetsDTO);
        if (tweetsDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, tweetsDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!tweetsRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        TweetsDTO result = tweetsService.save(tweetsDTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, tweetsDTO.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /tweets/:id} : Partial updates given fields of an existing tweets, field will ignore if it is null
     *
     * @param id the id of the tweetsDTO to save.
     * @param tweetsDTO the tweetsDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tweetsDTO,
     * or with status {@code 400 (Bad Request)} if the tweetsDTO is not valid,
     * or with status {@code 404 (Not Found)} if the tweetsDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the tweetsDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/tweets/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<TweetsDTO> partialUpdateTweets(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody TweetsDTO tweetsDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update Tweets partially : {}, {}", id, tweetsDTO);
        if (tweetsDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, tweetsDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!tweetsRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<TweetsDTO> result = tweetsService.partialUpdate(tweetsDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, tweetsDTO.getId())
        );
    }

    /**
     * {@code GET  /tweets} : get all the tweets.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of tweets in body.
     */
    @GetMapping("/tweets")
    public ResponseEntity<List<TweetsDTO>> getAllTweets(Pageable pageable) {
        log.debug("REST request to get a page of Tweets");
        Page<TweetsDTO> page = tweetsService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /tweets/:id} : get the "id" tweets.
     *
     * @param id the id of the tweetsDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the tweetsDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/tweets/{id}")
    public ResponseEntity<TweetsDTO> getTweets(@PathVariable String id) {
        log.debug("REST request to get Tweets : {}", id);
        Optional<TweetsDTO> tweetsDTO = tweetsService.findOne(id);
        return ResponseUtil.wrapOrNotFound(tweetsDTO);
    }

    /**
     * {@code DELETE  /tweets/:id} : delete the "id" tweets.
     *
     * @param id the id of the tweetsDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/tweets/{id}")
    public ResponseEntity<Void> deleteTweets(@PathVariable String id) {
        log.debug("REST request to delete Tweets : {}", id);
        tweetsService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
