import {Button, CssBaseline, TextField, Grid, Box, FormControl, InputLabel, Select, MenuItem, Container} from '@mui/material';


import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
   hover: {
    backgroundColor: 'hsl(167, 98%, 19%)',
    color: '#ffffff',
    height: '40px',
    "&:hover": {
      backgroundColor: '#ffffff',
      color: 'hsl(167, 98%, 19%)',
      outline: '1px solid hsl(167, 98%, 19%)'
    }
  },

  inputField: {
    height: '40px'
  }
});

const Search = ({location, setLocation, price, setPrice, type, setType, value, setValue}) => {

  const classes = useStyle();

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
      <Container component="main" >
        <CssBaseline />
        <Box sx={{ marginTop: 1 }} >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

               {/* <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select value={location} label="Location" onChange={(e) => setLocation(e.target.value)} className={classes.inputField}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="abia">Abia</MenuItem>
                  <MenuItem value="adamawa">Adamawa</MenuItem>
                  <MenuItem value="akwa-ibom">Akwa-Ibom</MenuItem>
                  <MenuItem value="anambra">Anambra</MenuItem>
                  <MenuItem value="bauchi">Bauchi</MenuItem>
                  <MenuItem value="bayelsa">Bayelsa</MenuItem>
                  <MenuItem value="benue">Benue</MenuItem>
                </Select>
                </FormControl>
              </Grid> */}


              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                <InputLabel>Property Type</InputLabel>
                <Select value={type} label="Property Type" onChange={(e) => setType(e.target.value)} className={classes.inputField}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="bungalow">Bungalow</MenuItem>
                  <MenuItem value="flat">Flat</MenuItem>
                  <MenuItem value="duplex">Duplex</MenuItem>
                  <MenuItem value="terrace">Terrace</MenuItem>
                  <MenuItem value="semi-detached">Semi-detached</MenuItem>
                  <MenuItem value="detached">Detached</MenuItem>
                  <MenuItem value="maisonette">Maisonette</MenuItem>
                  <MenuItem value="penthouse">Penthouse</MenuItem>
                </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                <InputLabel>Max Price</InputLabel>
                <Select value={price} label="Max Price" onChange={(e) => setPrice(e.target.value)} className={classes.inputField}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="5000">$5000</MenuItem>
                  <MenuItem value="10000">$10,000</MenuItem>
                  <MenuItem value="15000">$15,000</MenuItem>
                  <MenuItem value="20000">$20,000</MenuItem>
                  <MenuItem value="250000">$25,000</MenuItem>
                  <MenuItem value="30000">$30,000</MenuItem>
                  <MenuItem value="400000">$40,000</MenuItem>
                  <MenuItem value=">40000">Above $40,0000</MenuItem>
                </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)}  size="small"/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Keywords (bedroom, pool, mall)" value={value} onChange={(e) => setValue(e.target.value)}  size="small"/>
              </Grid>

            </Grid>
            <Button
              className={classes.hover}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

export default Search;