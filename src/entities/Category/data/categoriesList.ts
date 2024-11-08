import guitars from '@/shared/assets/img/category-guitars.jpg';
import keyboards from '@/shared/assets/img/category-keyboard.jpg';
import bowed from '@/shared/assets/img/category-bowed.jpg';
import wind from '@/shared/assets/img/category-wind-instruments.jpg';
import soundEquipment from '@/shared/assets/img/category-sound-equipment.jpg';
import lightingEquipment from '@/shared/assets/img/category-lighting-equipment.jpg';
import folk from '@/shared/assets/img/category-folk.jpg';
import drums from '@/shared/assets/img/category-drums.jpg';
import { ICategory } from '../types/ICategory';

export const categoriesList: ICategory[] = [
    {
        id: 1,
        slug: 'guitars',
        name: 'Гитары',
        image: guitars,
        parentID: null
    },
    {
        id: 2,
        slug: 'keyboards',
        name: 'Клавишные инструменты',
        image: keyboards,
        parentID: null
    },
    {
        id: 3,
        slug: 'bowed',
        name: 'Смычковые инструменты',
        image: bowed,
        parentID: null
    },
    {
        id: 4,
        slug: 'wind',
        name: 'Духовые инструменты',
        image: wind,
        parentID: null
    },
    {
        id: 5,
        slug: 'soundEquipment',
        name: 'Звуковое оборудование',
        image: soundEquipment,
        parentID: null
    },
    {
        id: 6,
        slug: 'lightingEquipment',
        name: 'Световое оборудование',
        image: lightingEquipment,
        parentID: null
    },
    {
        id: 7,
        slug: 'folk',
        name: 'Народные инструменты',
        image: folk,
        parentID: null
    },
    {
        id: 8,
        slug: 'drums',
        name: 'Ударные',
        image: drums,
        parentID: null
    },
    {
        id: 9,
        slug: 'electro_guitars',
        name: 'Электрогитары',
        image: guitars,
        parentID: 1
    },
    {
        id: 10,
        slug: 'acoustic_guitars',
        name: 'Акустические гитары',
        image: guitars,
        parentID: 1
    },
    {
        id: 11,
        slug: 'classic_guitars',
        name: 'Классические гитары',
        image: guitars,
        parentID: 1
    },
    {
        id: 12,
        slug: 'bass_guitars',
        name: 'Бас-гитары',
        image: guitars,
        parentID: 1
    },
    {
        id: 13,
        slug: 'amplifier',
        name: 'Усилители',
        image: guitars,
        parentID: 1
    },
    {
        id: 14,
        slug: 'effects_pedals',
        name: 'Педали эффектов',
        image: guitars,
        parentID: 1
    },
    {
        id: 15,
        slug: 'accessories_guitars',
        name: 'Аксессуары',
        image: guitars,
        parentID: 1
    }
];