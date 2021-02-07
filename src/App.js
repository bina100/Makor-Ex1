import './App.css';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, List, ListItem, ListItemText, Collapse, Table, TableRow, TableCell, colors } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Alert, AlertTitle, TabPanel } from '@material-ui/lab';
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#202020',
  },
  grid: {
    width: '100%',
    margin: '0px',
    display: "flex",
    backgroundColor: '#333333',
    color: 'white',
    fontSize: '12px',

  },
  tab: {
    backgroundColor: '#404040',
    display: "flex",
    fontSize: '16px !important',
    color: 'white',
  },
  list: {
    margin: '0px',
    backgroundColor: '#262626',
    height: '35px'
  },
  paper: {
    margin: '0px',
    height: '20px',
    borderRadius: 0,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: 'white',
    fontSize: '12px',
    backgroundColor: '#262626',
  },
  red: {
    color: 'white',
    backgroundColor: 'red',
    padding: theme.spacing(1),
    borderRadius: 0,
  },
  green: {
    color: 'white',
    backgroundColor: '#0fbd3b',
    padding: theme.spacing(1),
    borderRadius: 0,
  },
  black: {
    color: 'white',
    backgroundColor: '#202020',
    borderRadius: 0,
  },
  search: {
    backgroundColor: '#262626',
  },
  container: {
    backgroundColor: '#262626',
  },
  text: {
    backgroundColor: '#333333',
    fontSize: '12px',
  },
  multilineColor: {
    color: 'red'
  }
}));
const ColoredLine = ({ color }) => (
  <hr
    style={{
      backgroundColor: color,
      height: 0.25
    }}
  />
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.main} spacing={2}>
       {/* the first card */}
      <Grid container spacing={4} >
        <Grid item xs={3}>
          <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={4}>
              <Tabs className={classes.tab} value={value} onChange={handleChange} >
                Tab={<span> <ZoomOutMapIcon /> RFQ </span>}
              </Tabs>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={1}><AddIcon fontSize="small" /></Grid>
            <Grid item xs={2}><CloseIcon fontSize="small" /> </Grid>
          </Grid>
          {/* Tab Content - I was unable to insert the content into the tabpanel  */}
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6}>
              <List>
                <ListItem button onClick={handleClick} className={classes.list}>
                  <ListItemText primary="Product" />
                  {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem button onClick={handleClick} className={classes.list}>
                  <ListItemText primary="Fok" />
                  {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Quantity</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Slpage-bps</Paper>
            </Grid>
            <Grid item xs={4} >
              <Paper className={classes.red} >sell 800.0000000</Paper>
            </Grid>
            <Grid item xs={4} >
              <Paper className={classes.black}>-9.869.00</Paper>
            </Grid>
            <Grid item xs={4} >
              <Paper className={classes.green} >Buy 568.982.0000</Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* the second card */}
        <Grid item xs={3}>
          <Grid className={classes.externalgrid} >
            <Grid className={classes.grid} container spacing={3}>
              <Grid item xs={4}>

                <Tabs className={classes.tab} value={value} onChange={handleChange} >
                  Tab={<span> <ZoomOutMapIcon /> News </span>}
                </Tabs>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={1}><AddIcon fontSize="small" /></Grid>
              <Grid item xs={2}><CloseIcon fontSize="small" /> </Grid>
            </Grid>
            {/* Tab Content - I was unable to insert the content into the tabpanel */}
            <div className={classes.text} >
              <TextField className={classes.search}
                placeholder="Search"
                // label="Disabled"
                InputProps={{
                  endAdornment: <InputAdornment position="end"> <SearchIcon /></InputAdornment>,
                }}
              />
              <div className={classes.container}>
                <div style={{ color: '#0099FF' }}>{Date().toLocaleString()}</div>
                <p style={{ color: 'white' }}>S&P 500 adds 14 point</p>
                <p style={{ color: 'orange' }}> Eropan sti=ok markets </p>
                <ColoredLine color="#989898" />
                <p style={{ color: 'white' }}>#fd5    #ddv</p>
              </div>
              <div className={classes.container}>
                <div style={{ color: '#0099FF' }}>{Date().toLocaleString()}</div>
                <p style={{ color: 'white' }}>S&P 500 adds 14 point</p>
                <p style={{ color: 'orange' }}> Eropan sti=ok markets  </p>
                <ColoredLine color="#989898" />
                <p style={{ color: 'white' }}>#fd5    #ddv</p>
              </div>
            </div>
          </Grid>
        </Grid>      
      {/*  The third card */}
      <Grid item xs={3} >
        <Grid className={classes.externalgrid} >
          <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={4}>
              <Tabs className={classes.tab} value={value} onChange={handleChange} >
                Tab={<span> <ZoomOutMapIcon /> RFQ </span>}
              </Tabs>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={1}><AddIcon fontSize="small" /></Grid>
            <Grid item xs={2}><CloseIcon fontSize="small" /> </Grid>
          </Grid>
        </Grid>
        {/* Tab Content - I was unable to insert the content into the tabpanel */}
        <div >
          <Grid container spacing={2} className={classes.grid} >
            <Grid item xs={12} >
              <Paper square>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tab}
                >
                  <Tab label="Sell" />
                  <Tab label="Buy" />
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <List>
                <ListItem button onClick={handleClick} className={classes.list}>
                  <ListItemText primary="Product" />
                  {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} >
              <Paper className={classes.paper}>Quantity</Paper>
            </Grid>
            <Grid item xs={4} ms={2} ></Grid>
            <Button variant="contained" color="primary" >
              Add
            </Button>
          </Grid>
        </div>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
