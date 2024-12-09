import { LineChart } from "@mui/x-charts";

export default function Chart1(props) {
  const currentDate = new Date();
  return (
    <>
      {props.data.map((item) => (
        <LineChart
          key={item.key}
          xAxis={[{
            label: "Hours of  the day",
            scaleType: "utc",
            data: [
              currentDate.setHours(0),
              currentDate.setHours(3),
              currentDate.setHours(6),
              currentDate.setHours(9),
              currentDate.setHours(12),
              currentDate.setHours(15),
              currentDate.setHours(18),
              currentDate.setHours(21),
              currentDate.setHours(24),
              //https://codesandbox.io/p/sandbox/infallible-chihiro-9t492y?file=%2Fsrc%2FDemo.tsx%3A11%2C13-11%2C45
            ],
          }]}
          yAxis={[{
            label: "Temperature (°C)",
            min: 0,
            max: 50,
          }]}
          series={item.series}
          width={item.width}
          height={item.height}>
        </LineChart>
      ))}
    </>
  )
}