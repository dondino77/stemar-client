
import { fornitoriList } from '../../reducers/clientiFornitori';
import { useAppSelector } from '../../store';

function useAmministrazioneFornitoriHook() {

  return {
    fornitori: useAppSelector(fornitoriList),
  };
}

export default useAmministrazioneFornitoriHook;
