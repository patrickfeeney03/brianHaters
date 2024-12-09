import Chart1 from "@/components/Chart1";
import { ChartAndDropDown } from "@/components/ChartAndDropDown";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const dummyDataForeThreeCities = [
    {
        key: 1,
        city: 'Galway',
        series: [{ data: [2, 3, 7, 11, 11, 1, 2, 3, 4] }],
        width: 400,
        height: 400
    },
    {
        key: 2,
        city: 'Dublin',
        series: [{ data: [20, 30, 7, 11, 11, 1, 2, 3, 4] }],
        width: 400,
        height: 400
    },
    {
        key: 3,
        city: 'Cork',
        series: [{ data: [2, 3, 1, 1, 1, 1, 2, 3, 2] }],
        width: 400,
        height: 400
    },
]

const dummyData = [
    { label: 'Galway', id: 10 },
    { label: 'Dublin', id: 20 },
    { label: 'Cork', id: 30 },
]

const emptyGraphData = {
    key: 0,
    xAxis: [{ data: ["12:00", "13:00", "14:00", "15:00"] }],
    series: [{ data: [] }],
    width: 400,
    height: 400
};

let count = 0;

export default function WeatherHome() {
    const [graphData, setGraphData] = useState(emptyGraphData);

    return (
        <ChartAndDropDown data={{
            graphData: graphData,
            dropDownOptions: dummyData,
            cities: dummyDataForeThreeCities,
            setGraph: setGraphData,
            key: count++
        }}></ChartAndDropDown>
    );
}