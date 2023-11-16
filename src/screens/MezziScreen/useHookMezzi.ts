
import { Mezzo, createMezzo, getMezzi, mezziList, updateMezzo } from '../../reducers/mezzi';
import { useAppDispatch, useAppSelector } from '../../store';

function useMezziHook() {
  const dispatch = useAppDispatch();

  return {
    createMezzo: (form: Mezzo) => dispatch(createMezzo(form)),
    updateMezzo: (form: Mezzo) => dispatch(updateMezzo(form)),

    getMezzi: () => dispatch(getMezzi()),

    mezzi: useAppSelector(mezziList),
  };
}

export default useMezziHook;
