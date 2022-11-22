const sources = [
	{ key: 'Website', value: 'taoufiqjmari.com' },
	{
		key: 'Email',
		value: 'jmaritaoufiq@gmail.com',
	},
	{
		key: 'LinkedIn',
		value: 'https://www.linkedin.com/in/taoufiqjmari',
	},
	{
		key: 'Github',
		value: 'https://github.com/taoufiqjmari',
	},
];

const connect = (source) => {
	if (source) {
		for (const el of sources) {
			if (
				el.key.toLowerCase() == source.toLowerCase()
			)
				console.log(
					`${el.key}:`.cyan,
					`${el.value}`
				);
		}
	} else {
		sources.forEach((el) => {
			console.log(`${el.key}:`.cyan, `${el.value}`);
		});
	}
};

module.exports = connect;
