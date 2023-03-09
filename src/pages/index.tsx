import { Htag } from '@/components';
import { Button } from '@/components';
import { Inter } from 'next/font/google';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='ghost' arrow='right'>Узнать подробнее</Button>
      <Button appearance='primary'>Узнать подробнее</Button>
    </>
  );
};
