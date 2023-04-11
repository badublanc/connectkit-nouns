import type { Types } from 'connectkit';

const baseUrl = 'https://api.cloudnouns.com/v2/nouns/pfp?ref=connectkit&text=';

const NounsAvatar = ({
	address,
	ensImage,
	ensName,
	size,
	radius,
}: Types.CustomAvatarProps) => {
	const name = ensName ?? address;

	return (
		<img
			src={ensImage ?? baseUrl + name}
			alt={name}
			style={{
				borderRadius: radius,
				width: size,
				height: size,
			}}
		/>
	);
};

export default NounsAvatar;
