import { LineChart } from "@mui/x-charts";

export default function Chart1(props) {
    return (
        <>
        {props.data.map((item) => (
            <LineChart
                key={item.key}
                xAxis={item.xAxis}
                series={item.series}
                width={item.width}
                height={item.height}>
            </LineChart>
        ))}
        </>
    )
}