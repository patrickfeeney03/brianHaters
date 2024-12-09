import { ChartAndDropDown } from "@/components/ChartAndDropDown";
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
    xAxis: [{ data: ["12:00", "13:00", "14:00", "15:00"] }],
    series: [{ data: [] }],
    width: 400,
    height: 400
};

let count = 0;

export default function MultipleGraphs() {
    const [graphData, setGraphData] = useState(emptyGraphData);
    const [graphData2, setGraphData2] = useState(emptyGraphData);
    const [graphData3, setGraphData3] = useState(emptyGraphData);

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData,
                    key: 1
                }}></ChartAndDropDown>
            </div>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData2,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData2,
                    key: 2
                }}></ChartAndDropDown>
            </div>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData3,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData3,
                    key: 3
                }}></ChartAndDropDown>
            </div>
        </div>
    )
}