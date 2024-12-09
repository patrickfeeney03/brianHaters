import { ChartAndDropDown } from "@/components/ChartAndDropDown";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../store/globalContext";

const width = 650;
const height = 650;



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
  const globals = useContext(GlobalContext);
    const [graphData, setGraphData] = useState(emptyGraphData);
    const [dummyDataForeThreeCities, setCity] = useState([
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
  ]);

    useEffect(() => {
      if (globals && Array.isArray(globals)) {
        const updatedData = globals.map((item, index) => ({
          key: index,
          city: item.city,
          series: [{ data: [2, 3, 1, 1, 1, 1, 2, 3, 2] }],
          width,
          height
        }));

        console.log(`new data ${JSON.stringify(updatedData)}`)
        setCity(updatedData);        
      }
    }, [globals])

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