import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Book.module.scss';

type Props = {
  name: string;
  image: StaticImageData;
  link: string;
  alt?: string;
}

const book = ({ name, image, link, alt }: Props) => (
  <Link href={link} passHref>
    <div className={styles.box}>
      <div className={styles.imgBox}>
        <Image className={'rounded-2xl'} src={image} alt={alt} width={'80'} height={'80'} objectFit={'contain'} />
      </div>
      <p className={styles.p}>{name}</p>
    </div>
  </Link>
);

export default book;