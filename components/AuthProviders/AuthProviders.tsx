'use client';

import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { ProviderProps, ProvidersProps } from './AuthProviders.props';
import { Button } from '../Button/Button';

export const AuthProviders = () => {
  const [providers, setProviders] = useState<ProvidersProps | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {
          Object.values(providers).map((provider: ProviderProps, idx) => (
            <Button title="Sign In" key={idx} handleClick={() => signIn(provider?.id)} />
          ))
        }
      </div>
    );
  } else {
    return <></>;
  }
};
