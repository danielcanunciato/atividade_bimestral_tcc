export default function StatsCarousel() {
    return (
        <div className="stats-carousel">

            <div className="card stat-card income">
                <h4><strong>RENDA</strong></h4>
                <span>R$ 8.500,00</span>
            </div>

            <div className="card stat-card expense">
                <h4><strong>GASTOS</strong></h4>
                <span>R$ 3.200,00</span>
            </div>

            <div className="card stat-card wallet">
                <h4><strong>CARTEIRA</strong></h4>
                <span>R$ 4.300,00</span>
            </div>

        </div>
    );
}