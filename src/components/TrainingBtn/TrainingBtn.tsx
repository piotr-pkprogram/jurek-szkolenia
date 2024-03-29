import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TraningBtn.module.scss';
import TrainingBox from 'src/components/TrainingBox/TrainingBox';
import ReactDOM from 'react-dom';
import IconButton from 'src/components/IconButton/IconButton';
import close from 'public/img/close.svg';

export enum TrainingTypes {
  video,
  pdf,
  htmlText,
  iframe
}

type Props = {
  type: TrainingTypes;
  platformIcon: StaticImageData;
  name: string;
  content?: JSX.Element | JSX.Element[];
  link?: string;
  title?: string;
  description?: string;
}

const TrainingBtn = ({ type, platformIcon, name, link, content, title, description }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [body, setBody] = useState<HTMLBodyElement>();

  useEffect(() => {
    const body = document.querySelector('body');
    setBody(body as HTMLBodyElement);
  }, []);

  return (
    <>
      <button className={styles.btn} onClick={() => setIsVisible(true)} title={title ? title : ''}>
        {platformIcon.src.includes('.svg') ?
          <Image className={styles.btnIcon} src={platformIcon} alt={''} height={50} width={49.5} /> :
          <Image className={styles.btnIcon} src={platformIcon} alt={''} height={50} width={70} />}
        <p className={styles.btnParagraph}>{name}</p>
      </button>
      {isVisible && body ? ReactDOM.createPortal(
        <div className={styles.modal}>
          <IconButton
            svg={close}
            className='absolute z-20 h-12 w-12 top-5 right-5'
            onClick={() => setIsVisible(false)}
          />
          <TrainingBox type={type} link={link} content={content} description={description} />
        </div>
        , body as HTMLBodyElement) : null}
    </>
  );
};

export default TrainingBtn;