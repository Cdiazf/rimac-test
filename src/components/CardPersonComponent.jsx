
const CardPersonComponent = () => {
    const cardData = [
        {
            id: "owner_1",
            icon: "/imgs/IcProtectionLight.png",
            title: "Para mí",
            description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        },
        {
            id: "owner_2",
            icon: "/imgs/IcAddUserLight.png",
            title: "Para alguien más",
            description: "Realiza una cotización para uno de tus familiares o cualquier persona."
        }
    ];

    return (
        <div className="container-plan__cards">
            {cardData.map((card) => (
                <div className="container-plan__card" key={card.id}>
                    <input type="checkbox" id={card.id} className="card-plan__checkbox" />
                    <img src={card.icon} alt="Icon" className="card-plan__icon" />
                    <h4 className="card-plan__title">{card.title}</h4>
                    <p className="card-plan__description">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardPersonComponent;
