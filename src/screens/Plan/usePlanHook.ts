
import { cantieriList } from '../../reducers/cantieri';
import { mezziList } from '../../reducers/mezzi';
import { personaleList } from '../../reducers/personale';
import { PlanState, createPlan, getPlan, plan } from '../../reducers/plan';
import { useAppDispatch, useAppSelector } from '../../store';


function usePlanHook() {
  const dispatch = useAppDispatch();

  return {
    createPlan: (form: PlanState) => dispatch(createPlan(form)),
    getPlan: (data: string) => dispatch(getPlan(data)),


    mezzi: useAppSelector(mezziList),
    cantieri: useAppSelector(cantieriList),
    personale: useAppSelector(personaleList),
    plan: useAppSelector(plan),
  };
}

export default usePlanHook;
