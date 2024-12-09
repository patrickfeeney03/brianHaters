import { Autocomplete, TextField } from "@mui/material";
import Chart1 from "./Chart1";

export function ChartAndDropDown(props) {

  // console.log(`loggin in ChartAndDropDown ${JSON.stringify(props.data.graphData)}`)

  return (
    <>
      <div>
        <Chart1 data={[props.data.graphData]}></Chart1>
      </div>
      <Autocomplete
        disablePortal
        options={props.data.dropDownOptions} // options from dropdown
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={(event, newValue) => {
          if (newValue != null) {
            // console.log(newValue);
            const cities = props.data.cities;
            // console.log(newData);
            for (let city of cities) {
              console.log("looping")
              console.log(`city.city ${city.city} newValue.label ${newValue.label}`)
              if (city.city.toLowerCase() === newValue.label.toLowerCase()) {
                

                props.data.setGraph(city);
              }
            }
            
            // const newDataForGraph = props.data.cities.find((cityData) => (cityData.city === newValue.label));
            // props.data.setGraph(newDataForGraph);
            // console.log(`setting graph to new Data in Chart: ${newDataForGraph}`)
          }
        }}
      />
    </>
  )
}