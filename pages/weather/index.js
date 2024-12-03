import Chart1 from "@/components/Chart1";

const dummyData = [
    {
        key: 1,
        xAxis: [{ data: [11, 2, 3] }],
        series: [{ data: [1, 2, 3] }],
        width: 700,
        height: 700
    },
    {
        key: 2,
        xAxis: [{ data: [1, 2, 31] }],
        series: [{ data: [1, 2, 3] }],
        width: 700,
        height: 700
    },
    {
        key: 3,
        xAxis: [{ data: [1, 20, 3] }],
        series: [{ data: [1, 2, 3] }],
        width: 700,
        height: 700
    }
]

export default function WeatherHome() {
    return (
        <Chart1 data={dummyData}></Chart1>
    );
}