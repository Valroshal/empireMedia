import React from "react"
import '../css/tabs.css'

const styles = {
    container: {
        borderBottom: '2px solid #ececec',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    onFocus: {
        color:  '#3f5678',
        outline: 'none',
        outlineOffset: -2,
        boxShadow: '0 2px 0 #3f5678'
    },
}
const HorizontalNavigation = (props) => {

    return(
        <div style={styles.container}>
            <button
                style={props.tabClicked === 'overview' ? styles.onFocus: {}}
                className="button"
                onClick={props.onOverviewClick}
                autoFocus={true}
            >
                Overview
            </button>
            <button
                style={props.tabClicked === 'history' ? styles.onFocus: {}}
                className="button"
                onClick={props.onHistoryClick}
            >
                History
            </button>
        </div>
    )
}

export default HorizontalNavigation
