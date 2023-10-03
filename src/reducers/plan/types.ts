import { Cantiere } from "../cantieri/types";

export interface MezziPlan {
  id: string;
  idMezzo: string;
  mezzo: string;
  km: number;
}

export interface PersonalePlan {
  id: string;
  idPersonale: string;
  personale: string;
  ore: number;
}

export interface CantieriPlan {
  id?: string;
  data?: string;
  cantiere: Cantiere,
  mezzi?: MezziPlan[],
  personale?: PersonalePlan[],
}

export interface Plan {
  id?: string;
  data?: string;
  cantieri?: CantieriPlan[],
}

export interface PlanState {
  plans: Plan[];
}