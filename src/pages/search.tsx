import { GetStaticProps } from 'next';
import { withLayout } from '@/components';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

const Search = (): JSX.Element => {

  return (
    <>
      Search
    </>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};
