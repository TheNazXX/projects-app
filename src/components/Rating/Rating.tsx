import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';

import styles from './Rating.module.css';

export const Rating = ({ isEditable = true, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constractRating(rating);
  }, [rating]);

  const constractRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(idx + 1)}
        >
          <StarIcon tabIndex={isEditable ? 0 : -1} onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleKeyDown(idx + 1, e)} />
        </span>
      );
    });

    const changeDisplay = (idx: number) => {
      if (!isEditable) {
        return;
      }

      constractRating(idx);
    };

    const onClick = (idx: number) => {
      if (!isEditable || !setRating) {
        return;
      }

      setRating(idx);
    };

    const handleKeyDown = (idx: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code !== 'Enter' || !setRating) {
        return;
      }

      setRating(idx);
    };

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, idx) => (
        <span key={idx}>{r}</span>
      ))}
    </div>
  );
};
