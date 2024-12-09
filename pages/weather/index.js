import { ChartAndDropDown } from "@/components/ChartAndDropDown";
import { useState } from "react";

const width = 650;
const height = 650;

const dummyDataForeThreeCities = [
    {
        key: 1,
        city: 'Galway',
        series: [{ data: [2, 3, 7, 11, 11, 1, 2, 3, 4] }],
        width,
        height
    },
    {
        key: 2,
        city: 'Dublin',
        series: [{ data: [20, 30, 7, 11, 11, 1, 2, 3, 4] }],
        width,
        height
    },
    {
        key: 3,
        city: 'Cork',
        series: [{ data: [2, 3, 1, 1, 1, 1, 2, 3, 2] }],
        width,
        height
    },
]

const citiesList = [
    { label: 'Galway', id: 1 },
    { label: 'Dublin', id: 2 },
    { label: 'Cork', id: 3 },
    { label: 'Wexford', id: 4 },
    { label: 'Sligo', id: 5 },
    { label: 'Ennis', id: 6 }
]

const emptyGraphData = {
    key: 0,
    series: [{ data: [] }],
    width,
    height
};

let count = 0;

export default function WeatherHome() {
    const [graphData, setGraphData] = useState(emptyGraphData);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "70px"
        }}>
            <ChartAndDropDown data={{
                graphData: graphData,
                dropDownOptions: citiesList,
                cities: dummyDataForeThreeCities,
                setGraph: setGraphData,
                key: count++
            }}></ChartAndDropDown>
        </div>
    );
}