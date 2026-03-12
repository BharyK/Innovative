import { Fragment } from "react/jsx-runtime";
import Seo from "../../../layouts-components/seo/seo";
import Pageheader from "../../../layouts-components/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Lineannotationoptions, Lineannotationseries, Linebasicoptions, Linebasicseries, Linebrushoptions, Linebrushseries, Linedashoptions, Linedashseries, Linedataoptions, Linedataseries, Linegardientoptions, Linegardientseries, Linenulloptions, Linenullseries, Linerealoptions, Linerealseries, Linestepoptions, Linestepseries, Linesyncoptions, Linesyncseries, Linezoomoptions, Linezoomseries, optionsArea, optionsLine, optionsLine2, seriesArea, seriesLine, seriesLine2 } from "./linechartdata";


const LineChart1 = () => {

  return (
    <Fragment>
      {/* Page Header */}
      <Seo title={"Line Charts"} />
      <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Line Charts" activepage="Apex Line Charts" />
      {/* Page Header Close */}

      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Basic Line Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="line-chart">
                <Spkapexcharts chartOptions={Linebasicoptions} chartSeries={Linebasicseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line Chart With Data Labels</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="line-chart-datalabels">
                <Spkapexcharts chartOptions={Linedataoptions} chartSeries={Linedataseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Zoomable Time Series</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="zoom-chart">
                <Spkapexcharts chartOptions={Linezoomoptions} chartSeries={Linezoomseries} type="area" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line With Annotations</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="annotation-chart">
                <Spkapexcharts chartOptions={Lineannotationoptions} chartSeries={Lineannotationseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Brush Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="brush-chart1">
                <Spkapexcharts chartOptions={Linebrushoptions} chartSeries={Linebrushseries} type="line" width={"100%"} height={200} />
              </div>
              <div id="brush-chart">
                <Spkapexcharts chartOptions={optionsLine} chartSeries={seriesLine} type="area" width={"100%"} height={170} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>StepLine Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="stepline-chart">
                <Spkapexcharts chartOptions={Linestepoptions} chartSeries={Linestepseries} type="line" width={"100%"} height={380} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Gradient Line Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="gradient-chart">
                <Spkapexcharts chartOptions={Linegardientoptions} chartSeries={Linegardientseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Missing/Null Values Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="null-chart"></div>
              <Spkapexcharts chartOptions={Linenulloptions} chartSeries={Linenullseries} type="line" width={"100%"} height={350} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Real Time Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="dynamic-chart">
                <Spkapexcharts chartOptions={Linerealoptions} chartSeries={Linerealseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Dashed Line Chart</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="dashed-chart">
                <Spkapexcharts chartOptions={Linedashoptions} chartSeries={Linedashseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Syncing Charts</Card.Title>
            </Card.Header>
            <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
              <div id="chart-line">
                <Spkapexcharts chartOptions={Linesyncoptions} chartSeries={Linesyncseries} type="line" width={"100%"} height={160} />
              </div>
              <div id="chart-line2">
                <Spkapexcharts chartOptions={optionsLine2} chartSeries={seriesLine2} type="line" width={"100%"} height={160} />
              </div>
              <div id="chart-area">
                <Spkapexcharts chartOptions={optionsArea} chartSeries={seriesArea} type="area" width={"100%"} height={160} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LineChart1;






