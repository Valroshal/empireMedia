import React, {useEffect, useRef} from "react"
import {Chart} from "chart.js/auto";
const ChartWrapper = (props) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (chartRef && chartRef.current && props.chartData) {
            const chart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: props.chartData.length > 16 ?
                        props.chartData.map(d => {
                            return (new Date(d.StartDate)).getDate() + '/' + (new Date(d.StartDate)).getMonth()
                        }) :
                        props.chartData.map(d => d.StartTime),
                    datasets: [
                        {
                            label: '',
                            data: props.chartData.map(d => d.Close),
                            fill: true,
                            borderColor: '#00BFFF',
                            borderWidth: 1,
                            tension: 0.1,
                            showLabel: false,
                            pointRadius: 0,
                            backgroundColor: 'rgb(173,216,230, 0.3)'
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            position: 'right'
                        },
                    },
                    plugins: {
                        annotation: {
                            annotations: [
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 'April',
                                    borderColor: 'black',
                                    borderWidth: 2
                                }
                            ]
                        }
                    }
                }
            });
            return () => {
                chart.destroy()
            }
        }
    }, [props.chartData])

    if (!props.chartData) {
        return(
            <div>
                <h1>No data available</h1>
            </div>
        )
    }
    return(
        <div>
            <canvas ref={chartRef} />
        </div>
    )
}

export default ChartWrapper