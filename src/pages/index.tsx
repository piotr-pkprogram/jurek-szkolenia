import type { NextPage } from 'next';
import Image from 'next/image';
import materials from 'public/img/introduction-img.svg';
import arrow from 'public/img/arrow.svg';
import { trainings } from 'data/TrainingsLinks';
import TrainingBtn from 'src/components/TrainingBtn/TrainingBtn';
import Book from 'src/components/Book/Book';
import shortArrow from 'public/img/short-arrow.svg';
import styles from 'src/styles/index.module.scss';
import { books } from 'data/books';

const Home: NextPage = () => {
  return (
    <main className={'relative'}>
      <h1 className={styles.title}>“Najlepszym sposobem na przewidywanie przyszłości
        jest jej kreowanie”</h1>
      <Image src={materials}
             alt={'Grafika wspólnie pracującego zespołu przy jakimś biurku i tablicy z rozpisanymi danymi zawierając tekst "O to Twój zestaw  materiałów"'}
             width={292.5} height={183} />
      <div className={styles.introBox}>
        <Image src={arrow} alt={''} height={93} />
        <p className={styles.startP}>Zaczynajmy!</p>
      </div>
      {trainings.map((t, i) => (
        <div key={t.id} className={`${styles.btnBox} ${i === 0 ? '!mt-2' : ''}`}>
          <TrainingBtn {...t} />
          {i === trainings.length - 1 ? '' : (<Image src={shortArrow} alt={''} />)}
        </div>
      ))}
      <div className={styles.booksContainer}>
        <p>Rekomendowane książki</p>
        {books.map(b => (
          <Book key={b.id} {...b} />
        ))}
      </div>
    </main>
  );
};

export default Home;
