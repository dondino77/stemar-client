export interface Mezzo {
  id: string;
  nome?: string;
  targa?: string;
  dataScadenzaAssicurazione?: string;
  dataScadenzaBollo?: string;
  dataProssimaRevisione?: string;
  costoKm?: number;
}

export interface MezziState {
  mezzi: Mezzo[];
  form: Mezzo;
}