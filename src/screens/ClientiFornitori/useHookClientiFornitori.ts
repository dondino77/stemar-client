import {
  ClienteFornitore,
  clientiFornitoriList,
  clientiList,
  createClienteFornitore,
  fornitoriList,
  getClientiFornitori,
  updateClienteFornitore,
} from "../../reducers/clientiFornitori";
import { useAppDispatch, useAppSelector } from "../../store";

function useClientiFornitoriHook() {
  const dispatch = useAppDispatch();

  return {
    createClienteFornitore: (form: ClienteFornitore) =>
      dispatch(createClienteFornitore(form)),
    updateClienteFornitore: (form: ClienteFornitore) =>
      dispatch(updateClienteFornitore(form)),

    getClientiFornitori: () => dispatch(getClientiFornitori()),

    clienti: useAppSelector(clientiList),
    fornitori: useAppSelector(fornitoriList),
    clientiFornitori: useAppSelector(clientiFornitoriList),
  };
}

export default useClientiFornitoriHook;
