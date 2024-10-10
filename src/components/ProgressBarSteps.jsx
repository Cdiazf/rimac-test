import PropTypes from "prop-types";
import "./ProgressBarSteps.scss"; // Import your SCSS file

const ProgressBarSteps = ({ currentStep }) => {
    const steps = ["Planes y cobertura", "Resumen"];

    return (
        <div className="progress-bar-container">
            {steps.map((step, index) => (
                <div key={index} className="step-col">
                    <div className={`step ${currentStep === index + 1 ? "active" : ""}`}>
                        <div
                            className={`step-number ${
                                currentStep >= index + 1 ? "completed" : ""
                            }`}
                        >
                            {index + 1}
                        </div>
                        <span
                            className={`step-title ${
                                currentStep >= index + 1 ? "completed" : ""
                            }`}
                        >
              {step}
            </span>
                    </div>
                    {index < steps.length - 1 && (
                        <img className="imagen-progessbar" src="/imgs/line.png" alt="Line" />
                    )}
                </div>
            ))}
        </div>
    );
};

ProgressBarSteps.propTypes = {
    currentStep: PropTypes.number.isRequired,
};

export default ProgressBarSteps;
