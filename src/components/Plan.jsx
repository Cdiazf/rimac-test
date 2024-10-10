import "./Plans.scss"
import BackButton from "./BackButton.jsx";
import CardPlanComponent from "./CardPlanComponent.jsx";
import CardPersonComponent from "./CardPersonComponent.jsx";
import {useState} from "react";

const Plan = ()=>{
    const [selectedPlan, setSelectedPlan] = useState(null);
    const handleCheckboxChange = (id) => {
        setSelectedPlan(id);
    };

    return (
        <div className="plan__container">
            <BackButton/>

            <div className="container-plan">
                <div className="container-plan__title">
                    <h2 className="title-plan">Rocío ¿Para quién deseas cotizar?</h2>
                    <p className="title-description"> Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                <CardPersonComponent onCheckboxChange={handleCheckboxChange} />
            </div>

            {selectedPlan && (
                <section className="plans">
                    <CardPlanComponent  selectedPlan={selectedPlan}/>
                </section>
            )}

        </div>
    )
}

export default Plan;