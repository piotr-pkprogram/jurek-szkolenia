import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from 'src/components/TrainingBtn/TraningBtn.module.scss';
import IconButton from 'src/components/IconButton/IconButton';
import { TrainingTypes } from 'src/components/TrainingBtn/TrainingBtn';
import TrainingBox from 'src/components/TrainingBox/TrainingBox';
import close from 'public/img/close.svg';
import Image from 'next/image';

type Props = {
  type: TrainingTypes;
  link: string;
  img: StaticImageData;
  description?: string;
  content?: JSX.Element | JSX.Element[];
}

const ImageTrainingBtn = (props:Props) => {
  const [body, setBody] = useState<HTMLBodyElement>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector('body');
    setBody(body as HTMLBodyElement);
  }, []);

  return (
    <>
      <Image className={'cursor-pointer transition-opacity hover:opacity-75'} src={props.img} alt={''} onClick={() => setIsVisible(true)} />
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
}

export default ImageTrainingBtn