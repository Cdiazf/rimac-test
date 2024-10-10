import { useFetchPlans } from "../hooks/useFetchPlans";
import {calculateDiscount, useFormatDollar} from "../helper/Helper.jsx";
import "./CardPlanComponent.scss";

const CardPlanComponent = ({ selectedPlan }) => {
    const { formatDollar } = useFormatDollar();
    const { plans, loading, error } = useFetchPlans();

    if (loading) return <p>Cargando planes...</p>;
    if (error) return <p>Hubo un error al cargar los planes. Intenta de nuevo más tarde.</p>;

    return (
        <div className="card-plan-container">
            {plans.map((plan, index) => {
                const discountPrice = calculateDiscount(plan.price); // Directly calling the utility function

                return (
                    <div className="card-plan" key={index}>
                        <div className="card-plan__body">
                            <div className="card-plan__header">
                                <div className="card-plan__title-container">
                                    <h2 className="card-plan__title">{plan.name}</h2>
                                    <h3 className="card-plan__sub-title">Costo de plan</h3>
                                    {selectedPlan === "owner_2" ?
                                        (<p className="card-plan__sub-price">
                                        {formatDollar(plan.price)} antes
                                        </p>)
                                        :
                                        (<p> </p>) }

                                    <p className="card-plan__sub-disc-price">
                                        {selectedPlan === "owner_2" ?
                                            ( <> {formatDollar(discountPrice)} al mes </>)
                                            :
                                            (<> {formatDollar(plan.price) } al mes</>)}
                                    </p>
                                </div>
                                <div className="card-plan__image-container">
                                    <img
                                        src={plan.imageUrl || "/imgs/IcHomeLight.png"} // Plan image from API if available
                                        alt="Plan Image"
                                        className="card-plan__image"
                                    />
                                </div>
                            </div>
                            <hr className="card-plan__separator" />
                            <div className="card-plan__content">
                                <ul className="card-plan__description">
                                    {plan.description.map((descItem, descIndex) => (
                                        <li key={descIndex} className="card-plan__description-item">
                                            {descItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-plan__footer">
                                <button className="card-plan__button">Seleccionar Plan</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardPlanComponent;
