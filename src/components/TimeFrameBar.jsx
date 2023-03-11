import React from "react"
import '../css/tabs.css'

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
}
const TimeFrameBar = (props) => {

    return(
        <div style={styles.container}>
            <button
                className="time"
                onClick={props.onMinuteClick}
            >
                1 Minute
            </button>
            <button
                className="time"
                onClick={props.onMinuteClick}
            >
                5 Minutes
            </button>
            <button
                className="time"
                onClick={props.onHourClick}
            >
                1 Hour
            </button>
            <button
                className="time"
                onClick={props.onWeekClick}
                autoFocus={true}
            >
                1 Week
            </button>
        </div>
    )
}

export default TimeFrameBar