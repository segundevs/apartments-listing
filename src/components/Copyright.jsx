import Typography from '@mui/material/Typography';


const Copyright = (props) => {
  return (
     <Typography variant="body2" color="text.primary" align="center" {...props} mb={3}>
      {'Copyright © '} Apartments {new Date().getFullYear()} 
    </Typography>
  );
}

export default Copyright