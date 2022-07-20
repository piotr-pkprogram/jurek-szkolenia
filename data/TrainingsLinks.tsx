import { TrainingTypes } from 'src/components/TrainingBtn/TrainingBtn';
import documentIcon from 'public/img/document-icon.svg';
import styles from 'src/styles/trainings.module.scss';
import wstep from 'public/img/films_icons/produkty_duolife.jpg';
import lista_partnerow from 'public/img/films_icons/lista_partnerow_duolife.jpg';
import umawianie_spotkan from 'public/img/films_icons/umawianie_spotkan.jpg';
import pdfIcon from 'public/img/pdf.svg';
import konference_dr_kardasz from 'public/img/films_icons/konferencja_dr_kardasza.jpg';
import plan_wynagrodzen from 'public/img/films_icons/plan_wynagrodzen.jpg';
import zmieniaj_swiat from 'public/img/films_icons/zmieniaj_swiat_z_duolife.jpg';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import React from 'react';
import TextLink from 'src/components/TextLink/TextLink';

type Training = {
  id: string;
  type: TrainingTypes;
  platformIcon: StaticImageData;
  name: string;
  content?: JSX.Element | JSX.Element[];
  link?: string;
  description?: string;
  title?: string;
}

export const trainings: Training[] = [
  {
    id: uuidv4(),
    type: TrainingTypes.iframe,
    platformIcon: wstep,
    name: 'Nagranie omawiające produkty (Jurek Krzewicki)',
    link: 'https://www.loom.com/embed/2374b205158d4673ae986224edbdf2fc',
    description: 'W naszym biznesie bardzo ważne jest zbudowanie wiary w czterech aspektach.<br />' +
      'Wiara w branżę <br /> ' +
      'Wiara w firmę<br />' +
      'Wiara w produkty i <br />' +
      'Wiara w siebie<br />' +
      '<br />' +
      'W poniższym filmie, znajdziesz krótkie omówienie produktów Duolife. Materiał ten, pomoże Ci zbudować  przekonanie, poznasz naszą ofertę, oraz otrzymasz narzędzie do wysłania osobom, którym będziesz chciał opowiedzieć więcej o produktach. <br />' +
      '<br />'
  },
  {
    id: uuidv4(),
    type: TrainingTypes.video,
    platformIcon: lista_partnerow,
    name: 'Jak przygotować listę osób znajomych (Paulina i Kamil Nalewajko) ',
    link: 'https://youtu.be/ut7WCISc_Zw',
    title: 'Doskonały materiał tłumaczący to, co jest największym aktywem w naszym biznesie. Czyli osoby, które miałeś okazję poznać jako swoich znajomych. Jak przygotować listę takich osób i odpowiednio z nią pracować. '
  },
  {
    id: uuidv4(),
    type: TrainingTypes.video,
    platformIcon: umawianie_spotkan,
    name: 'Szkolenie, jak skutecznie umawiać spotkania',
    link: '/uploads/GMT20220602-161014_Recording_1760x900.mp4',
    description: 'Umawianie spotkań, dla wielu nowych osób w naszym biznesie wydaje się być najłatwiejszą i najbardziej banalną rzeczą. Nie ma nic bardziej mylnego. Jeśli nie opanujesz, skutecznych metod umawiania spotkań, to bardzo prawdopodobne jest, że spalisz swoje kontakty, po czym zniechęcisz się do tego biznesu. <br />' +
      'Dobrą wiadomością jest, że jeśli nauczysz się skutecznego umawiania, nawet ponad 90% Twoich znajomych zgodzi się z Tobą spotkać i posłuchać, jakim projektem się zająłeś. Od tego momentu po warsztacie z liderem, umawianie spotkań, stanie się dla Ciebie zabawą i przyjemnością. :) '
  },
  {
    id: uuidv4(),
    type: TrainingTypes.pdf,
    platformIcon: pdfIcon,
    name: 'Umawianie Spotkań Klubu Wymarzonego Życia',
    content: <div className={styles.box}>
      <a className={styles.link} href={'/uploads/Umawianie-Spotkań-KWŻ.pdf'}>Materiał PDF</a>
      <br />
      <br />
      <p className={styles.p}>Oprócz materiału wideo, dla ułatwienia w opanowaniu umiejętności umawiania spotkań,
        zamieszczamy bardzo szczegółowo opisany materiał, z którego w bardzo prosty i przejrzysty sposób, będziesz mógł
        opanować teorię, w kwestii umawiania spotkań. </p>
    </div>
  },
];

export const suppTraining =   {
  id: uuidv4(),
  type: TrainingTypes.htmlText,
  platformIcon: documentIcon,
  name: 'Materiały Uzupełniające',
  content: <div className={styles.box}>
    <div>
      <Image className={'rounded-md'} src={konference_dr_kardasz} alt={''} height={50} width={70} />
      <p className={styles.p}>Konferencja dr. Piotra Kardasza kampanii zdrowia „Żyje świadomie</p>
      <TextLink className={styles.link}
         to={'https://youtu.be/tGMu-acd0SU'} isExternalLink>https://youtu.be/tGMu-acd0SU</TextLink>
      <br />
      <br />
      <p className={styles.p}>Ten materiał często działa jak magiczna różdżka. dr h.c Piotr Kardasz w fenomenalny sposób, opowiada o tym, co dobrego natura może zrobić dla naszego zdrowia, po to, by je zachować lub odzyskać. Nie musisz mówić o żadnych produktach, ani suplementach. O żadnej sprzedaży. Wystarczy zapromujesz osobom, które interesują się zdrowiem, dlaczego warto jest ten wykład obejrzeć, to po obejrzeniu, wielu z nich, samych do Ciebie wróci z wyborem produktów, które będą chcieli zamówić.</p>
    </div>
    <br />
    <hr />
    <br />
    <div>
      <Image className={'rounded-md'} src={plan_wynagrodzen} alt={''} height={50} width={70} />
      <p className={styles.p}>Plan Wynagrodzeń</p>
      <TextLink className={styles.link}
         to={'https://www.loom.com/embed/06281ac0fc0d4f5bbe0a7d58d5f633a9'} isExternalLink>https://www.loom.com/embed/06281ac0fc0d4f5bbe0a7d58d5f633a9</TextLink>
      <br />
      <br />
      <p className={styles.p}>Tu znajdziesz szczegółowo omówiony planu wynagrodzeń. Z tego filmu dowiesz się, ile
        prowizji i z jakich premii będziesz zarabiał. Ten materiał napewno dodaje wiatru w skrzydła. ;)</p>
    </div>
    <br />
    <hr />
    <br />
    <div>
      <Image className={'rounded-md'} src={zmieniaj_swiat} alt={''} height={50} width={70} />
      <p className={styles.p}>„Zmieniaj świat z Duolife” Założyciele Piotr Pacyga, Norbert Janeczek</p>
      <TextLink className={styles.link} to={'https://youtu.be/kGK5E93HrN8'} isExternalLink>https://youtu.be/kGK5E93HrN8</TextLink>
      <br />
      <br />
      <p className={styles.p}>To doskonały materiał, przedstawiający wizję założycie na najbliższe lata. Jak wiesz,
        jednym elementów nad którymi powinieneś pracować, jest wiara w branżę i wiara w firmę. To nagranie, nie
        powinno
        pozostawić Ci żadnych wątpliwości.</p>
    </div>
  </div>
};