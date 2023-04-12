import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defaultThemeCss } from '@poc/theme';

defaultThemeCss;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
