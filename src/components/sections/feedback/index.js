import React, { useEffect, useState } from 'react';
import { Element } from 'rc-scroll-anim';
import axios from 'axios';
import SectionHeader from '../../common/section-header';
import FeedbackItem from './feedback-item';
import './style.sass';
import { Loader } from '../../common/stub/loader';

function Feedback() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const {
        data: { reviews },
      } = await axios.get('/api/v1/review');
      setData(reviews);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Element component='section' className=' text-center px-lg-5' id='review'>
      <SectionHeader
        header='Отзывы покупателей'
        text='* Вы можете оставить отзыв после получения товара'
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className='feedback-line container'>
          {data.map((feedback) => (
            <FeedbackItem key={feedback.date} {...feedback} />
          ))}
        </div>
      )}
    </Element>
  );
}

export default Feedback;
