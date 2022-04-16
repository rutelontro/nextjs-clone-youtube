import {AppBar, Box, Paper, InputBase, IconButton, Toolbar, Button, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({theme}) => ({
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    width: '100%'
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

export default function TopNavbar() {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <StyledToolbar>
                    <Box display="flex" alignItems="center">
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <img src='/youtube-logo.svg' alt='logo' height={20} />
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Hidden mdDown>
                        <Box display="flex" alignItems="center">
                            <Paper variant="outlined" elevation={1}
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                                >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <IconButton>
                                <MicNoneIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                    </Hidden>

                    <Box display="flex" alignItems="center">
                        <IconButton>
                            <VideoCallIcon />
                        </IconButton>
                        <IconButton>
                            <AppsIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                        <Button variant="outlined" color='secondary' startIcon={<AccountCircleIcon />}>
                            Fazer login
                        </Button>
                    </Box>
                </StyledToolbar>
            </StyledAppBar>
      </Box>
    );
}