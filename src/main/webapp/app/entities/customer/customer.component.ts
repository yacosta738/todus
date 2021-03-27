import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { ICustomer } from '@/shared/model/customer.model';

import CustomerService from './customer.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class Customer extends Vue {
  @Inject('customerService') private customerService: () => CustomerService;
  private removeId: string = null;

  public customers: ICustomer[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllCustomers();
  }

  public clear(): void {
    this.retrieveAllCustomers();
  }

  public retrieveAllCustomers(): void {
    this.isFetching = true;

    this.customerService()
      .retrieve()
      .then(
        res => {
          this.customers = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public handleSyncList(): void {
    this.clear();
  }

  public prepareRemove(instance: ICustomer): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeCustomer(): void {
    this.customerService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('todusApp.customer.deleted', { param: this.removeId });
        this.$bvToast.toast(message.toString(), {
          toaster: 'b-toaster-top-center',
          title: 'Info',
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000,
        });
        this.removeId = null;
        this.retrieveAllCustomers();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
