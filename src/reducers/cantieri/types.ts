export interface Cantiere {
    id: number;
    nome: string;
    indirizzo: string;
    error: boolean;
    // altre proprietà del cantiere
  }
  
  export interface CantieriState {
    cantieri: Cantiere[];
  }