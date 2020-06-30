import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function WorldCharts(props) {

    const status = props.status;
    const confirmed = status.confirmed;
    const deaths = status.deaths;
    const recovered = status.recovered;

    // var time1 = moment(Charts.date, "YYYY-MM-DDTHH:mm:ss.SSS");
    // var date = moment(time1,'DD/MM/YYYY HH:mm:ss.SSS').format('LL');
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed, recovered, deaths],
                            separator: ","
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: ` Current ` },
                }}
            />
        ) : null
    );


    return (
        <div style={{maxHeight:"600px",maxWidth: "800px" ,alignContent: "center"}}>
            { barChart }
        </div>
    );
};