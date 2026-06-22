import { useState, useEffect } from "react";
import { ArrowLeft } from "react-flaticons";
import "./index.css";

export default function StatsCarousel() {
    const cards = [
        {
            title: "RENDA",
            value: "R$ 8.500,00",
            icon: "/icons/renda.png",
            className: "income"
        },
        {
            title: "GASTOS",
            value: "R$ 3.200,00",
            icon: "/icons/gastos.png",
            className: "expense"
        },
        {
            title: "CARTEIRA",
            value: "R$ 4.300,00",
            icon: "/icons/carteira.png",
            className: "wallet"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % cards.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="carousel-wrapper">
            <button className="carousel-btn" onClick={prevSlide}>
                ❮
            </button>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`card stat-card ${card.className}`}
                            style={{borderRadius: index === 0 ? "18px 0 0 18px" : index === 1 ? "0" : "0 18px 18px 0"}}
                        >
                            <img src={card.icon} alt={card.title} />

                            <div className="card-content">
                                <h4>{card.title}</h4>
                                <span>{card.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-btn" onClick={nextSlide}>
                ❯
            </button>
        </div>
    );
}