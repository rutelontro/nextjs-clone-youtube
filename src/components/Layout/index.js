import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Head from 'next/head';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';

const useStyles = styled((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256,
        }
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '100%',
        overflow: 'auto',
    }
  }));
  
function Layout({children, title}) {
    const classes = useStyles();
    return (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'></meta>
            <meta name='viewport' content='initial-scale=1.0, width-device-width'></meta>
        </Head>
        <div className={classes.root}>
            <TopNavbar></TopNavbar>
            <Sidebar></Sidebar>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Layout