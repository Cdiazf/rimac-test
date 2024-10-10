import { useEffect, useState } from "react";
import "./Summary.scss";
import BackButton from "./BackButton.jsx";

const Summary = () => {
    const [summaryData, setSummaryData] = useState(null);
    const [userData, setUserData] = useState(null); // State for user data

    useEffect(() => {
        // Retrieve data from localStorage
        const formData = JSON.parse(localStorage.getItem("formData"));
        if (formData) {
            setSummaryData(formData);
            setUserData(JSON.parse(localStorage.getItem("userData"))); // Extract user data
        }
    }, []);

    if (!summaryData || !userData) {
        return <p>Cargando...</p>; // Display loading message until data is retrieved
    }

    // Extract form data
    const { documentNumber, cellNumber } = summaryData;

    return (
        <div className="summary">

            <div className="summary__header">
                <BackButton/>
            </div>

            <div className="summary__content">
            <h1 className="summary__title">Resumen del seguro</h1>
                <div className="summary__content-card">
                    <div className="summary__card">
                        <div className="card__header">
                            <div className="card__header-title">Precios calculados para:</div>
                            <div className="card__header-data">
                                <img src="/imgs/icon-person.png" alt="Icon" className="card__header-icon"/>
                                <h2 className="card__header-name">{userData?.name || "Nombre no disponible"} {userData?.lastName || "Apellido no disponible"}</h2>
                            </div>
                        </div>
                        <div className="card__separator"></div>
                        <div className="card__body">
                            <div className="card__details">
                                <div className="card__box-content">
                                    <p className="card__label">Responsable de pago</p>
                                    <p className="card__info">DNI: {documentNumber}</p>
                                    <p className="card__info">Celular: {cellNumber}</p>
                                </div>

                            </div>
                            <div className="card__plan">
                                <div className="card__box-content">
                                    <h3 className="card__plan-title">Plan elegido</h3>
                                    <p className="card__info">Plan en Casa y Clínica</p>
                                    <p className="card__info">Costo del Plan: $99 al mes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Summary;
