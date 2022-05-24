import React, {useEffect, useState} from 'react';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { Chart } from 'react-google-charts';
import { getQuantityByFilter } from '../api/payroll';
import moment from 'moment';
import { getInvoiceByFilter } from '../api/invoice';
import { getPurchaseStats } from '../api/purchase';


const Dashboard = (props) => {
    // Selectors
    const user  = useSelector(selectUser)
    // Chart states
    // Last trimester (LT)
    const [payrollLT, setPayrollLT] = useState([]);
    // Current trimester (CT)
    const [payrollCT, setPayrollCT] = useState([]);
    // Invoice (Sales) states
    const [salesLM, setSalesLM] = useState([]);
    const [salesCM, setSalesCM] = useState([]);
    // Purchase states
    const [purchaseLM, setPurchaseLM] = useState([]);
    const [purchaseCM, setPurchaseCM] = useState([]);

    useEffect(()=>{

        getQuantityByFilter({start:"2021-07-01",end:"2021-09-30"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.payroll.forEach((p)=>{
                data.push([moment(p.date).format('DD/MM/YY'),p.amountTotal]);
            })
            setPayrollLT(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
        getQuantityByFilter({start: "2021-10-1",end: "2021-12-31"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.payroll.forEach((p)=>{
                data.push([moment(p.date).format('DD/MM/YY'),p.amountTotal]);
            })
            setPayrollCT(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        getInvoiceByFilter({start:"2021-01-01",end:"2021-01-30"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.invoice.forEach((i)=>{
                data.push([moment(i.date).format('DD/MM/YY'),i.netPrice]);
            })
            setSalesLM(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        getInvoiceByFilter({start:"2021-02-01",end:"2021-02-28"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.invoice.forEach((i)=>{
                data.push([moment(i.date).format('DD/MM/YY'),i.netPrice]);
            })
            setSalesCM(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        getPurchaseStats({start:"2021-01-01",end:"2021-01-30"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.purchase.forEach((i)=>{
                data.push([moment(i.date).format('DD/MM/YY'),i.amountTotal]);
            })
            setPurchaseLM(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        getPurchaseStats({start:"2021-02-01",end:"2021-02-28"})
        .then((res)=>{
            let data = []
            data.push(["Date","Amount"])
            res.purchase.forEach((i)=>{
                data.push([moment(i.date).format('DD/MM/YY'),i.amountTotal]);
            })
            setPurchaseCM(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    const createOptions = (title, subtitle) =>{
        let options = {
            chart: {
                title: title,
                subtitle: subtitle
            }
        }
        return options
    }

    return (  
        <div className='componentContainer'>
            <h1>Welcome back {user.infos.firstName}</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <div>
                    <h2 style={{textDecoration:'underline'}}>Payroll Charts</h2>
                    <div className='chartDiv'>
                        <div className='chartSection'>
                            <Chart
                                chartType="Line"
                                width="450px"
                                height="300px"
                                data={payrollLT}
                                options={createOptions("Payroll Amount per date (last trimester)","in dollars (USD)")}
                            />
                        </div>
                        <div className='chartSection'>
                            <Chart
                                chartType="Line"
                                width="450px"
                                height="300px"
                                data={payrollCT}
                                options={createOptions("Payroll Amount per date (current trimester)","in dollars (USD)")}
                            />
                        </div>
                    </div>
                </div>
                <Divider/>
                <div>
                    <h2 style={{textDecoration:'underline'}}>Sales Charts</h2>
                    <div className='chartDiv'>
                        <div className='chartSection'>
                            <Chart
                                chartType="Bar"
                                width="450px"
                                height="300px"
                                data={salesLM}
                                options={createOptions("Sales from last month","in dollars (USD)")}
                            />
                        </div>
                        <div className='chartSection'>
                            <Chart
                                chartType="Bar"
                                width="450px"
                                height="300px"
                                data={salesCM}
                                options={createOptions("Sales from this month","in dollars (USD)")}
                            />
                        </div>
                    </div>
                </div>
                <Divider/>
                <div>
                    <h2 style={{textDecoration:'underline'}}>Purchase Charts</h2>
                    <div className='chartDiv'>
                        <div className='chartSection'>
                            <Chart
                                chartType="Bar"
                                width="450px"
                                height="300px"
                                data={purchaseLM}
                                options={createOptions("Purchases from last month","in dollars (USD)")}
                            />
                        </div>
                        <div className='chartSection'>
                            <Chart
                                chartType="Bar"
                                width="450px"
                                height="300px"
                                data={purchaseCM}
                                options={createOptions("Purchases from this month","in dollars (USD)")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;