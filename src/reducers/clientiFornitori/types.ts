export interface ClienteFornitore {
  id: string;
  _id?: string;
  nome: string,
  indirizzo: string,
  partitaIva: string,
  codiceFiscale: string,
  idTipo: number
}

export interface ClientiFornitoriReducerType{
  clientiFornitoriList: ClienteFornitore[];
  form: ClienteFornitore;
}

export interface ClientiFornitoriState {
  clientiFornitori: ClientiFornitoriReducerType;
}

export type ThunkApiConfig = {
  state: ClientiFornitoriState;
};