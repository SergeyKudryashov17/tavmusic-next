import { BenefitsItemType } from "../types/BenefitsItem";
import { PackageIcon, HandshakeIcon, PaletteIcon, ThumbsUpIcon } from "@/shared/icons";

export const benefits: BenefitsItemType[] = [
    {
        label: 'Надежная доставка',
        description: 'Ваш заказ приедет в удобный для вас день',
        icon: <PackageIcon />
    },
    {
        label: 'Клиентский сервис',
        description: 'Менеджер свяжется с вами в кратчайшее время после оформления заказа',
        icon: <HandshakeIcon />
    },
    {
        label: 'Гарантия качества',
        description: 'Мы закупаем товар у проверенных поставщиков',
        icon: <PaletteIcon />
    },
    {
        label: 'Большой выбор',
        description: 'Найдем и привезем позиции по любому запросу',
        icon: <ThumbsUpIcon />
    }
];