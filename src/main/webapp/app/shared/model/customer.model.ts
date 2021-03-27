import { ITweets } from '@/shared/model/tweets.model';
import { IUser } from '@/shared/model/user.model';

export interface ICustomer {
  id?: string;
  slug?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  tweets?: ITweets[] | null;
  user?: IUser | null;
  followers?: ICustomer[] | null;
  followeds?: ICustomer[] | null;
}

export class Customer implements ICustomer {
  constructor(
    public id?: string,
    public slug?: string | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
    public tweets?: ITweets[] | null,
    public user?: IUser | null,
    public followers?: ICustomer[] | null,
    public followeds?: ICustomer[] | null
  ) {}
}
