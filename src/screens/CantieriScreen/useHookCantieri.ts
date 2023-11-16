
import { Cantiere, cantieriList, createCantiere, getCantieri, updateCantiere } from '../../reducers/cantieri';
import { useAppDispatch, useAppSelector } from '../../store';

function useCantieriHook() {
  const dispatch = useAppDispatch();

  return {
    createCantiere: (form: Cantiere) => dispatch(createCantiere(form)),
    updateCantiere: (form: Cantiere) => dispatch(updateCantiere(form)),

    getCantieri: () => dispatch(getCantieri()),

    cantieri: useAppSelector(cantieriList),
  };
}

export default useCantieriHook;
