import React, { useState } from 'react';
import styles from './TextLink.module.scss';
import { useRouter } from 'next/router';
import {CopyToClipboard} from 'react-copy-to-clipboard';

enum BtnTypes {
  Button = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

type Props = {
  className?: string;
  type?: BtnTypes;
  to?: string;
  isExternalLink?: boolean;
  isRouterLink?: boolean;
  onClick?: any;
  children: string;
};

const TextLink = ({
  className = '',
  type,
  to = '',
  isExternalLink,
  isRouterLink,
  onClick,
  children
}: Props) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const copyAnimation = () => {
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }

  if (isExternalLink)
    return (
      <CopyToClipboard text={children} onCopy={copyAnimation}>
        <p className={`${styles.textLink} ${isCopied ? styles.textLinkCopied : ''} ${className}`}>{children}</p>
      </CopyToClipboard>
    );
  else if (isRouterLink)
    return (
      <a className={`${styles.textLink} ${className}`} href={to} onClick={() => router.push(to)}>
        {children}
      </a>
    );
  else
    return (
      <button className={`${styles.textLink} ${className}`} type={type} onClick={onClick}>
        {children}
      </button>
    );
};

export default TextLink;
