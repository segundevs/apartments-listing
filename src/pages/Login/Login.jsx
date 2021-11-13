import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import AuthError from '../../components/AuthError/AuthError';
import ButtonLoader from '../../components/ButtonLoader';

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

const Login = () => {

  const classes = useStyle();
  const { login, signInWithGoogle, error, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   //Error states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)

    if(email === ''){
      setEmailError(true)
    }
    if(password === ''){
      setPasswordError(true)
    }
    await login(email, password)
  };

  const handleGoogle = async(e) => {
    e.preventDefault()
    await signInWithGoogle()
  }

  return (
      <Container component="main" maxWidth="xs">
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {error && <AuthError component={error}/>}
            <TextField
            size="small"
              margin="normal"
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

            <TextField
            size="small"
              margin="normal"
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

            <Typography align="center" display="flex"  alignItems="center" justifyContent="center" mt={3}>
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
              { loading ? <ButtonLoader /> : 'Sign In' }
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/password-reset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
  );
}

export default Login
