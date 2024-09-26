/* eslint-disable react/prop-types */
import "./card.css"

const Card = (props) => {
    return (
        <article className="card">
            <img src={props.image} />
            <section className="card--info">
                <div className="card--location">
                    <img src="./location16.png" alt="map icon" className="location--icon" />
                        <h3>{props.location}</h3>
                        <a href={props.mapLink} className="location--link">(View on Google Maps)</a>
                </div>
                <h2>{props.setName}</h2>
                <p>{props.description}</p>
            </section>
        </article>
    );
};

export default Card;
