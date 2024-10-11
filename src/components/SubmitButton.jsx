import PropTypes from 'prop-types';

const SubmitButton = ({ loading = false }) => (
    <button className="register__form-submit" disabled={loading}>
        {loading ? "Cargando..." : "Cotiza aquí"}
    </button>
);

SubmitButton.propTypes = {
    loading: PropTypes.bool,
};

export default SubmitButton;
