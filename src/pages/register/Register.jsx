import { useState} from "react";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../components/TitleSection";
import FormInputGroup from "../../components/FormInputGroup";
import CheckboxGroup from "../../components/CheckboxGroup";
import SubmitButton from "../../components/SubmitButton";
import ErrorText from "../../components/ErrorText.jsx";
import "./Register.scss";
import useFetchUserData from "../../hooks/useFetchUserData.jsx";
import {validateFormData} from "../../utils/validateFormData.jsx";

const Register = () => {
    const [formData, setFormData] = useState({
        dniType: "dni",
        documentNumber: "",
        phone: "",
        privacyAccepted: false,
        communicationsAccepted: false,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const userData = useFetchUserData();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateFormData(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            submitFormData();
        }
    };

    const submitFormData = () => {
        setLoading(true);
        const { dniType, documentNumber, phone, privacyAccepted, communicationsAccepted } = formData;

        const minAge = 20;
        const maxAge = 100;
        const randomAge = Math.floor(Math.random() * ((maxAge - minAge) / 4 + 1)) * 4 + minAge;


        const combinedData = {
            documentType: dniType,
            documentNumber,
            cellNumber: phone,
            privacyAccepted,
            communicationsAccepted,
            age: randomAge,

        };

        localStorage.setItem("formData", JSON.stringify(combinedData));
        localStorage.setItem("userData", JSON.stringify(userData));

        setTimeout(() => {
            setLoading(false);
            navigate("/plans");
        }, 1000);
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
                {errors.general && <ErrorText error={errors.general} />}
            </div>
        </section>
    );
};

export default Register;