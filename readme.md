# connectkit-nouns

Use Nouns as avatars in your ConnectKit project. Generates a fallback Noun avatar if a wallet doesn't have an ENS image. This package is a wrapper around the [CLOUDNOUNS API](https://docs.cloudnouns.com).

## Usage

First, set up ConnectKit in your project. [Instructions for getting started](https://docs.family.co/connectkit/getting-started). Then, install `connectkit-nouns` with your preferred package manager...

```bash
# npm
npm i connectkit-nouns

# yarn
yarn add connectkit-nouns

# pnpm
pnpm i connectkit-nouns
```

... and update the `ConnectKitProvider`.

```tsx
import NounAvatars from 'connectkit-nouns';

// ...

<WagmiConfig client={client}>
  <ConnectKitProvider options={{ customAvatar: NounAvatars }}>
    <YourApp />
  </ConnectKitProvider>
</WagmiConfig>;
```

That's it! Now, all `<Avatar />` components within your app will use Noun avatars as a fallback. See a demo React app on [CodeSandbox](https://codesandbox.io/p/sandbox/thirsty-brook-14o842?file=%2Fsrc%2Fmain.tsx).
