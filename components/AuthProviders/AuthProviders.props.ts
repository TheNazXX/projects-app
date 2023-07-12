export interface ProviderProps{
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

export interface ProvidersProps{
  [key: string]: ProviderProps
};