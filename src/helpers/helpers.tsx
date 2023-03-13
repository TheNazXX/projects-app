import CoursesSvg from './Icons/menu-hat.svg';
import ServicesSvg from './Icons/menu-services.svg';
import BooksSvg from './Icons/menu-book.svg';
import ProductsSvg from './Icons/menu-box.svg';

import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesSvg />, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Севрисы', icon: <ServicesSvg />, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksSvg />, id: TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsSvg />, id: TopLevelCategory.Products},
]
