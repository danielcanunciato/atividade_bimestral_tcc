import "../styles/dashboard.css";
import Header from "../components/Header";
import StatsCarousel from "../components/StatsCarousel";
import ExpensesList from "../components/ExpensesList";
import PieChartCard from "../components/PieChartCard";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />

            <StatsCarousel />

            <div className="content-grid">

                <div className="card expenses-card">
                    <ExpensesList />
                </div>

                <div className="card chart-card">
                    <PieChartCard />
                </div>

            </div>
        </div>
    );
}