import Chart1 from "@/components/Chart1";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const dummyDataForOneGraph = {
    key: 1,
    xAxis: [{ data: [11, 2, 3] }],
    series: [{ data: [1, 2, 3] }],
    width: 400,
    height: 400
}

const dummyDataForeThreeCities = [
    {
        key: 1,
        city: 'Galway',
        xAxis: [{ data: [110, 2, 3] }],
        series: [{ data: [10, 2, 3] }],
        width: 400,
        height: 400
    },
    {
        key: 2,
        city: 'Dublin',
        xAxis: [{ data: [11, 2, 300] }],
        series: [{ data: [1, 2, 3] }],
        width: 400,
        height: 400
    },
    {
        key: 3,
        city: 'Cork',
        xAxis: [{ data: [11, 20, 3] }],
        series: [{ data: [1, 2, 3] }],
        width: 400,
        height: 400
    },
]

const dummyData = [
    { label: 'Galway', id: 1 },
    { label: 'Dublin', id: 2 },
    { label: 'Cork', id: 3 },
]



export default function WeatherHome() {
    const [graphData, setGraphData] = useState(dummyDataForeThreeCities[0]);

    return (
        <div>
            <Chart1 data={[graphData]}></Chart1>
            <Autocomplete
                disablePortal
                options={dummyData}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="City" />}
                onChange={(event, newValue) => {
                    console.log(`The new value is ${newValue.label}`)
                    const newDataForGraph = dummyDataForeThreeCities.find((cityData) => (cityData.city === newValue.label));
                    setGraphData(newDataForGraph);
                }
                }
            />
        </div>
    );
}