import React from 'react';
import SectionHeader from '../../common/section-header';

export default function TermsAndConditionsPage() {
  return (
    <section className='container py-5'>
      <SectionHeader header='Условия и положения' text='' />
      <div className='container'>
        <div className='jumbotron'>
          <h2>Ваши покупки находятся под защитой, если:</h2>
          <ol>
            <li>Товары куплены на нашей платформе.</li>
            <li>Товар повреждён, с браком, существенно отличается от описания.</li>
            <li>
              Вы не получили заказ по причинам, которые не зависят от вас (к последним относится,
              например, неверно указанный адрес).
            </li>
            <li>
              Товар доставлен, но не соответствует заказу или товар оказался ненадлежащего качества
            </li>
            <li>С момента оформления заказа прошло более 90 календарных дней</li>
            <li>
              Товар не был доставлен или был повреждён по вине службы доставки (обратитесь в
              отделение перевозчика для уточнения процедуры компенсации)
            </li>
            <li>
              На момент обращения покупатель не получил компенсацию по сделке от продавца или
              платежной системы
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}