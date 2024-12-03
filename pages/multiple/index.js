import { Autocomplete, TextField } from "@mui/material";

const dummyData = [
    { label: 'Galway', id: 1 },
    { label: 'Dublin', id: 2 },
    { label: 'Cork', id: 3 },
]

export default function MultipleGraphs() {
    return (
        <div>
            <h1>Multiple Graphs</h1>
            <Autocomplete
                disablePortal
                options={dummyData}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                onChange={() => (console.log("changed the value"))}
            />
        </div>
    )
}