import PropTypes from 'prop-types';
import "./ErrorText.scss";

const FormInputGroup = ({ formData, handleChange, errors }) => (
    <div className="register__form-input-group">
        <div className="register__form-input-group-fields">
            <select
                id="dni"
                name="dniType"
                className="register__form-select"
                onChange={handleChange}
                value={formData.dniType}
            >
                <option value="dni">DNI</option>
                <option value="ci">CI</option>
            </select>
            <input
                type="text"
                name="documentNumber"
                className="register__form-text"
                placeholder="Nro. de documento"
                value={formData.documentNumber}
                onChange={handleChange}
            />
            {errors.documentNumber && <p className="error-text">{errors.documentNumber}</p>}
        </div>
        <input
            type="text"
            id="phone"
            name="phone"
            className="register__form-phone"
            placeholder="Celular"
            value={formData.phone}
            onChange={handleChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
    </div>
);

// Define PropTypes for the component
FormInputGroup.propTypes = {
    formData: PropTypes.shape({
        dniType: PropTypes.string.isRequired,
        documentNumber: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        documentNumber: PropTypes.string,
        phone: PropTypes.string,
    }),
};

export default FormInputGroup;
