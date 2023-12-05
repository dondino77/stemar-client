
import { clientiList } from '../../reducers/clientiFornitori';
import { useAppSelector } from '../../store';

function useAmministrazioneClientiHook() {

  return {
    clienti: useAppSelector(clientiList),
  };
}

export default useAmministrazioneClientiHook;
