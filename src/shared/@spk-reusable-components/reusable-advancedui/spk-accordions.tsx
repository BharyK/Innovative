

import React, { useState, Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import type { AccordionSelectCallback } from 'react-bootstrap/esm/AccordionContext';

interface AccordionItem {
    footer: React.JSX.Element;
    id: string;
    title: string;
    content: React.ReactNode;
    itemClass: string;
    bodyClass: string;
}

interface SpkAccordionsProps {
    items?: AccordionItem[] | any;
    defaultActiveKey?: string;
    flush?: boolean;
    accordionClass?: string;
    HeaderClass?: string;
    closeAll?: boolean;
    footer?: boolean;
    alwaysOpen?: boolean;
}

const SpkAccordions: React.FC<SpkAccordionsProps> = ({ items, HeaderClass, alwaysOpen = false, defaultActiveKey, flush = false, accordionClass, closeAll = false }) => {

    const [activeKey, setActiveKey] = useState<string | null>(
        closeAll ? null : (defaultActiveKey || (items.length > 0 ? items[0].id : null))
    );

    return (
        <Fragment>
            <Accordion className={accordionClass} activeKey={activeKey} alwaysOpen={alwaysOpen} flush={flush} onSelect={(k: AccordionSelectCallback) => setActiveKey(k)}>
                {items.map((item: AccordionItem, index: number) => (
                    <Accordion.Item eventKey={item.id} className={item.itemClass} key={item.id || `${item.title}-${index}`}>
                        <Accordion.Header className={HeaderClass}>{item.title}</Accordion.Header>
                        <Accordion.Body className={item.bodyClass}>{item.content}</Accordion.Body>

                        {item.footer && <div className="accordion-footer">{item.footer}</div>}

                    </Accordion.Item>
                ))}
            </Accordion>
        </Fragment>
    );
};

export default SpkAccordions;