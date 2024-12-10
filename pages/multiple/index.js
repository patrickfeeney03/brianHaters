import { ChartAndDropDown } from "@/components/ChartAndDropDown";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../store/globalContext";

const width = 400;
const height = 400;

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

export default function MultipleGraphs() {
    const globals = useContext(GlobalContext);
    const [graphData, setGraphData] = useState(emptyGraphData);
    const [graphData2, setGraphData2] = useState(emptyGraphData);
    const [graphData3, setGraphData3] = useState(emptyGraphData);
    const [dummyDataForeThreeCities, setCity] = useState([
        {
            key: 1,
            city: 'Galway',
            series: [{ data: [2, 3, 7, 11, 11, 1, 2, 3, 4] }],
            width,
            height
        }
    ]);

    useEffect(() => {
        if (globals && Array.isArray(globals)) {
            const updatedData = globals.map((item, index) => {
                const filteredTemperatures = item.data
                    .slice(0, 9)
                    .map(entry => entry.main.temp);

                console.log(JSON.stringify(filteredTemperatures))

                return {
                    key: index,
                    city: item.city,
                    series: [{ data: filteredTemperatures }],
                    width,
                    height
                }
            });

            // console.log(`new data ${JSON.stringify(updatedData)}`)
            setCity(updatedData);
        }
    }, [globals])

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData,
                    key: 1,
                    width: width
                }}></ChartAndDropDown>
            </div>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData2,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData2,
                    key: 2,
                    width: width
                }}></ChartAndDropDown>
            </div>
            <div>
                <ChartAndDropDown data={{
                    graphData: graphData3,
                    dropDownOptions: citiesList,
                    cities: dummyDataForeThreeCities,
                    setGraph: setGraphData3,
                    key: 3,
                    width: width
                }}></ChartAndDropDown>
            </div>
        </div>
    )
}