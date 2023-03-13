import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '@/layout';
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import { MenuItem } from '@/interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';

const firstCategory = 0;

const Course = ({products}: CourseProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
    {products && products.length}
    </>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });


  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

  if(!params){
    return {
      notFound: true
    };
  };

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      page,
      products,
      firstCategory
    }
  };
};

interface CourseProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
};