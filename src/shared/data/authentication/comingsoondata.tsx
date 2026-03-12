import Countdown, { type CountdownRenderProps } from "react-countdown";
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
        // Render a complete state
        return <AfterComplete />;
    } else {
        // Render a countdown
        return (
            <div className="d-flex gap-4 flex-wrap mt-4 mb-0 gy-xxl-0 gy-3">
                <div>
                    <div className="text-center auth-timer primary-dash-border rounded">
                        <h2 className="mb-0  d-block  mt-2 text-default fw-semibold">{days}</h2>
                        <p className="mt-1 fs-12 fw-medium">Days</p>
                    </div>
                </div>
                <div className="custom-main">
                    <h3 className="mt-4">:</h3>
                </div>
                <div>
                    <div className="text-center auth-timer primary-dash-border rounded">
                        <h2 className="mb-0  d-block  mt-2 text-default fw-semibold">{hours}</h2>
                        <p className="mt-1 fs-12 fw-medium">Hours</p>
                    </div>
                </div>
                <div className="custom-main">
                    <h3 className="mt-4">:</h3>
                </div>
                <div>
                    <div className="text-center auth-timer primary-dash-border rounded">
                        <h2 className="mb-0  d-block  mt-2 text-default fw-semibold">{minutes}</h2>
                        <p className="mt-1 fs-12 fw-medium">Minutes</p>
                    </div>
                </div>
                <div className="custom-main">
                    <h3 className="mt-4">:</h3>
                </div>
                <div>
                    <div className="text-center auth-timer primary-dash-border rounded">
                        <h2 className="mb-0  d-block  mt-2 text-default fw-semibold">{seconds}</h2>
                        <p className="mt-1 fs-12 fw-medium">Seconds</p>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}
