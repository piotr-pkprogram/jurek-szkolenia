import type { NextPage } from 'next';
import Image from 'next/image';
import materials from 'public/img/introduction-img.svg';
import wstep from 'public/img/films_icons/wstep_do_klubu_wymarzonego_zycia.jpg';
import kamila_grusicka from 'public/img/films_icons/prezentacja_kamili_gruszeckiej.jpg';
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
        <Image src={arrow} alt={''} height={64} />
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
      <div className={styles.systemPoints}>
        <p>Punkty Systemu</p>
        <ol>
          <li>
            Zarejestruj się i złóż pierwsze zamówienie.
          </li>
          <li>
            Podejmij decyzję o comiesięcznych zakupach w swoim sklepie.
          </li>
          <li>
            Zostań Złotym Liderem Grupy.
          </li>
          <li>
            Pomóż swoim nowym partnerom zostać ZLG
          </li>
          <li>
            Naucz ich tego samego.
          </li>
        </ol>
      </div>
      <div className={styles.kwżPresentations}>
        <p>Prezentacje Klubu Wymarzonego Życia</p>
        <p>Jerzy Krzewicki</p>
        <Image src={wstep} alt={''} />
        <TextLink isExternalLink
                  to={'https://bit.ly/3IILcke'}>https://bit.ly/3IILcke</TextLink>
        <Image src={kamila_grusicka} alt={''} />
        <TextLink isExternalLink to={'https://bit.ly/3oaWwMM'}>https://bit.ly/3oaWwMM</TextLink>
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
