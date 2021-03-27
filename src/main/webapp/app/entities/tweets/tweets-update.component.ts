import { Component, Vue, Inject } from 'vue-property-decorator';

import { required, maxLength } from 'vuelidate/lib/validators';
import dayjs from 'dayjs';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import CustomerService from '@/entities/customer/customer.service';
import { ICustomer } from '@/shared/model/customer.model';

import { ITweets, Tweets } from '@/shared/model/tweets.model';
import TweetsService from './tweets.service';

const validations: any = {
  tweets: {
    content: {
      required,
      maxLength: maxLength(160),
    },
    createdAt: {},
    updatedAt: {},
  },
};

@Component({
  validations,
})
export default class TweetsUpdate extends Vue {
  @Inject('tweetsService') private tweetsService: () => TweetsService;
  public tweets: ITweets = new Tweets();

  @Inject('customerService') private customerService: () => CustomerService;

  public customers: ICustomer[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.tweetsId) {
        vm.retrieveTweets(to.params.tweetsId);
      }
      vm.initRelationships();
    });
  }

  created(): void {
    this.currentLanguage = this.$store.getters.currentLanguage;
    this.$store.watch(
      () => this.$store.getters.currentLanguage,
      () => {
        this.currentLanguage = this.$store.getters.currentLanguage;
      }
    );
  }

  public save(): void {
    this.isSaving = true;
    if (this.tweets.id) {
      this.tweetsService()
        .update(this.tweets)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('todusApp.tweets.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.tweetsService()
        .create(this.tweets)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('todusApp.tweets.created', { param: param.id });
          this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Success',
            variant: 'success',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    }
  }

  public convertDateTimeFromServer(date: Date): string {
    if (date && dayjs(date).isValid()) {
      return dayjs(date).format(DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.tweets[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.tweets[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.tweets[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.tweets[field] = null;
    }
  }

  public retrieveTweets(tweetsId): void {
    this.tweetsService()
      .find(tweetsId)
      .then(res => {
        res.createdAt = new Date(res.createdAt);
        res.updatedAt = new Date(res.updatedAt);
        this.tweets = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.customerService()
      .retrieve()
      .then(res => {
        this.customers = res.data;
      });
  }
}
