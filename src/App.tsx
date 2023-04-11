import './App.css';
import { ConnectKitButton } from 'connectkit';

function App() {
	return (
		<div className="App">
			<code>npm i connectkit-nouns</code>
			<p>
				<a href="https://github.com/badublanc/connectkit-nouns">
					GitHub &#8594;
				</a>
			</p>
			<p className="text">
				Use Nouns as avatars in your ConnectKit project. Generates a Noun avatar
				if a wallet doesn't have an ENS image.
			</p>

			<div className="btnGrid">
				<div className="gridItem">
					<p>theme: default</p>
					<ConnectKitButton />
				</div>
				<div className="gridItem">
					<p>theme: nouns</p>
					<ConnectKitButton theme="nouns" />
				</div>
				<div className="gridItem">
					<p>theme: web95</p>
					<ConnectKitButton theme="web95" />
				</div>
				<div className="gridItem">
					<p>theme: retro</p>
					<ConnectKitButton theme="retro" />
				</div>
				<div className="gridItem">
					<p>theme: soft</p>
					<ConnectKitButton theme="soft" />
				</div>
				<div className="gridItem">
					<p>theme: minimal</p>
					<ConnectKitButton theme="minimal" />
				</div>
				<div className="gridItem">
					<p>theme: rounded</p>
					<ConnectKitButton theme="rounded" />
				</div>
				<div className="gridItem">
					<p>theme: midnight</p>
					<ConnectKitButton theme="midnight" />
				</div>
			</div>
		</div>
	);
}

export default App;
