// import React from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DateRange from './DateRange'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chart from './Chart'
import data from '../../data/data'
import { Grid, Paper } from '@mui/material';

const moment = require('moment');

const drawerWidth = 240;

export default function Dashboard() {
  const [clicks, setClicks] = React.useState(0);
  const [impressions, setImpressions] = React.useState(0);
  const [filteredItem, setFilteredItem] = React.useState([]);

  const getDataByRange = (dateRange) => {
    let clickCount =0;
    let impCount =0;
    if(dateRange.length == 2){
    console.log("here", dateRange)

      let list = data.filter(item => {
        // item.date

        let date = moment(item.date, 'MM/DD/YYYY')
        console.log(date.isAfter(dateRange[0]) , date.isBefore(dateRange[1]))
        if(date.isAfter(dateRange[0]) && date.isBefore(dateRange[1])) {
    console.log("here", item)

          clickCount = clickCount + parseFloat(item.clicks);
          impCount = impCount + parseFloat(item.impressions);
          return item;
        }
      })
      setFilteredItem(list);
      setClicks(clickCount);
      setImpressions(impCount);
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <Divider />
        <Divider />
        <List>
          {['Dashboard', 'Analytics', 'ECommerce'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}
        <DateRange setDateRange={getDataByRange}/>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper>
            <Card >
            <CardContent>
              <Typography variant="body2" component="div">
                Total Clicks
              </Typography>
              <br />
              <Typography variant="h5">
                {parseFloat(clicks.toFixed(2))}
              </Typography>
            </CardContent>
        </Card>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
            <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                Total Impressions
              </Typography>
              <br />
              <Typography variant="h5">
                {impressions}
              </Typography>
            </CardContent>
        </Card>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography  variant="h5">
         Product Trends By Month
        </Typography>
        { filteredItem.length > 0 && (<Chart list={filteredItem}/>)}
      </Box>
    </Box>
  );
}