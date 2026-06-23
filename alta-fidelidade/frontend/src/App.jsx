import Dashboard from "./pages/Dashboard";
import LeftNav from "./components/LeftNav";
import './App.css'

function App() {
    return (

        <>
        
            <div className="screens">

                <LeftNav />
                <Dashboard />

            </div>
        
        </>
    );
}

export default App;