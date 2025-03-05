import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

const root = createRoot(document.getElementById('root'));

// console.log('1', document.querySelector('#root'));

root.render(
	// <StrictMode>
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	// </StrictMode>,
);
// console.log('2', document.querySelector('#root'));
