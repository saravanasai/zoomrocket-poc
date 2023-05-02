import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <AppBar>
            <Toolbar>
            
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                   
                    <RocketLaunchIcon />
                </IconButton>
                <Link to={'/'}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,textDecoration:'none' }}>
                    Zoom Rocket
                </Typography>
                </Link>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar