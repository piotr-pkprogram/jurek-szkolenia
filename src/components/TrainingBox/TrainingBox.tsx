import React from 'react';
import styles from './TrainingBox.module.scss';
import { TrainingTypes } from 'src/components/TrainingBtn/TrainingBtn';
import ReactPlayer from 'react-player';
// import ErrorBox from '../ErrorBox/ErrorBox';

type Props = {
  type: TrainingTypes;
  link?: string;
  content?: JSX.Element | JSX.Element[];
}

const TrainingBox = ({ type, link, content }: Props) => {
  // const [isError, setIsError] = useState(false);

  return (
    <div className={`${styles.box} ${content ? '!overflow-auto' : ''}`}>
      {type === TrainingTypes.video ?  (
          <ReactPlayer
            className='!w-full !h-full'
            controls
            url={link}
            // onError={() => setIsError(true)}
          />) :
        type === TrainingTypes.iframe ? (
            <iframe className='!w-full !h-full' src={link} frameBorder='0' allowFullScreen />
          ) :
          type === TrainingTypes.htmlText ? content : ''}
    </div>
  );
}

export default TrainingBox;