import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import FeedbackItem from './feedback-item';
import './style.sass';

const mock = [
  {
    date: '3 Июня 2020',
    mark: 5,
    fullname: 'Сергей Ильин',
    comment: `Товар соответствует описанию. С продавцом не общался, но уверен, что он крут.
      Доставка за 3 недели! Спасибо;)`,
    feedback: {
      yes: 234,
      no: 7,
    },
  },
  {
    date: '10 Июня 2020',
    mark: 5,
    fullname: 'Щенин Дмитрий',
    comment: `Это второй, который я купил у продавца.
      Доставка была быстрой, несмотря на проблемы, связанные с вирусом.
      Я действительно рекомендую продавцу всем.`,
    feedback: {
      yes: 432,
      no: 3,
    },
  },
  {
    date: '18 Июня 2020',
    mark: 4,
    fullname: 'Анишина Екатерина',
    comment: `Покупаю второй уже, первый подарила подружке,
     доставка уж больно долго 2 недели(Краснодар). А так всё Окей`,
    feedback: {
      yes: 217,
      no: 5,
    },
  },
  {
    date: '20 Июня 2020',
    mark: 5,
    fullname: 'Кирилл Пахомов',
    comment: `Всем советую , до Владимира шло 35 дней , магазин отличный,
      сам pod тоже подойдёт для тех кому нужен тх и немного пара`,
    feedback: {
      yes: 394,
      no: 24,
    },
  },
  {
    date: '23 Июня 2020',
    mark: 5,
    fullname: 'Сергей Гущин',
    comment: `Доставка до Красноярска заняла 31 день, по первым
    впечатлениям круто передаёт вкус,у меня это яблоко, очень компактный, на сколько хватит,
    пока сказать не могу.`,
    feedback: {
      yes: 208,
      no: 13,
    },
  },
  {
    date: '25 Июня 2020',
    mark: 5,
    fullname: 'Игорь Королёв',
    comment:
      'Всё отлично, доставка 2 недели до Волгограда. Всё соответствует описанию. Рекомендую!',
    feedback: {
      yes: 148,
      no: 4,
    },
  },
  {
    date: '2 Июля 2020',
    mark: 5,
    fullname: 'Артём Пономарёв',
    comment: `Товар отличный. Приехал где-то за месяц.
      К моему удивлению он был заряжен на 100%. Хороший вкус и много пара`,
    feedback: {
      yes: 152,
      no: 14,
    },
  },
  {
    date: '5 Июля 2020',
    mark: 5,
    fullname: 'Татьяна Жданова',
    comment: `Товар пришёл быстро (2,5 недели).
      Всё в целости, коробка не помята. Очень рада заказу. Продавцу спасибо!`,
    feedback: {
      yes: 122,
      no: 45,
    },
  },
  {
    date: '6 Июля 2020',
    mark: 5,
    fullname: 'Михаил Тетерин',
    comment: `Приехал очень быстро, меньше чем за 2 недели.
      Затяжка хорошая, компактный, есть индикатор заряда, в комплекте зарядка и инструкция.
      Все супер, всем советую!) `,
    feedback: {
      yes: 210,
      no: 37,
    },
  },
  {
    date: '9 Июля 2020',
    mark: 5,
    fullname: 'Антон Сорокин',
    comment: `Пришло за 30 дней.
      Упаковка с картриджами была немного помята, но это не критично.
      Проверил все картриджи работают исправно. Ничего не подтекает.`,
    feedback: {
      yes: 32,
      no: 4,
    },
  },
];

function Feedback() {
  return (
    <Element component='section' className=' text-center px-lg-5' id='review'>
      <SectionHeader
        header='Отзывы покупателей'
        text='* Вы можете оставить отзыв после получения товара'
      />
      <div className='feedback-line container'>
        {mock.map((feedback) => (
          <FeedbackItem key={feedback.date} {...feedback} />
        ))}
      </div>
    </Element>
  );
}

export default Feedback;
