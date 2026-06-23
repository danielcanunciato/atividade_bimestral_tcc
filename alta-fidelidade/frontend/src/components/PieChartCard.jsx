import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const centerTextPlugin = {
    id: "centerText",

    afterDraw(chart) {

        const {
            ctx,
            chartArea: {
                left,
                right,
                top,
                bottom
            }
        } = chart;

        const total = chart.data.datasets[0].data
            .reduce((acc, value) => acc + value, 0);

        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = "#64748b";
        ctx.font = "600 14px system-ui";

        ctx.fillText(
            "Total",
            centerX,
            centerY - 14
        );

        ctx.fillStyle = "#1e293b";
        ctx.font = "700 14px system-ui";

        ctx.fillText(
            `R$ ${total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`,
            centerX,
            centerY + 12
        );

        ctx.restore();
    }
};

export default function PieChartCard() {

    const data = {
        labels: [
            "Netflix",
            "Internet",
            "Eletricidade",
            "Spotify"
        ],

        datasets: [
            {
                data: [
                    69.99,
                    180,
                    200,
                    59.99
                ],

                backgroundColor: [
                    "#4dbf51",
                    "#2196F3",
                    "#FF9800",
                    "#E91E63"
                ],

                borderWidth: 0
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {
                position: "bottom",

                labels: {
                    color: "#000000", // darker gray

                    font: {
                        size: 14,
                        weight: "500",
                        family: "system-ui"
                    },

                    padding: 22,

                    boxWidth: 28,
                    boxHeight: 18
                }
            },

            tooltip: {

                titleFont: {
                    size: 14,
                    weight: "600"
                },

                bodyFont: {
                    size: 14
                },

                callbacks: {
                    label: (context) =>
                        `${context.label}: R$ ${context.raw.toLocaleString(
                            "pt-BR",
                            {
                                minimumFractionDigits: 2
                            }
                        )}`
                }
            }
        }
    };

    return (
        <div className="chart-wrapper">

            <h2>
                Distribuição de Gastos
            </h2>

            <div className="pie-container">

                <Doughnut
                    data={data}
                    options={options}
                    plugins={[centerTextPlugin]}
                />

            </div>

        </div>
    );
}