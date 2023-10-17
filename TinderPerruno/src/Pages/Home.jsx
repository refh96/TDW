import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Aceptados from "./Components/Aceptados";
import Rechazados from "./Components/Rechazados";
import Candidato from "./Candidato";
import './Home.css'; // Importa el archivo CSS

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <div className="container">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="Tabs">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Candidato" {...a11yProps(0)} />
          <Tab label="Aceptados" {...a11yProps(1)} />
          <Tab label="Rechadazos" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={2} className="CustomTabPanel">
        <Rechazados></Rechazados>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="CustomTabPanel">
        <Aceptados></Aceptados>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={0} className="CustomTabPanel">
        <Candidato></Candidato>
      </CustomTabPanel>
    </Box>
  </div>



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