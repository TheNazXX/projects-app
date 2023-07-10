import { useState } from 'react';
import { Button, Text, Title, Tag, Rating } from '../components';
import { Layout, withLayout } from '@/layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Title tag='h1'>App</Title>
      <Button apperance='primary' arrow='down'>Узнать больше</Button>
      <Button apperance='ghost' arrow='down'>Читать отзывы</Button>
      <Text size='lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at eaque facere vero quidem dolor amet laudantium, quam veritatis tenetur corrupti architecto perferendis commodi nam, ex modi hic accusantium omnis.</Text>
      <Text size='md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at eaque facere vero quidem dolor amet laudantium, quam veritatis tenetur corrupti architecto perferendis commodi nam, ex modi hic accusantium omnis.</Text>
      <Text size='sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at eaque facere vero quidem dolor amet laudantium, quam veritatis tenetur corrupti architecto perferendis commodi nam, ex modi hic accusantium omnis.</Text>

      <Tag size='md' color="ghost">Скидка</Tag>
      <Tag size='md' color="red">Скидка</Tag>
      <Tag size='md' color="grey">Скидка</Tag>
      <Tag size='md' color="primary">Скидка</Tag>
      <Tag size='md' color="green">Скидка</Tag>

      <Rating rating={rating} setRating={setRating}/>
    </>
  );
};

export default withLayout(Home);

