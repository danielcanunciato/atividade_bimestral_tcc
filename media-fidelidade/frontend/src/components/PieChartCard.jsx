import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function PieChartCard() {

    const expenses = [
        {
            item: "Netflix", custo: "1950,00" , data: "22-06-2026"
        },
        {
            item: "Internet", custo: "180,00" , data: "12-06-2026"
        },
        {
            item: "Eletricidade", custo: "200,00" , data: "15-06-2026"
        },
        {
            item: "Spotify", custo: "59,99" , data: "25-06-2026"
        }
    ];

    const data = {
        labels: [
            "Netflix",
            "Internet",
            "Eletricidade",
            "Spotify"
        ],
        datasets: [
            {
                data: [1950, 180, 200, 59.99],
                backgroundColor: [
                    "#4CAF50",
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

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    };

    return (
        <div className="chart-wrapper">
            <h2>Distribuição de Gastos</h2>

            <div className="pie-container">
                <Pie
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}