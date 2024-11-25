'use client';

import { SectionPaggings, SectionPropsType, SectionViews } from "../SectionPropsType";
import './Section.scss';

export const Section = ({ 
    children, 
    className,
    style,
    view = SectionViews.Default, 
    padding = SectionPaggings.Default 
}: SectionPropsType) => {
    return (
        <section 
            className={`
                Section 
                ${view && 'Section_' + view} 
                ${padding && 'Section_padding-' + padding}
                ${className}
            `}
            style={{...style}}
        >
            { children }
        </section>
    )
}