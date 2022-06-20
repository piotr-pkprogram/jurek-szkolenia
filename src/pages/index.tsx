import type { NextPage } from 'next';
import Image from 'next/image';
import materials from 'public/img/introduction-img.svg';
import arrow from 'public/img/arrow.svg';
import { trainings } from 'data/TrainingsLinks';
import TrainingBtn from 'src/components/TrainingBtn/TrainingBtn';
import shortArrow from 'public/img/short-arrow.svg';
import styles from 'src/styles/index.module.scss';

const Home: NextPage = () => {
  return (
    <main>
      <h1 className={styles.title}>“Najlepszym Przewidywaniem Przyszłości
        jest jej kierowanie”</h1>
      <Image src={materials}
             alt={'Grafika wspólnie pracującego zespołu przy jakimś biurku i tablicy z rozpisanymi danymi zawierając tekst "O to Twój zestaw  materiałów"'}
             width={292.5} height={183} />
      <div className={styles.introBox}>
        <Image src={arrow} alt={''} height={93} />
        <p className={styles.startP}>Zaczynajmy!</p>
      </div>
      {trainings.map((t, i) => (
        <div key={t.id} className={`${styles.btnBox} ${i === 0 ? '!mt-2' : ''}`}>
          <TrainingBtn type={t.type} platformIcon={t.platformIcon} name={t.name} link={t.link} html={t.html} />
          {i === trainings.length - 1 ? '' : (<Image src={shortArrow} alt={''} />)}
        </div>
      ))}
    </main>
  );
};

export default Home;
