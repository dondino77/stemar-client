
import { clientiFornitoriList } from '../../reducers/clientiFornitori';
import { useAppSelector } from '../../store';

function useAmministrazioneHook() {

  return {
    clientiFornitori: useAppSelector(clientiFornitoriList),
  };
}

export default useAmministrazioneHook;
