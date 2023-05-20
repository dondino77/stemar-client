export interface MezziRDL {
  id: string;
  idMezzo: string;
  mezzo: string;
  km: number;
}

export interface PersonaleRDL {
  id: string;
  idPersonale: string;
  personale: string;
  ore: number;
}

export interface RDL {
  id?: string;
  data?: string;
  mezzi?: MezziRDL[],
  personale?: PersonaleRDL[],
}
export interface Cantiere {
    id: string;
    committente: string;
    luogo: string;
    oggettoLavori: string;
    impresa: string;
    preventivo: number;
    durataGG: number;
    error: boolean;
    rdl?: RDL[];
  }
  
  export interface CantieriState {
    cantieri: Cantiere[];
    form?: RDL[];
  }