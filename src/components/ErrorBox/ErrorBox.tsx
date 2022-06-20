import React from 'react';
import Image from 'next/image';
import styles from 'src/components/ErrorBox/ErrorBox.module.scss';
import offline from 'public/img/web.png';

const ErrorBox = () => (
  <div className={styles.warpper}>
    <div className={styles.img}>
      <Image src={offline} alt='' />
    </div>
    <span className={'!not-italic'}>Brak Połączenia</span>
    <span className={'!not-italic'}>Nie można wczytać materiału</span>
    <span className={'!not-italic'}>Prosimy połączyć się z internetm i odświeżyć stronę.</span>
  </div>
);

export default ErrorBox;
