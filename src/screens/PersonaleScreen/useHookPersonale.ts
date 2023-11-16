
import { Persona, createPersonale, getPersonale, personaleList, updatePersonale } from '../../reducers/personale';
import { useAppDispatch, useAppSelector } from '../../store';

function usePersonaleHook() {
  const dispatch = useAppDispatch();

  return {
    createPersonale: (form: Persona) => dispatch(createPersonale(form)),
    updatePersonale: (form: Persona) => dispatch(updatePersonale(form)),

    getPersonale: () => dispatch(getPersonale()),

    personale: useAppSelector(personaleList),
  };
}

export default usePersonaleHook;
