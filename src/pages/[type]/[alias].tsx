import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '@/layout';
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import { MenuItem } from '@/interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '@/helpers/helpers';



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
  let paths: string[] = [];
  for(let m of firstLevelMenu){
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)),)
  };

  return {
    paths,
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

  try{
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    if(menu.length == 0){
      return {
        notFound: true
      }
    }
  
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
        firstCategory: firstCategoryItem.id
      }
    };
  
  }catch(e){
    return {
      notFound: true
    };
  };

};

interface CourseProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
};