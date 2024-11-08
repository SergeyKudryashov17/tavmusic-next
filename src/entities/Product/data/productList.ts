import { IProduct } from "../types/IProduct";
import img1 from '@/shared/assets/img/bassguitars/1b.jpg';
import img2 from '@/shared/assets/img/electricguitars/1e.jpg';
import img3 from '@/shared/assets/img/bassguitars/2b.jpg';
import img4 from '@/shared/assets/img/bassguitars/3b.jpg';
import img5 from '@/shared/assets/img/piano/1p.jpg';
import img6 from '@/shared/assets/img/acousticguitars/1a.jpg';

export const productList: IProduct[] = [
    {
        id: 0,
        name: 'Harley Benton HBO-850 Bass Natural',
        categoryID: 10,
        brandID: 8,
        cost: 24780.00,
        image: img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            'Тип корпуса: Ovation',
            'Верхняя дека: ель',
            'Корпус: ABS Super Shallow Bowl',
            'Гриф: красное дерево',
            'Профиль грифа: Modern C',
            'Накладка грифа: Roseacer',
            'Радиус накладки грифа: 400 мм',
            '20 ладов',
            'Мензура: 869 мм',
            'Ширина верхнего порожка: 42 мм',
            'Бридж: черное дерево',
            'Литые колки',
            'Анкерный стержень двойного действия',
            'Заводские струны: HB .040 - .100',
            'Звукосниматель с 4-полосным эквалайзером',
            'Цвет: натуральный глянцевый'
        ]
    },
    {
        id: 1,
        name: 'Harley Benton DC-580 CH Vintage Series',
        cost: 24780.00,
        categoryID: 10,
        brandID: 8,
        image: img2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            'Корпус: Липа',
            'Гриф: канадский клен',
            'Профиль грифа: C',
            'Накладка грифа: Roseacer',
            'Радиус накладки: 350 мм',
            '24 лада',
            'Мензура: 628 мм',
            'Ширина порожка: 43 мм',
            'Звукосниматель: 2 хамбакера в винтажном стиле',
            '2 регулятора громкости и 2 регулятора тона',
            'Бридж: Tune-O-Matic',
            'Струны: Harley Benton .010–.046.',
            'Цвет: Cherry, глянцевый'
        ]
    },
    {
        id: 2,
        name: 'Harley Benton MB-4 SBK Deluxe Series',
        cost: 24780.00,
        categoryID: 10,
        brandID: 8,
        image: img3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            'Корпус: Тополь',
            'Гриф: Клен',
            'Накладка: Roseacer',
            'Профиль грифа: D',
            'Мензура: 864 мм',
            'Радиус накладки: 350 мм',
            'Ширина порожка: 42 мм',
            '21 лад',
            'Анкерный стержень двойного действия',
            'Звукосниматели: 1 хамбакер ',
            '2 регулятора громкости и 1 регулятор тона',
            'Струны: 0,045–0,105',
            'Цвет: черный, матовый'
        ]
    },
    {
        id: 3,
        name: 'Harley Benton MB-5 SBK Deluxe Series',
        cost: 26250.00,
        categoryID: 10,
        brandID: 8,
        image: img4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            'Корпус: Тополь',
            'Гриф: Клен',
            'Накладка: Roseacer',
            'Профиль грифа: D',
            'Мензура: 864 мм',
            'Радиус накладки: 350 мм',
            'Ширина порожка: 45 мм',
            '21 лад',
            'Звукосниматель: 1 хамбакер',
            '2 регулятора громкости и 1 регулятор тона',
            'Расстояние между струнами: 19 мм',
            'Заводские струны: .045 - .130.',
            'Цвет: Черный, матовый'
        ]
    },
    {
        id: 4,
        name: 'Casio CDP-S110 BK',
        cost: 51000.00,
        categoryID: 2,
        brandID: 9,
        image: img5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            '88 клавиш с молоточковой механикой (Scaled Hammer Action Keyboard II)',
            '3 типа чувствительности клавиш',
            '64 голоса полифонии',
            '10 тембров',
            'Транспонирование +/- 12 полутонов',
            'Метроном',
            'Эффекты: Реверберация, хорус',
            '2 демо-песни',
            'USB to Host',
            '1 разъем для наушников',
            '1 разъем для педали',
            'Аудио-вход',
            'Динамики: 2x 8 Вт',
            'Размеры (Ш x Г x В): 1322 x 232 x 99 мм',
            'Вес: 10,5 кг',
            'Цвет: Черный',
            'Возможна работа от батареек AA (6 шт., не входят в комплект)',
            'В комплекте: педаль SP-3, пюпитр и сетевой адаптер AD-A12150LW',
        ]
    },
    {
        id: 5,
        name: 'Harley Benton D-120BK',
        cost: 14280.00,
        categoryID: 10,
        brandID: 8,
        image: img6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris sit amet mollis fringilla. Ut faucibus luctus nunc a.',
        characteristics: [
            'Тип корпуса: Дредноут с вырезом',
            'Верхняя дека: Ель',
            'Нижняя дека и обечайка: красное дерево.',
            'Гриф: Красное дерево',
            'Профиль грифа: C',
            '«Ласточкин хвост»',
            'Накладка на гриф и бридж: Roseacer',
            '20 ладов',
            'Мензура: 650 мм',
            'Ширина порожка: 42,5 мм',
            'Струны: .011 - .053.',
            'Цвет: черный, глянцевый.',
        ]
    }
] 