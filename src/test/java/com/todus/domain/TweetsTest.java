package com.todus.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.todus.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TweetsTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Tweets.class);
        Tweets tweets1 = new Tweets();
        tweets1.setId("id1");
        Tweets tweets2 = new Tweets();
        tweets2.setId(tweets1.getId());
        assertThat(tweets1).isEqualTo(tweets2);
        tweets2.setId("id2");
        assertThat(tweets1).isNotEqualTo(tweets2);
        tweets1.setId(null);
        assertThat(tweets1).isNotEqualTo(tweets2);
    }
}
