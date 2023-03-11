import React, {useEffect, useState} from "react"

const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

const styles = {
        container: {
            width: '100%',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            padding: '10px 20px 30px 20px'
        },
        date: {
            margin: '0px 7px 0px 0px',
            color: 'rgb(153, 153, 153)',
            fontWeight: 400
        },
        nameContainer: {
            textAlign: 'start',
            margin: 0,
            fontSize: 42,
            fontWeight: 400
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        priceContainer: {
            width: 170,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'baseline'
        },
        titlePriceContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        },
        percentContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%'
        },
        triangleUp: {
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '16px solid #507e11'
        },
        triangleDown: {
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '16px solid #d91e18'
        },
    }

const Header = (props) => {
    const [date, setDate] = useState('')
    const [isUp, setIsUp] = useState(true)
    const [percent, setPercent] = useState('')
    const [change, setChange] = useState('')

    useEffect(() => {
        if (props.data) {
            const curDate =new Date(props.data.tickTime)
            const dateTemp = monthNames[curDate.getMonth()] + ' ' +
                curDate.getDate() + ', ' + curDate.getFullYear() + ' ' +
                curDate.getHours() + ':' + curDate.getMinutes()  + ' UTC ' + props.data.utcOffset
            setDate(dateTemp)
        }
    }, [props.data])

    useEffect(() => {
        if(props.data) {
            if (props.data.last - props.data.previousClose > 0) {
                setIsUp(true)
                setPercent(`(+${props.data.percentChange}%)`)
                setChange(`+${props.data.change}`)
            } else {
                setIsUp(false)
                setPercent(`(${props.data.percentChange}%)`)
                setChange(`${props.data.change}`)
            }
        }
    },[props.data])

    if (!props.data) {
        return(
            <div></div>
        )
    }
    return(
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h1 style={styles.nameContainer}>{props.title}</h1>
                <h5 style={styles.date}>As of: {date} </h5>
            </div>
            <div style={styles.priceContainer}>
                <div style={styles.titlePriceContainer}>
                    <div style={isUp ? styles.triangleUp : styles.triangleDown}></div>
                    <h1 style={{margin: '0 0 0 7px' , fontSize: 42, fontWeight: 500}}>
                        {props.data && props.data.last}
                    </h1>
                </div>
                <div style={styles.percentContainer}>
                    <p style={{margin: 0, color: isUp ? '#507e11' : '#d91e18' }}>{change}</p>
                    <p style={{margin: 0, color: isUp ? '#507e11' : '#d91e18' }}> {percent} </p>
                </div>
            </div>
        </div>
    )
}

export default Header