

import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import React, {  Fragment, useState, type ChangeEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { InputMask } from "@react-input/mask";
import { NumericFormat } from "react-number-format";

interface InputMaskProps { }

const InputMasks: React.FC<InputMaskProps> = () => {

    const [licensePlate, setLicensePlate] = useState("");
    const handleLicensePlateChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputText = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
        inputText = inputText.slice(0, 14);
        const formattedText = formatLicensePlate(inputText);
        setLicensePlate(formattedText);
    };

    const formatLicensePlate = (inputText: string): string => {
        const formattedText = inputText
            .split("")
            .map((char, index) => (index % 4 === 0 && index !== 0 ? ` ${char}` : char))
            .join("");
        return formattedText;
    };
    const [value1, setValue1] = useState("");

    function onChange1(event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue1(event.target.value);
    }

    const [value2, setValue2] = useState("");

    function onChange2(event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue2(event.target.value);
    }

    const [value3, setValue3] = useState("");

    function onChange3(event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue3(event.target.value);
    }

    const [value4, setValue4] = useState("");

    function onChange4(event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue4(event.target.value);
    }

    const [value5, setValue5] = useState("");

    function onChange5(event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue5(event.target.value);
    }


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-InputMasks" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Input Masks" activepage="Input Masks" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <InputMask className="form-control date-format" mask="dd-mm-yyyy" replacement={{ d: /\d/, m: /\d/, y: /\d/ }} placeholder="DD-MM-YYYY" value={value1} onChange={onChange1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <InputMask className="form-control date-format" mask="dd-mm" replacement={{ d: /\d/, m: /\d/ }} placeholder="MM-DD" value={value2} onChange={onChange2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <InputMask className="form-control date-format" mask="dd-yy" replacement={{ d: /\d/, y: /\d/ }} placeholder="MM-YY" value={value3} onChange={onChange3} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Number Formatting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <InputMask className="form-control date-format" mask="99:99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm:ss" separate value={value4} onChange={onChange4} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <InputMask className="form-control date-format" mask="99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm" value={value5} onChange={onChange5} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Formatting Into Blocks
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <Form.Control className="form-control formatting-blocks" id="licensePlate" value={licensePlate} onChange={handleLicensePlateChange} placeholder="ABCD EFG HIJ KLMN" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default InputMasks;