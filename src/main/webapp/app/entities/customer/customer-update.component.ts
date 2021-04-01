import { Component, Vue, Inject } from 'vue-property-decorator';

import { required, maxLength } from 'vuelidate/lib/validators';
import dayjs from 'dayjs';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import UserService from '@/admin/user-management/user-management.service';

import TweetsService from '@/entities/tweets/tweets.service';
import { ITweets } from '@/shared/model/tweets.model';

import { ICustomer, Customer } from '@/shared/model/customer.model';
import CustomerService from './customer.service';

const validations: any = {
  customer: {
    name: {
      required,
      maxLength: maxLength(60),
    },
    phone: {},
    createdAt: {},
    updatedAt: {},
  },
};

@Component({
  validations,
})
export default class CustomerUpdate extends Vue {
  @Inject('customerService') private customerService: () => CustomerService;
  public customer: ICustomer = new Customer();

  @Inject('userService') private userService: () => UserService;

  public users: Array<any> = [];

  @Inject('tweetsService') private tweetsService: () => TweetsService;

  public tweets: ITweets[] = [];

  public customers: ICustomer[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.customerId) {
        vm.retrieveCustomer(to.params.customerId);
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
    this.customer.followers = [];
  }

  public save(): void {
    this.isSaving = true;
    if (this.customer.id) {
      this.customerService()
        .update(this.customer)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('todusApp.customer.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.customerService()
        .create(this.customer)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('todusApp.customer.created', { param: param.id });
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
      this.customer[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.customer[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.customer[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.customer[field] = null;
    }
  }

  public retrieveCustomer(customerId): void {
    this.customerService()
      .find(customerId)
      .then(res => {
        res.createdAt = new Date(res.createdAt);
        res.updatedAt = new Date(res.updatedAt);
        this.customer = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.userService()
      .retrieve()
      .then(res => {
        this.users = res.data;
      });
    this.tweetsService()
      .retrieve()
      .then(res => {
        this.tweets = res.data;
      });
    this.customerService()
      .retrieve()
      .then(res => {
        this.customers = res.data;
      });
  }

  public getSelected(selectedVals, option): any {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
