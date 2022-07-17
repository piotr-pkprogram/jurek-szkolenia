import type { NextPage } from 'next';
import Image from 'next/image';
import materials from 'public/img/introduction-img.svg';
import arrow from 'public/img/arrow.svg';
import { suppTraining, trainings } from 'data/TrainingsLinks';
import TrainingBtn from 'src/components/TrainingBtn/TrainingBtn';
import Book from 'src/components/Book/Book';
import shortArrow from 'public/img/short-arrow.svg';
import styles from 'src/styles/index.module.scss';
import { books } from 'data/books';
import TextLink from 'src/components/TextLink/TextLink';

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
      <div className={styles.line} />
      <TrainingBtn {...suppTraining} />
      <div className={styles.kwżPresentations}>
        <p>Prezentacji Kwż</p>
        <TextLink isExternalLink
                  to={'https://www.loom.com/share/22dc62692189491784a81533c6a0189f'}>https://www.loom.com/share/22dc6269218949178
          4a81533c6a0189f</TextLink>
        <TextLink isExternalLink to={'https://youtu.be/5fV1tdCP2qI'}>https://youtu.be/5fV1tdCP2qI</TextLink>
      </div>
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
