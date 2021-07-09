import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class DashboardChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["8am", "10am", "2pm", "4pm", "6pm", "8pm"],
                datasets: [
                    {
                        label: "Delivered",
                        backgroundColor: "#4339F2",
                        data: [20, 50, 100, 200, 300, 320]
                    },
                    {
                        label: "Reviews",
                        backgroundColor: "#34B53A",
                        data: [20, 50, 100, 200, 230]
                    },
                    {
                        label: "Cancelled",
                        backgroundColor: "#FF3A29",
                        data: [20, 50, 60, 80]
                    },
                ]
            }
        }
    }
    render() {
        return (
            <div style={{ position: "relative", width: 400, height: '500px'}}>
                <h5 style={{padding: "20px 30px"}}>Order Today</h5>
                <Line 
                  options={{
                      responsive: true
                  }}
                  data={this.state.data}
                />
            </div>
        )
    }
}
