import { IndividualInterface } from 'interfaces/individual';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  time_spent: number;
  individual_id?: string;
  created_at?: any;
  updated_at?: any;

  individual?: IndividualInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  individual_id?: string;
}
