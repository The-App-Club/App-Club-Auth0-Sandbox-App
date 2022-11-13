import type {AppProps} from 'next/app';
import {UserProvider} from '@auth0/nextjs-auth0';
import Header from '@/components/Header';
import {CssVarsProvider} from '@mui/joy/styles';
import {customTheme} from '@/config/theme';

import '@/styles/index.css';
import '@/styles/index.scss';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <CssVarsProvider theme={customTheme}>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </CssVarsProvider>
  );
};

export default App;
