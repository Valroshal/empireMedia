import React, {useCallback, useEffect, useState} from "react"
import TimeFrameBar from "../components/TimeFrameBar";
import {fetchedData1hour, fetchedData30min} from "./utils";
import Table from "../components/Table";
const HistoryTab = () => {
    const [ chartData, setChartData ] = useState(null)

    useEffect( () => {
        if(!chartData) {
            fetchedData1hour().then((data) => {
                setChartData(data.reverse())
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
            setChartData(data.reverse())
        })
    }, [])

    return(
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column'}}>
            <TimeFrameBar
                onMinuteClick={handleMinuteClick}
                onHourClick={handleHourClick}
                onWeekClick={handleWeekClick}
            />
            <div style={{marginTop: 15, width: '100%'}}>
                <Table
                    data={chartData}
                />
            </div>
        </div>
    )
}

export default HistoryTab