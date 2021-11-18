import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import AuthError from '../../components/AuthError/AuthError';

//Material UI components
import { Button, CssBaseline, TextField, Typography, Container, Box} from '@mui/material';

//Material UI styles
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
  }
});

const ForgotPassword = () => {

  const classes = useStyle();
  const { resetPassword, error } = useAuth();

  const [email, setEmail] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    await resetPassword(email)
    setEmail('')
  }

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{mt: 2}}>
            Forgotten Password
          </Typography>
          <Box component="form" onSubmit={handlePasswordReset} noValidate>
            {error && <AuthError component={error}/>}
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.hover}
              sx={{ mt: 1, mb: 2 }}
            >
              Send Reset Email
            </Button>
          </Box>
        </Box>
      </Container>
  )
}

export default ForgotPassword
