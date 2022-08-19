// import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../component/dashboard/budget";
import { LatestOrders } from "../component/dashboard/latest-order";
import { LatestProducts } from "../component/dashboard/latest-products";
import { Sales } from "../component/dashboard/sales";
import { TasksProgress } from "../component/dashboard/tasks-progress";
import { TotalCustomers } from "../component/dashboard/total-customers";
import { TotalProfit } from "../component/dashboard/total-profit";
import { TrafficByDevice } from "../component/dashboard/traffic-by-device";
// import { DashboardLayout } from "../component/dashboard-layout";

const Dashboard = () => (
  <>
    {/* <Head>
      <title>Dashboard | Material Kit</title>
    </Head> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          {/* <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: "100%" }} />
          </Grid> */}
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
