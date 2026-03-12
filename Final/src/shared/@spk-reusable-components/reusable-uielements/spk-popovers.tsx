

import React, { Fragment } from 'react';
import { Popover, OverlayTrigger, type OverlayTriggerProps } from 'react-bootstrap';

interface SpkPopoversProps {
    title?: string;
    content?: React.ReactNode;
    trigger?: OverlayTriggerProps['trigger'];
    placement?: OverlayTriggerProps['placement'];
    popoverClass?: string;
    headerClass?: string;
    bodyClass?: string;
    children?: React.ReactNode;
    rootClose?: boolean;
}

const SpkPopovers: React.FC<SpkPopoversProps> = ({ title, content, trigger, placement, popoverClass, headerClass, bodyClass, children, rootClose = false }) => {
    return (
        <Fragment>
            <OverlayTrigger
                rootClose={rootClose}
                trigger={trigger}
                placement={placement}
                overlay={
                    <Popover className={popoverClass}>
                        <Popover.Header as="h3" className={headerClass}>{title}</Popover.Header>
                        <Popover.Body className={bodyClass}>
                            {content}
                        </Popover.Body>
                    </Popover>
                }
            >
                {children}
            </OverlayTrigger>
        </Fragment>
    );
};

export default SpkPopovers;
