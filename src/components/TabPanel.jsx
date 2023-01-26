import Box from '@mui/material/Box';

export const TabPanel= ({ children, value, index}) => {

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} >
        {value === index && 
        // sx: allows you to specify any other CSS rules you may need. 
          <Box sx={{ p: 2 }}>
            {children}                
          </Box>
        }
      </div>
    );
  }