export enum TypeLoader {
  'GENERAL'
}

export interface CommonReducerType {
  loader: TypeLoader | undefined
}

export interface CommonState {
  common: CommonReducerType;
}

export type ThunkApiConfig = {
  state: CommonState;
};
