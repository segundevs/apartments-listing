import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';

//Material UI components
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, Box} from '@mui/material';

//Icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {FcGoogle} from 'react-icons/fc';

//Material UI styles
import { makeStyles } from '@mui/styles';

//Components
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
  const { signUp, signInWithGoogle } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //Error states
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

 
  //SignUp Account
  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)

    if(username === ''){
      setUsernameError(true)
    }
    if(email === ''){
      setEmailError(true)
    }
    if(password === ''){
      setPasswordError(true)
    }
    await signUp(email, password, username);
  }

  const handleGoogle = async(e) => {
    e.preventDefault()
    await signInWithGoogle()
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
                size="small"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  error={usernameError}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                size="small"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={emailError}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  error={passwordError}
                />
              </Grid>
            </Grid>

            <Typography align="center" display="flex"  alignItems="center" justifyContent="center" mt={2}>
                <FcGoogle className={classes.icon}/>
                <Link href="#" variant="body2" onClick={handleGoogle}>
                   Login with google
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