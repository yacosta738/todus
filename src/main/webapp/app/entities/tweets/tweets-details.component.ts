import { Component, Vue, Inject } from 'vue-property-decorator';

import { ITweets } from '@/shared/model/tweets.model';
import TweetsService from './tweets.service';

@Component
export default class TweetsDetails extends Vue {
  @Inject('tweetsService') private tweetsService: () => TweetsService;
  public tweets: ITweets = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.tweetsId) {
        vm.retrieveTweets(to.params.tweetsId);
      }
    });
  }

  public retrieveTweets(tweetsId) {
    this.tweetsService()
      .find(tweetsId)
      .then(res => {
        this.tweets = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
