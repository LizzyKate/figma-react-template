import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/ui.css';
import { App } from './components/App';
import { usePluginData } from '../hooks';

const UI = () => {
  const [pluginData] = usePluginData();
  return <App pluginData={pluginData} />;
};

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(<UI />);
});
