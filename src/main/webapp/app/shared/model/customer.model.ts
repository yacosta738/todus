import { IUser } from '@/shared/model/user.model';
import { ITweets } from '@/shared/model/tweets.model';

export interface ICustomer {
  id?: string;
  name?: string;
  phone?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  user?: IUser | null;
  tweets?: ITweets[] | null;
  followers?: ICustomer[] | null;
  followings?: ICustomer[] | null;
}

export class Customer implements ICustomer {
  constructor(
    public id?: string,
    public name?: string,
    public phone?: string | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
    public user?: IUser | null,
    public tweets?: ITweets[] | null,
    public followers?: ICustomer[] | null,
    public followings?: ICustomer[] | null
  ) {}
}
