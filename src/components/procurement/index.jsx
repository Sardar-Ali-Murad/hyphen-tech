import { Helmet } from "react-helmet";
import './Procurement.css'; // Import the CSS file we just created

const Procurement = () => {
    return (
        <div className="procurement-page">
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Procurement Maturity Level</title>
                <meta
                    name="description"
                    content="Take our free, expert-designed Procurement Maturity Assessment to evaluate the effectiveness, efficiency, and control environment of your procure-to-pay cycle. In just 5 minutes, you’ll receive a personalized report and actionable recommendations to help you level up."
                />
                {/* We can keep the Google Fonts link */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Varela+Round&display=swap" rel="stylesheet" />
            </Helmet>

            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <h2>Discover Your Procurement Maturity Level</h2>
                            <p className="subtitle">
                                Are your procurement processes optimized, or is it time for a transformation?
                            </p>
                            <p className="description">
                                Take our free, expert-designed Procurement Maturity Assessment to evaluate the effectiveness, efficiency, and control environment of your procure-to-pay cycle. In just 5 minutes, you’ll receive a personalized report and actionable recommendations to help you level up.
                            </p>
                            <a
                                className="cta-button"
                                href="https://abilite.co/form/"
                            >
                                Start the Assessment
                            </a>
                        </div>

                        <div className="hero-image-container">
                            <img
                                src="/assets/images/tool.svg"
                                className="hero-image"
                                alt="Procurement assessment tool illustration"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Procurement;
