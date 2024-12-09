import { Autocomplete, TextField } from "@mui/material";
import Chart1 from "./Chart1";

export function ChartAndDropDown(props) {

  return (
    <>
      <Chart1 data={[props.data.graphData]}></Chart1>
      <Autocomplete
        disablePortal
        options={props.data.dropDownOptions} // options from dropdown
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={(event, newValue) => {
          if (newValue != null) {
            const newDataForGraph = props.data.cities.find((cityData) => (cityData.city === newValue.label));
            props.data.setGraph(newDataForGraph);
          }
        }}
      />
    </>
  )
}