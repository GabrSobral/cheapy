import { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'

export const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pages ] = useState([ 
    {
      id: 1,
      render: (item: any) => <div className={`${styles.slide_one} ${styles.page}`} key={item.id}/>
    },
    {
      id: 2,
      render: (item: any) => <div className={`${styles.slide_two} ${styles.page}`} key={item.id}/>
    },
    {
      id: 3,
      render: (item: any) => <div className={`${styles.slide_three} ${styles.page}`} key={item.id}/>
    }]);

  useEffect(() => {
    let timer = setTimeout(() => {
      bannerRef.current?.scrollTo(bannerRef.current?.scrollLeft + window.innerWidth, 0);
      setCurrentPage(prev => prev + 1);

      if(currentPage === pages.length) {
        setCurrentPage(1);
        bannerRef.current?.scrollTo(0,0);
      };
    },4000);

    return () => clearTimeout(timer);
  },[currentPage, pages]);

  return(
    <section className={styles.container}>
      <div className={styles.pagesContainer} ref={bannerRef}>
        {pages.map(item => item.render(item))}
      </div>

      <div className={styles.pageIndicatorContainer}>
        {pages.map((item) => 
          <div key={item.id} className={currentPage === item.id ? styles.focus : ""}/>)}
      </div>
    </section>
  )
}