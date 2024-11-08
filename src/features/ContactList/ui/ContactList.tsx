import { ContactListPropsType } from "../ContactListPropsType";
import { ClockIcon, MailIcon, PhoneIcon } from "@/shared/icons";
import './ContactList.scss';

export const ContactList = ({ className }: ContactListPropsType) => {
    return (
        <div className={`ContactsList ${className}`}>
            <div className="ContactsList__item">
                <MailIcon width={14} height={14} className={'ContactsList__itemIcon'} />
                shop@tavmusic.ru
            </div>
            <div className="ContactsList__item">
                <PhoneIcon width={14} height={14} className={'ContactsList__itemIcon'} />
                +7 (495) 165-66-95
            </div>
            <div className="ContactsList__item">
                <ClockIcon width={14} height={14} className={'ContactsList__itemIcon'} />
                Пн—Пт 10:00 – 18:00
            </div>
        </div>
    )
}