import './Navigation.scss';
import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <Link href="/" className="Navigation__link">Главная</Link>
                </li>
                <li className="Navigation__item">
                    <div className="Navigation__link">Каталог</div>
                </li>
                <li className="Navigation__item">
                    <Link href="/blog" className="Navigation__link">Блог</Link>
                </li>
                <li className="Navigation__item">
                    <Link href="/about" className="Navigation__link">О нас</Link>
                </li>
                <li className="Navigation__item">
                    <Link href="/delivery" className="Navigation__link">Доставка</Link>
                </li>
                <li className="Navigation__item">
                    <Link href="/contacts" className="Navigation__link">Контакты</Link>
                </li>
            </ul>
        </nav>
    );
}