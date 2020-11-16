import { useState, useLayoutEffect, useEffect, useCallback } from 'react'

const defaultConfiguration = {
  sizes: [
    {
      min: 0,
      max: 576,
      code: 'xs'
    },
    {
      min: 576,
      max: 768,
      code: 'sm'
    },
    {
      min: 768,
      max: 992,
      code: 'md'
    },
    {
      min: 992,
      max: 1200,
      code: 'lg'
    },
    {
      min: 1200,
      max: Number.MAX_SAFE_INTEGER,
      code: 'xl'
    },
  ],
  mobileSizeCodes: [
    'xs',
    'sm'
  ]
}

const useSizeQuery = ({
    sizes = defaultConfiguration.sizes, 
    mobileSizes = defaultConfiguration.mobileSizeCodes 
  } = {}) => {

  const [screenWidth, setScreenWidth] = useState(0);
  const [sizeCode, setSizeCode] = useState(null);

  const isMobileSize = useCallback(() => {
    if (!sizeCode) {
      return false;
    }

    return mobileSizes?.includes(sizeCode);
  }, [sizeCode]);

  const getSizeCode = useCallback((screenWidth) => {
    if(screenWidth < 0 || screenWidth > Number.MAX_SAFE_INTEGER) {
      return null;
    }

    const size = sizes.filter(sizeConfiguration => {
      return screenWidth >= sizeConfiguration.min && screenWidth < sizeConfiguration.max;
    })[0];
    
    return size?.code;
  }, [screenWidth]);

  const updateScreenWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  useLayoutEffect(() => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    }
  }, []);

  useEffect(() => {
    setSizeCode(getSizeCode(screenWidth));
  }, [screenWidth]);

  return {
    size: sizeCode,
    isMobile: isMobileSize(sizeCode)
  }
};

export default useSizeQuery;