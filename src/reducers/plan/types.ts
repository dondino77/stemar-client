import { Cantiere } from "../cantieri/types";
import { Mezzo } from "../mezzi";
import { Persona } from "../personale";

export interface KmPlan {
  km: number;
}

export interface OrePlan {
  ore: number;
}
export interface MezziPlan extends Mezzo, OrePlan {
  // Proprietà aggiuntive o override se necessario
}

export interface PersonalePlan extends Persona, OrePlan {
  // Proprietà aggiuntive o override se necessario
}

export interface RDLPlan {
  id: string;
  cantiere: Cantiere;
  mezzi?: MezziPlan[];
  personale?: PersonalePlan[];
}

export interface PlanType {
  id?: string;
  data?: string;
  rdlList?: RDLPlan[] | undefined;
  assenze?: Persona[];
}

export interface PlanReducerType {
  planner: PlanType;
  form: PlanType;
}

export interface PlanState {
  plan: PlanReducerType;
}

export type ThunkApiConfig = {
  state: PlanState;
};
