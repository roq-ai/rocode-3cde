import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface IndividualInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  performance_evaluation?: PerformanceEvaluationInterface[];
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    performance_evaluation?: number;
    task?: number;
  };
}

export interface IndividualGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
