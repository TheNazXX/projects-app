import { Htag, Button, P, Tag, Rating } from '@/components';
import { useState } from 'react';


export default function Home(): JSX.Element {
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
    </>
  );
};
