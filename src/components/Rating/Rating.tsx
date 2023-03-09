import { useEffect, useState, KeyboardEvent } from 'react';
import RatingProps from './Rating.props';
import styles from './rating.module.css';
import StarIcon from './star.svg';
import classNames from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating)
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateRatingArray = ratingArray.map((elem: JSX.Element, i: number) => {
      return (
        <span
          className={classNames(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.isEditable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon 
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
        />
        </span>
      );
    });

    setRatingArray(updateRatingArray);
  };

  const changeDisplay = (i: number) => {
    if(!isEditable)return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if(!isEditable || !setRating)return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if(e.code !== 'Enter' || !setRating)return;
    setRating(i);
  }

  return <div
    {...props}
   >
    {ratingArray.map((elem, i) => <span key={i}>{elem}</span>)}
   </div>;
};
