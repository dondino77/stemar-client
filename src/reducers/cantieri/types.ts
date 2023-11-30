import { ClienteFornitore } from "../clientiFornitori";

export interface MezziInCantiere {
  _id: string,
  nome: string,
  targa: string,
  oreTotali: number
}

export interface PersonaleInCantiere {
  _id: string,
  nome: string,
  cognome: string,
  oreTotali: number
}

export interface Cantiere {
    id: string;
    _id?: string;
    idCommittente: ClienteFornitore | string;
    committente?: string;
    luogo: string;
    oggettoLavori: string;
    impresa: string;
    preventivo: number;
    durataGG: number;
    error?: boolean;
    mezziList?: MezziInCantiere[];
    personaleList?: PersonaleInCantiere[];
  }

  export interface CantieriReducerType{
    cantieriList: Cantiere[];
    form: Cantiere;
  }
  
  export interface CantieriState {
    cantieri: CantieriReducerType;
  }
  
  export type ThunkApiConfig = {
    state: CantieriState;
  };