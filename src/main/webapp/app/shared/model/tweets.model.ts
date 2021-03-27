import { ICustomer } from '@/shared/model/customer.model';

export interface ITweets {
  id?: string;
  content?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  customer?: ICustomer | null;
}

export class Tweets implements ITweets {
  constructor(
    public id?: string,
    public content?: string,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
    public customer?: ICustomer | null
  ) {}
}
