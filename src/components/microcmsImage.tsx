'use client';
import Image from 'next/image';
import microCMSLoader from '@/lib/loader';

type BaseImg = {
  imgUrl: string;
  imgAlt: string;
  size: 'sm' | 'lg' | 'free' | 'xl' | 'thumbnail';
  img?: {
    height: number;
    width: number;
  };
  extendClass?: string;
};

const sizeList = {
  sm: {
    size: 20,
  },
  lg: {
    size: 50,
  },
  xl: {
    size: 500,
  },
  thumbnail: {
    size: 400
  }
};

const BaseImg = ({ imgUrl, imgAlt, size, extendClass = '' }: BaseImg) => {
  if (size !== 'free') {
    return (
      <Image
        loader={microCMSLoader}
        src={imgUrl}
        alt={imgAlt}
        height={sizeList[size].size}
        width={sizeList[size].size}
      />
    );
  } else {
    return (
      <img
        src={imgUrl}
        alt={imgAlt}
      />
    );
  }
};

export { BaseImg };