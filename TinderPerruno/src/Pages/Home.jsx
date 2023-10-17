import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Aceptados from "./Components/aceptados";
import Rechazados from "./Components/rechazados";
import Candidato from "./Candidato";


export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Candidato" {...a11yProps(0)} />
          <Tab label="Aceptados" {...a11yProps(1)} />
          <Tab label="Rechadazos" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={2}>
        <Rechazados></Rechazados>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Aceptados></Aceptados>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={0}>
        <Candidato></Candidato>
      </CustomTabPanel>
    </Box>



  )
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}