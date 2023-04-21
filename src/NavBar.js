import * as React from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem, Modal, Tooltip } from '@mui/material';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



import './NavBar.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 8,
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <AppBar position="static" sx={{ margin: '0', backgroundColor: '#006699' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img class="toolbar-logo" src="fish circle logo.png"></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <h2>GONE PHISHING</h2>
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GONE PHISHING
                    </Typography>
                    <Box >
                        <Tooltip title="About Gone Phishing">
                            <IconButton style={{ borderRadius: 0, height: "45px" }} onClick={handleOpenUserMenu} sixe='small' color='inherit'>
                                <h6>ABOUT</h6>
                            </IconButton>
                        </Tooltip>
                        <Modal
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            id="menu-appbar"
                        >
                            <Box sx={style}>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'flex-end', mb: 1, display: "inline-block", position: 'absolute',
                                    left: '94%', top: '-5%', backgroundColor: '#E8E8E8', borderRadius: '30px'
                                }}>
                                    <IconButton variant="outlined" onClick={handleCloseUserMenu} sx={{ color: 'black' }}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    About Gone Phishing
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Gone Phishing is a tool to help you detect scam phone callers in real-time.
                                    Simply click "start recording" on the website when you answer a phone call,
                                    and Gone Phishing will help you decide whether or not the call is fraudulent.
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;
