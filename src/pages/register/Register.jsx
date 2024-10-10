import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../components/TitleSection";
import FormInputGroup from "../../components/FormInputGroup";
import CheckboxGroup from "../../components/CheckboxGroup";
import SubmitButton from "../../components/SubmitButton";
import ErrorText from "../../components/ErrorText.jsx";
import "./Register.scss";

const Register = () => {
    const [formData, setFormData] = useState({
        dniType: "dni",
        documentNumber: "",
        phone: "",
        privacyAccepted: false,
        communicationsAccepted: false,
    });
    const [userData, setUserData] = useState(null); // State to hold user data
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUserData(data);
                localStorage.setItem("userData", JSON.stringify(data));
            } catch (err) {
                console.error("Failed to fetch user data:", err);
            }
        };
        fetchUserData();
    }, []);

    const validateFields = () => {
        const newErrors = {};
        if (!formData.documentNumber) {
            newErrors.documentNumber = "El número de documento es requerido";
        } else if (formData.documentNumber.length < 8) {
            newErrors.documentNumber = "Debe contener al menos 8 dígitos";
        }

        if (!formData.phone) {
            newErrors.phone = "El número de celular es requerido";
        } else if (formData.phone.length < 9) {
            newErrors.phone = "Debe contener al menos 9 dígitos";
        }

        if (!formData.privacyAccepted) {
            newErrors.privacyAccepted = "Debes aceptar la política de privacidad";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateFields()) {
            setLoading(true); // Set loading to true when submitting
            const { dniType, documentNumber, phone, privacyAccepted, communicationsAccepted } = formData;
            const combinedData = {
                documentType: dniType,
                documentNumber,
                cellNumber: phone,
                privacyAccepted,
                communicationsAccepted,
            };

            // Store form data and user data in localStorage
            localStorage.setItem("formData", JSON.stringify(combinedData));
            localStorage.setItem("userData", JSON.stringify(userData)); // Store user data too

            setTimeout(() => {
                setLoading(false); // Reset loading after the operation
                navigate("/summary");
            }, 2000); // Adjust the timeout as needed
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <section className="register">
            <div className="register__image">
                <img src="/imgs/rimac_family.png" alt="Family" className="register__image-img" />
            </div>
            <div className="register__content">
                <TitleSection />
                <div className="register__separator"></div>
                <form className="register__form" onSubmit={handleSubmit}>
                    <FormInputGroup formData={formData} handleChange={handleChange} errors={errors} />
                    <CheckboxGroup formData={formData} handleChange={handleChange} errors={errors} />
                    <SubmitButton loading={loading} />
                </form>
                <ErrorText error={errors.general} />
            </div>

        </section>
    );
};

export default Register;
