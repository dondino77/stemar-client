import { ClienteFornitore } from "../clientiFornitori";

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