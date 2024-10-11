import PropTypes from 'prop-types';

const CheckboxGroup = ({ formData, handleChange, errors }) => (
    <div className="register__form-checkbox">
        <div className="register__form-checkbox-group">
            <input
                type="checkbox"
                id="privacy"
                name="privacyAccepted"
                className="register__form-checkbox-input"
                checked={formData.privacyAccepted || false}
                onChange={handleChange}
            />
            <label htmlFor="privacy" className="register__form-checkbox-text">
                Acepto la Política de Privacidad
            </label>
            {errors.privacyAccepted && <p className="error-text">{errors.privacyAccepted}</p>}
        </div>
        <div className="register__form-checkbox-group">
            <input
                type="checkbox"
                id="communications"
                name="communicationsAccepted"
                className="register__form-checkbox-input"
                checked={formData.communicationsAccepted || false}
                onChange={handleChange}
            />
            <label htmlFor="communications" className="register__form-checkbox-text">
                Acepto la Política Comunicaciones Comerciales
            </label>
        </div>
        <div className="register__form-checkbox-group">
            <a href="#" className="register__form-checkbox-condition">
                Aplican Términos y Condiciones.
            </a>
        </div>
    </div>
);

CheckboxGroup.propTypes = {
    formData: PropTypes.shape({
        privacyAccepted: PropTypes.bool,
        communicationsAccepted: PropTypes.bool,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        privacyAccepted: PropTypes.string,
    }),
};



export default CheckboxGroup;
