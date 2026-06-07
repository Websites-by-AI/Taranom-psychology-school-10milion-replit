import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress non-Error uncaught exceptions from motion/react animation
// cancellations (DOMException / AbortError thrown when components unmount
// mid-animation). These are benign and do not affect functionality.
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  if (!reason) { event.preventDefault(); return; }
  const isAbort =
    (reason instanceof DOMException && reason.name === 'AbortError') ||
    (typeof reason === 'object' && reason?.name === 'AbortError') ||
    (typeof reason === 'string' && reason.toLowerCase().includes('abort'));
  if (isAbort) event.preventDefault();
});

window.addEventListener('error', (event) => {
  const err = event.error;
  if (!err || !(err instanceof Error)) {
    // Non-Error thrown globally — likely a cancelled animation; suppress it.
    event.preventDefault();
    return;
  }
});

createRoot(document.getElementById('root')!).render(
  <App />
);
