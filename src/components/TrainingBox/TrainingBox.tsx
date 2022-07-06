import React, { useState } from 'react';
import { TrainingTypes } from 'src/components/TrainingBtn/TrainingBtn';
import ReactPlayer from 'react-player';
import ErrorBox from '../ErrorBox/ErrorBox';
import styles from './TrainingBox.module.scss';
import parseHtml from 'html-react-parser';

type Props = {
  type: TrainingTypes;
  link?: string;
  content?: JSX.Element | JSX.Element[];
  description?: string;
}

const TrainingBox = ({ type, link, content, description }: Props) => {
  const [isError, setIsError] = useState(false);
  const boxType = type == TrainingTypes.htmlText ? styles.textBox : type == TrainingTypes.pdf ? `${styles.textBox} !h-max` : styles.box;

  return (
    <div className={`${boxType} ${content ? '!overflow-auto' : ''}`}>
      {type === TrainingTypes.video ? !isError ? (
          <ReactPlayer
            className='!w-full'
            style={{ height: '300px' }}
            controls
            url={link}
            onError={() => setIsError(true)}
          />) : <ErrorBox /> :
        type === TrainingTypes.iframe ? (
          <iframe className='!w-full' style={{ height: '300px' }} src={link} frameBorder='0' allowFullScreen />
        ) : content}
      {description ?
        <p className={'not-italic font-base'}>{parseHtml(description)}</p> : ''}
    </div>
  );
}

export default TrainingBox;