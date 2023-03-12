import { AppContext } from '@/context/app.context';
import { useContext, useEffect } from 'react';
import styles from './menu.module.css';

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  return <>{menu.map(({_id: {secondCategory}}) => <div key={secondCategory}>{secondCategory}</div>)}</>
};