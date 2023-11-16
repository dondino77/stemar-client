export interface Persona {
  id: string;
  _id?: string;
  nome: string;
  cognome: string;
  dataNascita: string;
  coefficiente: number;
  idMansione: number;
  mansione: string;
  manovale: boolean;
}

export interface PersonaleReducerType {
  personaleList: Persona[];
  form: Persona;
}

export interface PersonaleState {
  personale: PersonaleReducerType;
}

export type ThunkApiConfig = {
  state: PersonaleState;
};
