'use client';

import { useRouter } from 'next/navigation';
import { LoadMoreProps } from './LoadMore.props';
import { Button } from '../Button/Button';

export const LoadMore = ({startCursor, endCursor, hasNextPage, hasPreviousPage}: LoadMoreProps) => {

  const router = useRouter();

  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if(direction === "next" && hasNextPage){
      currentParams.delete("startcursor");
      currentParams.set("endcursor", endCursor);

    }else if(direction === 'first' && hasPreviousPage){
      currentParams.delete("endcursor");
      currentParams.set("startcursor", startCursor);
    };

    const newSearchParams = currentParams.toString();
    const newPathname = `${window.location.pathname}?${newSearchParams}`

    router.push(newPathname)
  };

  return (
    <div
      className="w-full flexCenter gap-5 mt-10"
    >
      <Button title="<" handleClick={() => handleNavigation('first')} disabled={!hasPreviousPage}/>
      <Button title=">" handleClick={() => handleNavigation('next')} disabled={!hasNextPage}/>
    </div>
  );
};
