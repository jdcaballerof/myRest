import React, { useState } from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TabPanel } from '../components/TabPanel';
import { BoxPractice } from '../components/practica/BoxPractice';
import { TabPractice } from '../components/practica/TabPractice';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Gato } from '../components/Gato';


export const PruebasPage = () => {

  const [tab, setTab] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  return (
    <div className=' min-h-screen' >
      <h2 className='' >PruebasPage</h2>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={(ev, newValue) => setTab(newValue) } 
          aria-label="basic tabs example" 
          variant="scrollable" scrollButtons="auto"
          textColor="secondary" indicatorColor="secondary"
          >
          <Tab label="Panel 1" {...a11yProps(0)} />
          <Tab label="Panel 2" {...a11yProps(1)} />
          <Tab label="Panel 3" {...a11yProps(2)} />
          <Tab label="Panel 4" {...a11yProps(3)} />
          <Tab label="Panel 5" {...a11yProps(4)} />
          <Tab label="Panel 6" {...a11yProps(5)} />
        </Tabs>
      </Box>


      <TabPanel value={tab} index={0}>
        <Typography sx={{color: 'blue'}} className='bg-pink-200' >Typography - Text </Typography>
        <Link to="/home" >
          <Button variant="contained" sx={{zIndex: 999, position: 'fixed', bottom: 15, right: 15, borderRadius: 20}}> Home </Button>
        </Link> 
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <BoxPractice />
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <TabPractice />
      </TabPanel>

      <TabPanel value={tab} index={3}>
        <Gato />
      </TabPanel>

      <TabPanel value={tab} index={4}>
        Item Two
      </TabPanel>

      <TabPanel value={tab} index={5}>
        Item Three
      </TabPanel>


    </div>
  )
}
