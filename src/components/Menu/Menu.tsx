import { AppContext } from '@/context/app.context';
import { useContext  } from 'react';
import styles from './menu.module.css';
import CoursesSvg from './Icons/menu-hat.svg';
import ServicesSvg from './Icons/menu-services.svg';
import BooksSvg from './Icons/menu-book.svg';
import ProductsSvg from './Icons/menu-box.svg';
import classNames from 'classnames';
import Link from 'next/link';

import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesSvg />, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Севрисы', icon: <ServicesSvg />, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksSvg />, id: TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsSvg />, id: TopLevelCategory.Products},
]

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory === secondCategory){
        m.isOpened = !m.isOpened
      };
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link key={m.route} href={`/${m.route}`} legacyBehavior>
              <a>
                <div className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={classNames(styles.secondBlock)}>
        {menu.map(m => {

          if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])){
            m.isOpened = true
          };

          return (
              <div key={m._id.secondCategory}>
                <div className={classNames(styles.secondLevel)} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                <div className={classNames(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened
                })}>
                  {buildThirdLevel(m.pages, menuItem.route)}
                </div>
              </div>
          )
        })}
      </div>
    )
  };  

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <div>
        {
          pages.map((p,i) => (
            <Link key={i} href={`/${route}/${p.alias}`} legacyBehavior>
              <a
                className={classNames(styles.thirdLevel, {
                  [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                })}
              >
                {p.category}
              </a>
            </Link>
          ))  
        }
      </div>
    );
  };

  return <>
    <div className={classNames(styles.menu)}>
      {buildFirstLevel()}
    </div>
  </>
};

