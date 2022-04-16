import Head from 'next/head';
import { styled } from '@mui/material/styles';
import TopNavbar from 'src/components/Layout/TopNavbar';
import Sidebar from 'src/components/Layout/Sidebar';

const MainDiv = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.dark,
    //display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
}));

const Wrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
}));

const ContentContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
}));

const Content = styled('div')(({theme}) => ({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
}));

function Layout({children, title}) {
    return (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'></meta>
            <meta name='viewport' content='initial-scale=1.0, width-device-width'></meta>
        </Head>

        <MainDiv>
            <TopNavbar />
            <Sidebar />
            <Wrapper>
                <ContentContainer>
                    <Content>
                        {children}
                    </Content>
                </ContentContainer>
            </Wrapper>
        </MainDiv>
    </>
    )
}

export default Layout