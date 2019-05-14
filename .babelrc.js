module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-typescript',
		'@babel/preset-react',
	],
	plugins: [
		[
			"module-resolver",
			{
				root: [
					"./"
				],
				alias: {
					"@Components": "./src/Components",
					"@Interfaces": "./src/Interfaces",
					"@Assets": "./src/Assets",
				}
			}
		]
	]
};
