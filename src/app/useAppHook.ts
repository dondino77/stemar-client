import { useAppSelector } from '../store';
import { TypeLoader, loader } from '../reducers/common';

function useAppHook() {

  return {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    loader: (loaderKey: TypeLoader) => useAppSelector(loader(loaderKey)),
  };
}

export default useAppHook;
