import React from 'react'

const styles = ({
    colName: {
        borderBottom: '1px solid #ddd',
        padding: 5,
        backgroundColor: '#f6f6f6'
    },
    positive: {
        borderBottom: '1px solid #ddd',
        padding: 5,
        color: '#507e11'
    },
    negative: {
        borderBottom: '1px solid #ddd',
        padding: 5,
        color: '#d91e18'
    },
    row: {
        borderBottom: '1px solid #ddd',
        padding: 5
    }
})
const Table = (props) => {

    if (!props.data) {
        return(
            <div>
                <h1>No data available</h1>
            </div>
        )
    }

    return (
        <table style={{width: '100%', border: '1px solid #ececec'}}>
            <tr>
                <th style={styles.colName}>Date</th>
                <th style={styles.colName}>High</th>
                <th style={styles.colName}>Low</th>
                <th style={styles.colName}>Open</th>
                <th style={styles.colName}>Close</th>
                <th style={styles.colName}>% Change</th>
            </tr>
            {props.data.map((val, key) => {
                const percent = (((Number(val.Close) / Number(val.Open)) - 1) * 100).toFixed(2)
                return (
                    <tr key={key}>
                        <td style={styles.row}>{val.StartDate}</td>
                        <td style={styles.row}>{val.High}</td>
                        <td style={styles.row}>{val.Low}</td>
                        <td style={styles.row}>{val.Open}</td>
                        <td style={styles.row}>{val.Close}</td>
                        <td style={percent > 0 ? styles.positive: styles.negative}
                        >
                            {percent} %
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}
export default Table
