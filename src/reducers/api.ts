/* eslint-disable dot-notation */
// export const STAGING = 'https://staging.altacucina.co/v1';
export const PROD = 'https://stemar-backend.vercel.app';

export const apiRest = PROD;
// export const apiRest = STAGING;
interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

interface ApiResponse {
  response?: any;
  status: number;
}

export const callApi = async (
  method: string,
  endpoint: string,
  params?: any,
): Promise<ApiResponse> => {
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  let body: string | undefined;
  
  if (params) {
    body = JSON.stringify(params);
  }

  let options: RequestOptions = {
    method: method,
    headers: headers,
  };

  if (body) {
    options.body = body;
  }

  try {
    const response = await fetch(`${apiRest}${endpoint}`, options);
    const res = await response.json();
    return { response: res, status: response.status };
  } catch (error) {
    // Gestisci gli errori qui, se necessario
    console.error('Errore durante la chiamata API:', error);
    return { status: 500 }; // Esempio: restituisci uno stato di errore generico
  }
};


