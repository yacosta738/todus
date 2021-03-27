package com.todus.repository;

import com.todus.domain.Tweets;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Neo4j repository for the Tweets entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TweetsRepository extends Neo4jRepository<Tweets, String> {}
