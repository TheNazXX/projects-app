import { GetStaticProps } from 'next';
import { Htag, Button, P, Tag, Rating, withLayout } from '@/components';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

const Home = ({menu}: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='ghost' arrow='right'>Узнать подробнее</Button>
      <Button appearance='primary' arrow='down'>Узнать подробнее</Button>
      <P size="s">Маленький</P>
      <P size="m">Средний</P>
      <P size="b">Большой</P>
      <Tag size='m' color='ghost'>Ghost tag</Tag>
      <Tag size='m' color='red'>Red tag</Tag>
      <Tag size='m' color='grey'>Grey tag</Tag>
      <Tag size='s' color='green'>Green tag</Tag>
      <Tag size='s' color='primary'>Primary tag</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
      {menu.map(({_id: {secondCategory}}) => <div key={secondCategory}>{secondCategory}</div>)}
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
};