import React, { useState } from 'react';
import styles from 'src/components/CopyLink/CopyLink.module.scss';
import { useRouter } from 'next/router';
import {CopyToClipboard} from 'react-copy-to-clipboard';

type Props = {
  className?: string;
  children: string;
};

const CopyLink = ({
  className = '',
  children
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyAnimation = () => {
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }
    return (
      <CopyToClipboard text={children} onCopy={copyAnimation}>
        <p className={`${styles.textLink} ${isCopied ? styles.textLinkCopied : ''} ${className}`}>{children}</p>
      </CopyToClipboard>
    );
};

export default CopyLink;
