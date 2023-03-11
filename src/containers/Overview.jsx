import React, {useCallback, useEffect, useState} from "react"
import TimeFrameBar from "../components/TimeFrameBar"
import ChartWrapper from "../components/ChartWrapper"
import {fetchedData1hour, fetchedData30min} from "./utils";
const OverviewTab = () => {
    const [ chartData, setChartData ] = useState(null)

    useEffect( () => {
        if(!chartData) {
            fetchedData1hour().then((data) => {
                setChartData(data)
            })
        }
    }, [chartData])

    const handleMinuteClick = useCallback(() => {
        fetchedData30min().then((data) => {
            //HERE because I had API not for last days, I get the last API date and not the today date.
            // it also can be today's date
            const date = data.slice(-1)
            const filteredData = data.filter((d) => d.StartDate === date[0].StartDate)
            setChartData(filteredData)
        })
    }, [])

    const handleHourClick = useCallback(() => {
        fetchedData1hour().then((data) => {
            setChartData(data.slice(-8))
        })
        }, [])

    const handleWeekClick = useCallback(() => {
        fetchedData1hour().then((data) => {
            setChartData(data)
        })
    }, [])

    return(
        <div>
            <TimeFrameBar
                onMinuteClick={handleMinuteClick}
                onHourClick={handleHourClick}
                onWeekClick={handleWeekClick}
            />
            <ChartWrapper
                chartData={chartData}
            />
        </div>
    )
}

export default OverviewTab