import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import NounsAvatar from './avatar';

window.global = window.global ?? window;

const client = createClient(
	getDefaultClient({
		appName: 'ConnectKit Nouns',
	})
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<WagmiConfig client={client}>
			<ConnectKitProvider options={{ customAvatar: NounsAvatar }}>
				<App />
			</ConnectKitProvider>
		</WagmiConfig>
	</React.StrictMode>
);
