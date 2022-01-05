import { FeedbackItem } from './FeedbackItem'
import styles from './style.module.scss'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useProduct } from '../../contexts/product'
import { IFeedback } from '../../types/IFeedback'
import { CreateFeedbackModal } from './CreateFeedbackModal'

export const Feedbacks = () => {
  const { product } = useProduct();
  const [ feedbacks, setFeedbacks ] = useState<IFeedback[]>([]);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  useEffect(() => {
    if(!product) return;
    
    (async () => {
      const { data } = await api.get(`/feedbacks/${product?.id}`);
      setFeedbacks(data)
    })();
  },[product])

  return(
    <section className={styles.feedbacks_container}>
      { isModalVisible && <CreateFeedbackModal/> }
      <div className={styles.feedbacks_container_top}>
        <h3>Avaliações</h3>

        <button type="button" onClick={() => setIsModalVisible(p => !p)}>
          Escrever avaliação
        </button>
      </div>

      <div className={styles.feedbacks_list}>
        {feedbacks.map(item => <FeedbackItem key={item.user.id} feedback={item}/>)}
      </div>
    </section>
  )
}