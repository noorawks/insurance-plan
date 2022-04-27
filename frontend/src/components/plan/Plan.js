import "./Plan.css"
import Table from './parts/Table';
import { useEffect, useState } from "react";

const Plan = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [getPlan, setPlan] = useState([]);
    const [getService, setService] = useState([]);
    
    useEffect(() => {
        fetchPlan()
        fetchService()
    }, [])

    const fetchPlan = async() => {
        fetch('http://localhost:5000/plan-list').then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPlan(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

    const fetchService = async() => {
        fetch('http://localhost:5000/service-list').then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setService(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>    
                <h1>
                    Select Insurance Plan
                </h1>
                <br></br>
                <Table dataPlan={getPlan} dataService={getService}/>
            </div>
        )
    }
}

export default Plan;