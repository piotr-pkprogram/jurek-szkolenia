import { TrainingTypes } from 'src/components/TrainingBtn/TrainingBtn';
import ytIcon from 'public/img/youtube-icon.svg';
import loomIcon from 'public/img/loom-Logo.svg';
import zoomIcon from 'public/img/zoom-icon.svg';
import pdfIcon from 'public/img/pdf.svg';
import { v4 as uuidv4 } from 'uuid';

type Training = {
  id: string;
  type: TrainingTypes;
  platformIcon: StaticImageData;
  name: string;
  html?: JSX.Element | JSX.Element[];
  link?: string;
}

export const trainings: Training[] = [
  {
    id: uuidv4(),
    type: TrainingTypes.iframe,
    platformIcon: loomIcon,
    name: "Nagranie omawiające produkty (Jurek Krzewicki)",
    link: "https://www.loom.com/embed/2374b205158d4673ae986224edbdf2fc"
  },
  {
    id: uuidv4(),
    type: TrainingTypes.video,
    platformIcon: ytIcon,
    name: "Konferencja dr. Piotra Kardasza \n" +
      "kampanii zdrowia „Żyje świadomie”",
    link: "https://youtu.be/tGMu-acd0SU"
  },
  {
    id: uuidv4(),
    type: TrainingTypes.video,
    platformIcon: ytIcon,
    name: "Jak przygotować listę osób znajomych (Paulina i Kamil Nalewajko) ",
    link: "https://youtu.be/ut7WCISc_Zw"
  },
  {
    id: uuidv4(),
    type: TrainingTypes.video,
    platformIcon: zoomIcon,
    name: 'Szkolenie, jak skutecznie umawiać spotkania',
    link: '/uploads/GMT20220602-161014_Recording_1760x900.mp4'
  },
  {
    id: uuidv4(),
    type: TrainingTypes.pdf,
    platformIcon: pdfIcon,
    name: 'Umawianie Spotkań KWŻ',
    link: '/uploads/Umawianie-Spotkań-KWŻ.pdf'
  }
];