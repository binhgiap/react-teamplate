import { ConfigProvider } from 'antd';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback="loading">
            <App />
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ConfigProvider>
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
