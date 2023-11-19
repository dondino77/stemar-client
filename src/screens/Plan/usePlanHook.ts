
import { cantieriList } from '../../reducers/cantieri';
import { mezziList } from '../../reducers/mezzi';
import { personaleList } from '../../reducers/personale';
import { PlanType, RDLPlan, savePlan, form, getFormPlan, getPlan, plan, resetForm, updateRdlList } from '../../reducers/plan';
import { useAppDispatch, useAppSelector } from '../../store';


function usePlanHook() {
  const dispatch = useAppDispatch();

  return {
    savePlan: (form: PlanType) => dispatch(savePlan(form)),
    getPlan: (data: string) => dispatch(getPlan(data)),
    getFormPlan: (data: string) => dispatch(getFormPlan(data)),
    resetForm: () => dispatch(resetForm()),
    updateRdlList: (form: RDLPlan) => dispatch(updateRdlList(form)),

    mezzi: useAppSelector(mezziList),
    cantieri: useAppSelector(cantieriList),
    personale: useAppSelector(personaleList),
    plan: useAppSelector(plan),
    form: useAppSelector(form),
  };
}

export default usePlanHook;
