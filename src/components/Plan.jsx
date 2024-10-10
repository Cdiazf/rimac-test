import "./Plans.scss"
import BackButton from "./BackButton.jsx";
import CardPlanComponent from "./CardPlanComponent.jsx";
import CardPersonComponent from "./CardPersonComponent.jsx";

const Plan = ()=>{
    return (
        <>
            <BackButton/>

            <div className="container-plan">
                <div className="container-plan__title">
                    <h2 className="title-plan">Rocío ¿Para quién deseas cotizar?</h2>
                    <p className="title-description"> Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                <CardPersonComponent/>
            </div>

            <section className="plans">
                <CardPlanComponent/>
            </section>
        </>
    )
}

export default Plan;