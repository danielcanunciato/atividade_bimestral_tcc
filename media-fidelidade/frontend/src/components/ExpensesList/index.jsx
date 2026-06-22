import "./index.css"
import { CreditCard } from 'react-flaticons'

export default function ExpensesList() {
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

    return (
        <>
            <h2>Gastos Recentes</h2>

            <ul>
                {expenses.map((exp, index) => (
                    <>
                        <li key={index}><b><CreditCard />{exp.item}</b> <br /> <i>R${exp.custo}</i><br />{exp.data}</li>
                    </>
                ))}
            </ul>
        </>
    );
}