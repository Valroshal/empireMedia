export const fetchedData1hour = async () => {
    const response = await fetch(
        "https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Hours&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume"
    );
    return await response.json();
}

export const fetchedData30min = async () => {
    const response = await fetch(
        "https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume"
        );
    return await response.json();
}
