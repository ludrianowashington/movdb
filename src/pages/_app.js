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
    background: '#a3a5a3',
    textDark: '#828282', 
    textLight: '#2d2e23', 
    hover: '#e9e9e9'
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