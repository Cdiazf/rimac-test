import PropTypes from 'prop-types';

const SubmitButton = ({ loading = false }) => (
    <button className="register__form-submit" disabled={loading}>
        {loading ? "Cargando..." : "Cotiza aquí"}
    </button>
);

// Define PropTypes for the component
SubmitButton.propTypes = {
    loading: PropTypes.bool, // Indicates whether the button is in a loading state
};

export default SubmitButton;
