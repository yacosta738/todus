package com.todus.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.todus.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TweetsDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TweetsDTO.class);
        TweetsDTO tweetsDTO1 = new TweetsDTO();
        tweetsDTO1.setId("id1");
        TweetsDTO tweetsDTO2 = new TweetsDTO();
        assertThat(tweetsDTO1).isNotEqualTo(tweetsDTO2);
        tweetsDTO2.setId(tweetsDTO1.getId());
        assertThat(tweetsDTO1).isEqualTo(tweetsDTO2);
        tweetsDTO2.setId("id2");
        assertThat(tweetsDTO1).isNotEqualTo(tweetsDTO2);
        tweetsDTO1.setId(null);
        assertThat(tweetsDTO1).isNotEqualTo(tweetsDTO2);
    }
}
