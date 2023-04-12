import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@poc/theme/public/defaultTheme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
