export interface ProductCharacterisctic{
  value: string;
  name: string;
};

export interface ReviewModal{
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
};

export interface ProductModel{
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacterisctic[];
  createdAt: Date;
  updateAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: ReviewModal[];
  reviewCount: number;
  reviewAvg?: number;
  advatages: string;
};