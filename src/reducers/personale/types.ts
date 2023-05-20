
export interface Persona {
    id: string;
    nome: string;
    cognome: string;
    dataNascita: string;
    coefficiente: number;
    idMansione: number;
    mansione: string;
    manovale: boolean;
  }

  export interface PersonaleState {
    personale: Persona[];
    form: Persona;
  }
  