const Review = require('./review');

const mock = [
  {
    date: '3 Июня 2020',
    mark: 5,
    fullname: 'Сергей Ильин',
    comment: `Товар соответствует описанию. С продавцом не общался, но уверен, что он крут.
      Доставка за 3 недели! Спасибо;)`,
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
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
    pool: {
      yes: 32,
      no: 4,
    },
  },
];

Promise.all([Review.deleteMany({}), Review.insertMany(mock)])
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('data --->', 'ok');
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log('error --->', error);
  });
