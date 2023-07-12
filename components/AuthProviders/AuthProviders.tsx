"use client";

import {useState, useEffect} from 'react';
import {getProviders, signIn} from 'next-auth/react';
import { ProviderProps, ProvidersProps } from './AuthProviders.props';

export const AuthProviders = () => {
  const [providers, setProviders] = useState<ProvidersProps | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      console.log(res);

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if(providers){
    return (
      <div>
        {
          Object.values(providers).map((provider: ProviderProps, idx) => (
            <button key={idx} onClick={() => signIn(provider?.id)}>
              {provider.id}
            </button>
          ))
        }
      </div>
    )
  }
};
