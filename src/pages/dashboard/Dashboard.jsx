import { Grid } from "@mui/material"

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <h4>Dashboard</h4>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className="card">
                        Card 8
                    </div>
                </Grid>
                <Grid item xs={4}>
                    item xs 4
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard