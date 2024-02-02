import { useState, useEffect } from 'react';
import mainImage from '../../img/img.jpg';
import styles from './MainSection.module.css'

export const Image = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
   useEffect(() => {
    const resetAnimation = () => {
      setLoaded(false);
      setTimeout(() => {
        setLoaded(true);
      }, 0);
    };

    window.addEventListener('beforeunload', resetAnimation);

    return () => {
      window.removeEventListener('beforeunload', resetAnimation);
    };
   }, []);
    
  return (
    <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`}>
      <img src={mainImage} alt="Employee" width='610px' height='480px' />
    </div>
  );
};

