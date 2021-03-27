package com.todus.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TweetsMapperTest {

    private TweetsMapper tweetsMapper;

    @BeforeEach
    public void setUp() {
        tweetsMapper = new TweetsMapperImpl();
    }
}
