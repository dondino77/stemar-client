
import { Cantiere, cantieriList, createCantiere, getCantieri, getMezziCantiere, getPersonaleCantiere, mezziInCantiere, personaleInCantiere, updateCantiere } from '../../reducers/cantieri';
import { clientiList } from '../../reducers/clientiFornitori';
import { useAppDispatch, useAppSelector } from '../../store';

function useCantieriHook() {
  const dispatch = useAppDispatch();

  return {
    createCantiere: (form: Cantiere) => dispatch(createCantiere(form)),
    updateCantiere: (form: Cantiere) => dispatch(updateCantiere(form)),
    getPersonaleCantiere: (idCantiere: string) => dispatch(getPersonaleCantiere(idCantiere)),
    getMezziCantiere: (idCantiere: string) => dispatch(getMezziCantiere(idCantiere)),

    getCantieri: () => dispatch(getCantieri()),

    clienti: useAppSelector(clientiList),
    cantieri: useAppSelector(cantieriList),
    mezziInCantiere: useAppSelector(mezziInCantiere),
    personaleInCantiere: useAppSelector(personaleInCantiere),
  };
}

export default useCantieriHook;
