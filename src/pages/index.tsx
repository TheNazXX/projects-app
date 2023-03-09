import { Htag, Button, P, Tag } from '@/components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='ghost' arrow='right'>Узнать подробнее</Button>
      <Button appearance='primary' arrow='down'>Узнать подробнее</Button>
      <P size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt atque dolores iste provident ea rerum odio, illo enim praesentium. Consequuntur nihil eveniet quia dolores facere fuga eligendi nisi ipsam.</P>
      <P size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt atque dolores iste provident ea rerum odio, illo enim praesentium. Consequuntur nihil eveniet quia dolores facere fuga eligendi nisi ipsam.</P>
      <P size="b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt atque dolores iste provident ea rerum odio, illo enim praesentium. Consequuntur nihil eveniet quia dolores facere fuga eligendi nisi ipsam.</P>
      <Tag size='m' color='ghost'>Ghost tag</Tag>
      <Tag size='m' color='red'>Red tag</Tag>
      <Tag size='m' color='grey'>Gray tag</Tag>
      <Tag size='s' color='green'>Green tag</Tag>
      <Tag size='s' color='primary'>Primary tag</Tag>
    </>
  );
};
