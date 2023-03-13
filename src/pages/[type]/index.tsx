import { GetStaticProps, GetStaticPaths } from 'next';
import { withLayout } from '../../components';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { TopLevelCategory } from '@/interfaces/page.interface';


const Type = ({firstCategory}: TypeProps): JSX.Element => {
  return (
    <>
      Type {firstCategory}
    </>
  );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true
  };
};


export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

  if(!params){
    return {
      notFound: true
    };
  };

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if(!firstCategoryItem){
    return {
      notFound: true
    };
  };


  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};

interface TypeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
};
