export interface Mezzo {
  id: string;
  _id?: string;
  nome?: string;
  targa?: string;
  dataScadenzaAssicurazione?: string;
  dataScadenzaBollo?: string;
  dataProssimaRevisione?: string;
  costoOrario?: number;
}

export interface MezziReducerType{
  mezziList: Mezzo[];
  form: Mezzo;
}

export interface MezziState {
  mezzi: MezziReducerType;
}

export type ThunkApiConfig = {
  state: MezziState;
};