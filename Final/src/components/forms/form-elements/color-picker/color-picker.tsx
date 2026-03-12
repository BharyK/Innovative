import { Colorpicker } from "../../../../shared/data/prism-code/forms-prism";
import { ChromePicker } from 'react-color';
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import ShowCode from "../../../../shared/showcode/showcode";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";

interface ColorPickerProps { }

const ColorPickers: React.FC<ColorPickerProps> = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    //color picker
    const [color, setColor] = useColor("#561ecb");

    //color picker
    const [color2, setColor2] = useState<any>("#6c5ffc");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const handleChangeComplete = () => {
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-ColorPickers" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Color Pickers" activepage="Color Pickers" />

            {/* <!-- Page Header Close --> */}


            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Bootstrap Color Picker" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded-1 m-2 mt-0" reactCode={Colorpicker}>
                        <Form.Control type="color" className="form-control-color border-0"
                            id="exampleColorInput" defaultValue="#136ad0" title="Choose your color" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Classic
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-xxl-flex justify-content-between flex-wrap border border-dashed rounded-1 m-2 mt-0 pb-2">
                            <div className="mt-2">
                                <SpkButton Buttonvariant="primary" onClickfunc={toggleVisibility} Customclass='btn !py-1 !px-3 mb-2 !text-[0.75rem] !m-0 !gap-0 !font-medium'>
                                    <i className="ri-palette-line"></i>
                                </SpkButton>
                                {isVisible && (
                                    <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sketch Color Picker
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-xxl-flex justify-content-between flex-wrap border border-dashed rounded-1 m-2 mt-0 custom-sketch-color">
                            <div className="mt-2">
                                <SpkButton Buttonvariant="primary" Customclass='pcr-button btn-md mb-3' onClickfunc={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? "Close Picker" : "Pick Color"}</SpkButton>
                                {showColorPicker && (<ChromePicker disableAlpha={true} color={color2} onChange={(updatedColor: { hex: string }) => setColor2(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default ColorPickers;