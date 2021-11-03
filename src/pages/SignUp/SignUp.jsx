import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {FcGoogle} from 'react-icons/fc';

import { makeStyles } from '@mui/styles';

import Copyright from '../../components/Copyright';


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
  icon: {
    marginRight: '5px'
  }
});


const SignUp = () => {

  const classes = useStyle();
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting...')
  }

  const handleGoogle = (e) => {
    e.preventDefault()
    console.log('handle google')
  }

  

  return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>

            <Typography align="center" display="flex"  alignItems="center" justifyContent="center" mt={2}>
                <FcGoogle className={classes.icon}/>
                <Link href="#" variant="body2" onClick={handleGoogle}>
                   Signup with google
                </Link>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.hover}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          
              <Typography align="center">
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Typography>
             
          </Box>
        </Box>
        <Copyright sx={{ mt: 3 }} />
      </Container>
  );
}

export default SignUp