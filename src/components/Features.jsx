import { feature } from "../_mocks_/feature";
import "../styles/css/features.css";

const Features = () => {
    return (
        <section className="features">
        <h2 className="sr-only">Features</h2>
        {feature.map((feature, index) => {
            return (
                <div className="feature-item" key={index}>
                    <img className="feature-icon" src={feature.imgPath} alt={feature.alt} />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            );
        })}
      </section>
    );
};

export default Features;