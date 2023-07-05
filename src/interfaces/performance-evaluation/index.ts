import { IndividualInterface } from 'interfaces/individual';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  evaluation: string;
  individual_id?: string;
  created_at?: any;
  updated_at?: any;

  individual?: IndividualInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  evaluation?: string;
  individual_id?: string;
}
