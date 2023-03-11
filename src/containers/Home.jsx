import React, {useCallback, useEffect, useRef, useState} from 'react'
import Header from "../components/Header";
import HorizontalNavigation from "../components/HorizontalNavigation";
import HistoryTab from "./History";
import OverviewTab from "./Overview";

const styles = {
        headerContainer: {
            height: 112,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            margin: '0px 0px 25px 0px'
        },
    }

const Home = () => {
    const ws = useRef(null);

    const [ data, setData ] = useState(null)
    const [ history, setHistory] = useState(false)
    const [ overview, setOverview] = useState(true)

    //socket
    useEffect(() => {
        ws.current = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');

        ws.current.onopen = () => {
            const message = { type: 'SUBSCRIBE', instruments: ['s-aapl'] };
            ws.current.send(JSON.stringify(message));
        }

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            //console.log('message', message, JSON.stringify(message['s-aapl']))
            setData(message['s-aapl'])
        };

        return () => {
            if (ws.current.readyState === WebSocket.OPEN) {
                const message = { type: 'UNSUBSCRIBE', instruments: ['s-aapl'] };
                ws.current.send(JSON.stringify(message));
            }

            ws.current.close();
        };
    }, [])

    const handleHistoryClick = useCallback(() => {
        setOverview(false)
        setHistory(true)
    }, [])

    const handleOverviewClick = useCallback(() => {
        setOverview(true)
        setHistory(false)
    }, [])

    return (
        <div style={{padding: 20}}>
            <div style={styles.headerContainer}>
                <Header
                    title={'Apple Inc'}
                    data={data}
                />
            </div>
            <HorizontalNavigation
                onHistoryClick={handleHistoryClick}
                onOverviewClick={handleOverviewClick}
                tabClicked={history ? 'history' : 'overview'}
            />
            {history && <HistoryTab/>}
            {overview && <OverviewTab/>}
        </div>
    );
}

export default Home
