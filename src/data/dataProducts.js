const dataProducts = [
    {
        id: 1,
        name: 'Филе пангасиуса',
        price: '259',
        weight: '1 кг',
        category: 'Рыба',
        img: "рыба"
    },
    {
        id: 2,
        name: 'Филе горбуши',
        price: '445',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 3,
        name: 'Филе форели',
        price: '1500',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 4,
        name: 'Филе тунца',
        price: '450',
        weight: '0.5 кг',
        category: 'Рыба'
    },
    {
        id: 5,
        name: 'Филе минтая',
        price: '405',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 6,
        name: 'Стейк лосося',
        price: '1430',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 7,
        name: 'Стейк кеты',
        price: '675',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 8,
        name: 'Стейк кижуча',
        price: '710',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 9,
        name: 'Стейк форели',
        price: '1380',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 10,
        name: 'Стейк трески',
        price: '420',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 11,
        name: 'Лосось',
        price: '1170',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 12,
        name: 'Нерка',
        price: '895',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 13,
        name: 'Форель',
        price: '445',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 14,
        name: 'Дорадо',
        price: '510',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 15,
        name: 'Камбала',
        price: '385',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 16,
        name: 'Морской окунь',
        price: '390',
        weight: '1 кг',
        category: 'Рыба'
    },
    {
        id: 17,
        name: 'Кальмар',
        price: '380',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 18,
        name: 'Мидии в раковине',
        price: '595',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 19,
        name: 'Мясо мидий',
        price: '420',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 20,
        name: 'Мясо рапана',
        price: '450',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 21,
        name: 'Креветки 120+',
        price: '825',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 22,
        name: 'Креветки королевские',
        price: '610',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 23,
        name: 'Лангустины',
        price: '1450',
        weight: '2 кг',
        category: 'Морепродукты'
    },
    {
        id: 24,
        name: 'Крабовые палочки',
        price: '275',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 25,
        name: 'Креветки очищенные',
        price: '490',
        weight: '0.5 кг',
        category: 'Морепродукты'
    },
    {
        id: 26,
        name: 'Морское ассорти',
        price: '475',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 27,
        name: 'Икра нерки',
        price: '370',
        weight: '90 г.',
        category: 'Морепродукты'
    },
    {
        id: 28,
        name: 'Филе форели слабосол',
        price: '1500',
        weight: '1 кг',
        category: 'Морепродукты'
    },
    {
        id: 29,
        name: 'Филе куриной грудки',
        price: '330',
        weight: '1 кг',
        category: 'Курица'
    },
    {
        id: 30,
        name: 'Филе бедра',
        price: '358',
        weight: '1 кг',
        category: 'Курица'
    },
    {
        id: 31,
        name: 'Голень куриная',
        price: '240',
        weight: '1 кг',
        category: 'Курица'
    },
    {
        id: 32,
        name: 'Цыплята корнишоны',
        price: '260',
        weight: '1 кг',
        category: 'Курица'
    },
    {
        id: 33,
        name: 'Печень куриная',
        price: '210',
        weight: '1 кг',
        category: 'Курица'
    },
    {
        id: 34,
        name: 'Блинчики с мясом',
        price: '285',
        weight: '0.5 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 35,
        name: 'Блинчики с творогом',
        price: '285',
        weight: '0.5 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 36,
        name: 'Сосиски',
        price: '305',
        weight: '1 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 37,
        name: 'Наггетсы куриные',
        price: '380',
        weight: '1 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 38,
        name: 'Котлеты из тунца',
        price: '340',
        weight: '1 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 39,
        name: 'Котлеты лососевые',
        price: '315',
        weight: '1 кг',
        category: 'Полуфабрикаты'
    },
    {
        id: 40,
        name: 'Гриб белый',
        price: '520',
        weight: '0.5 кг',
        category: 'Овощи'
    },
    {
        id: 41,
        name: 'Картофель фри',
        price: '290',
        weight: '1 кг',
        category: 'Овощи'
    },
    {
        id: 42,
        name: 'Фасоль',
        price: '195',
        weight: '1 кг',
        category: 'Овощи'
    },
    {
        id: 43,
        name: 'Спаржа',
        price: '270',
        weight: '0.5 кг',
        category: 'Овощи'
    },
    {
        id: 44,
        name: 'Капуста цветная',
        price: '175',
        weight: '1 кг',
        category: 'Овощи'
    },
    {
        id: 45,
        name: 'Капуста брокколи',
        price: '175',
        weight: '0.7 кг',
        category: 'Овощи'
    },
    {
        id: 46,
        name: 'Компотная смесь',
        price: '250',
        weight: '1 кг',
        category: 'Ягоды'
    },
    {
        id: 47,
        name: 'Черная смородина',
        price: '180',
        weight: '0.5 кг',
        category: 'Ягоды'
    },
    {
        id: 48,
        name: 'Вишня',
        price: '265',
        weight: '1 кг',
        category: 'Ягоды'
    },
    {
        id: 49,
        name: 'Облепиха',
        price: '275',
        weight: '1 кг',
        category: 'Ягоды'
    },

]
export default dataProducts;