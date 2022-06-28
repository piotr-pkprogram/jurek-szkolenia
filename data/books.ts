import Book from "src/components/Book/Book";
import book1 from 'public/img/biznes_XXI_wieku.jpg';
import book2 from 'public/img/badz_pro.jpg';
import book3 from 'public/img/bogaty_albo_biedny.jpg';
import book4 from 'public/img/jak_zdobyc_przyjaciol.jpg';
import { v4 as uuidv4 } from 'uuid';

type Book = {
  id: string;
  name: string;
  image: StaticImageData;
  link: string;
  alt?: string;
}

export const books: Book[] = [
  {
    id: uuidv4(),
    name: 'Biznes XXI wieku - Robert Kiyosaki',
    image: book1,
    link: 'https://bit.ly/3u1JioN'
  },
  {
    id: uuidv4(),
    name: 'Bądź pro - Eric Worre - ebook',
    image: book2,
    link: 'https://bit.ly/3xUHsak'
  },
  {
    id: uuidv4(),
    name: 'Biedny bogaty po prostu różni mentalnie',
    image: book3,
    link: 'https://bit.ly/3nd7mRJ'
  },
  {
    id: uuidv4(),
    name: 'Jak zdobyć przyjaciół i zjednać sobie ludzi',
    image: book4,
    link: 'https://bit.ly/3QLvcl1'
  }
];