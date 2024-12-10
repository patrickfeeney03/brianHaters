import { Autocomplete, TextField } from "@mui/material";
import Chart1 from "./Chart1";



export function ChartAndDropDown(props) {

  const emptyGraphData = {
    key: 0,
    series: [{ data: [] }],
    width: props.data.width,
    height: props.data.width
  };

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
            const cities = props.data.cities;
            let set = 0;
            for (let city of cities) {
              if (city.city.toLowerCase() === newValue.label.toLowerCase()) {
                props.data.setGraph(city);
                set = 1;
              }
            }
            
          } else {
            props.data.setGraph(emptyGraphData);
          }
        }}
      />
    </>
  )
}