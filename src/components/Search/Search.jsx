import {CssBaseline, TextField, Grid, Box, FormControl, InputLabel, Select, MenuItem, Container} from '@mui/material';
import { useData } from '../../contexts/dataContext';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
  inputField: {
    height: '40px'
  }
});

const Search = () => {
  const classes = useStyle();
  const { location, setLocation, price, setPrice, type, setType, keyword, setKeyword } = useData();
  return (
      <Container component="main" >
        <CssBaseline />
        <Box sx={{ marginTop: 1 }} >
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>

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
                <TextField fullWidth label="Price" value={price} onChange={(e) => setPrice(e.target.value)}  size="small"/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)}  size="small"/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Keywords (bedroom, pool, mall)" value={keyword} onChange={(e) => setKeyword(e.target.value)}  size="small"/>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default Search;