
import { clientiFornitoriList } from '../../reducers/clientiFornitori';
import { useAppSelector } from '../../store';

function useAmministrazioneFattureHook() {

  return {
    clientiFornitori: useAppSelector(clientiFornitoriList),
  };
}

export default useAmministrazioneFattureHook;
