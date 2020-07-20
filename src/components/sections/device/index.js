import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import ImgJuulWebp from './device.webp';
import ImgJuulJpg from './device.jpg';
import Article from '../../common/article';

const header = 'Знакомьтесь JUUL';
const text = 'Продуманная и комфортная в использовании альтернатива.';
const articles = [
  {
    id: 'akbdkabdkas',
    header: 'JUUL особенное устройство',
    text: `В JUUL используется запатентованая жидкость с крепостью никотина 5%,
      что передает привычные ощущения.`,
  },
  {
    id: 'dzsvfndfsnkas',
    header: 'Прост в использовании',
    text: 'Никаких кнопок и переключателей. Вставляешь JUULpods и пользуешься.',
  },
  {
    id: 'jfdsgklasassd',
    header: 'Функционально',
    text: `Автоматическая регулировка температуры, солевой никотин и подобранная
      крепость - соответствуют ожиданиям тех, кто ищет альтернативу.`,
  },
];

export default function Device() {
  return (
    <Element component='section' className='container-fluid px-lg-5' id='device'>
      <SectionHeader text={text} header={header} />
      <div className='row px-lg-5'>
        <div className='col-12 col-lg-4'>
          {articles.map((article) => (
            <Article key={article.id} header={article.header} text={article.text} muted />
          ))}
        </div>
        <div className='col-12 col-lg-8 d-flex'>
          <picture>
            <source srcSet={ImgJuulJpg} type='image/jpg' />
            <img className='w-100' src={ImgJuulWebp} alt='text here' />
          </picture>
        </div>
      </div>
    </Element>
  );
}
