import {createGlobalStyle, ThemeProvider} from 'styled-components';

// Importing component
import Layout from '../components/layout'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0d253f',
    secondary: '#01b4e4',
    terciary: '#90cea1', 
    background: '#d3d6d2', 
    textLight: '#2d2e23', 
    textDark: '#a3a3a3'
  }
}

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    </>
  );
}