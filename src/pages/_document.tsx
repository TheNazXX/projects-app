import { Html, Head, Main, NextScript } from 'next/document'
import { MenuItem } from '@/interfaces/menu.interface';

export default function Document({menu}: HomeProps): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

interface HomeProps{
  menu: MenuItem[];
  firstCategory: Number;
};
