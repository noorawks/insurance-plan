import './Table.css';

const Table = (props) => {
    return (
        <div className='center'>
            <table className='plan-list'>
                <thead>
                    <tr>
                        <th></th>
                        {
                            props.dataPlan.map((plan) => {
                                return  <th key={plan.id}>{plan.name}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            props.dataService.map((service) => {
                                return  <tr key={service.id}>
                                            <td><strong>{service.name}</strong></td>
                                            {
                                                props.dataPlan.map((plan) => {
                                                    const result = service.service_plans.find( ({ plan_id }) => plan_id == plan.id );
                                                    if (result) {
                                                        return <td><input type="checkbox" checked readOnly/></td>
                                                    } else {
                                                        return <td><input type="checkbox" disabled/></td>
                                                    }
                                                    
                                                })
                                            }
                                        </tr>
                            })
                        }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        {
                            props.dataPlan.map((plan) => {
                                return  <th key={plan.id}><input type="radio" value="" name="plan"/>HK${plan.price}</th>
                            })
                        }
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table;