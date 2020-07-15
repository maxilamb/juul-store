import React from 'react';
import SectionHeader from '../../common/section-header';

function TermsOfUse() {
  const { origin } = window.location;
  const url = `${origin}/terms`;

  return (
    <section className='container'>
      <SectionHeader header='Пользовательское соглашение' text='' />
      <div className='jumbotron'>
        <p>
          Сайт <a href={origin}>{origin}</a> предоставляет услуги на условиях, описанных в настоящем
          документе. Пользовательское соглашение может быть изменено без предварительного
          уведомления. Текущая версия пользовательского соглашения доступна по адресу
          <a href={url}>{url}</a>. Моментом заключения настоящего пользовательского соглашения
          считается момент любого взаимодействия пользователя с сайтом. Настоящим пользователи
          подтверждают свое согласие со всеми условиями пользовательского соглашения.
        </p>
        <h2>Обязанности пользователя</h2>
        <p>
          При оформлении заказа Вы обязаны предоставить правдивую, точную и полную информацию о
          себе. В случае предоставления неверной информации, <a href={origin}>{origin}</a> имеет
          право отменить Вашу доставку заказаного товара без возврата средств.В случае преобритения
          товара лицом не достигшего совершеннолетнего возраста, оплата товара анулируется, без
          возврата средств. Не использовать самостоятельно или с привлечением третьих лиц оказание
          услуг и/или возможности сайта<a href={origin}>{origin}</a> в целях, которые могут быть
          квалифицированы как нарушение прав третьих лиц на объекты интеллектуальной собственности,
          недобросовестная конкуренция, иное нарушение закона. Не осуществлять действий, которые
          влияют на нормальную работу сайта
          <a href={origin}>{origin}</a>, являются его недобросовестным использованием.
        </p>
        <h2>Ограничение ответственности</h2>
        <p>
          Услуги на сайте <a href={origin}>{origin}</a> предоставляются «как есть». Администрация
          <a href={origin}>{origin}</a> не гарантирует сохранность информации о пользователе после
          истечения 30-и дневного периода с момента выполнения заказа. Администрация
          <a href={origin}>{origin}</a> предпринимает все усилия для сохранения информации, о
          покупках пользователей, но не гарантирует ее сохранность в случае наступления
          форс-мажорных обстоятельств.
        </p>
        <p>Вы полностью понимаете и соглашаетесь с тем, что:</p>
        <ol>
          <li>
            Администрация <a href={origin}>{origin}</a> не гарантирует отсутствия ошибок и сбоев, в
            том числе в отношении работы программного обеспечения. Администрация
            <a href={origin}>{origin}</a> предпримет все усилия для устранения каких-либо сбоев и
            ошибок, в случае их возникновения, в максимально короткие сроки.
          </li>
          <li>
            Администрация <a href={origin}>{origin}</a> не гарантирует, что услуги будут
            соответствовать Вашим требованиям, предоставляться непрерывно и безошибочно.
          </li>
          <li>
            Администрация <a href={origin}>{origin}</a> не гарантирует, что качество товаров, услуг
            или информации, приобретенных или полученных с помощью <a href={origin}>{origin}</a>,
            будет соответствовать вашим ожиданиям и/или требованиям.
          </li>
          <li>
            Администрация <a href={origin}>{origin}</a> не гарантирует, что товары или их реплики,
            услуги или информация, заказанные с помощью <a href={origin}>{origin}</a>, будут
            предоставлены поставщиком в соответствии с вашими ожиданиями.
          </li>
          <li>
            Скачивание любой информации или материалов с сайта <a href={origin}>{origin}</a>
            осуществляется на свой страх и риск. Вы полностью ответственны за потерю информации или
            вред, нанесенный Вашему компьютеру вследствие скачивания информации с сайта
            <a href={origin}>{origin}</a>.
          </li>
        </ol>
      </div>
    </section>
  );
}

export default TermsOfUse;
