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
  html?: JSX.Element | JSX.Element[];
  link?: string;
}

const TrainingBtn = (props: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [body, setBody] = useState<HTMLBodyElement>();

  useEffect(() => {
    const body = document.querySelector('body');
    setBody(body as HTMLBodyElement);
  }, []);

  if (props.type === TrainingTypes.pdf)
    return (
      <>
        <a className={styles.btn} href={props.link}>
          <Image className={styles.btnIcon} src={props.platformIcon} alt={''} height={50} width={49.5} />
          <p className={styles.btnParagraph}>{props.name}</p>
        </a>
        {isVisible && body ? ReactDOM.createPortal(
          <div className={styles.modal}>
            <IconButton
              svg={close}
              className='absolute z-20 h-12 w-12 top-5 right-5'
              onClick={() => setIsVisible(false)}
            />
            <TrainingBox {...props} />
          </div>
          , body as HTMLBodyElement) : null}
      </>
    );

  else return (
    <>
      <button className={styles.btn} onClick={() => setIsVisible(true)}>
        <Image className={styles.btnIcon} src={props.platformIcon} alt={''} height={50} width={49.5} />
        <p className={styles.btnParagraph}>{props.name}</p>
      </button>
      {isVisible && body ? ReactDOM.createPortal(
        <div className={styles.modal}>
          <IconButton
            svg={close}
            className='absolute z-20 h-12 w-12 top-5 right-5'
            onClick={() => setIsVisible(false)}
          />
          <TrainingBox {...props} />
        </div>
        , body as HTMLBodyElement) : null}
    </>
  );
};

export default TrainingBtn;