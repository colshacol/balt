const moduleResolverOptions = {
	root: ['./code/client/src'],
	alias: {
		_components: './code/client/src/components',
		_utilities: './code/client/src/utilities',
		_scenes: './code/client/src/scenes',
		_styles: './code/client/src/styles'
	}
}

const cssModulesOptions = {
	generateScopedName: '_[name]-[local]',
	context: '.${PWD}/code/client/src'
}

const classPropertiesOptions = {
	loose: true
}

module.exports = (api) => {
	api.cache(true);

	return {
		presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow'],
		plugins: [
			'@babel/plugin-proposal-decorators',
			['@babel/plugin-proposal-class-properties', classPropertiesOptions],
			'@babel/plugin-proposal-optional-chaining',
			'@babel/plugin-proposal-pipeline-operator',
			'@babel/plugin-proposal-function-bind',
			'@babel/plugin-proposal-numeric-separator',
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-proposal-do-expressions',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-function-sent',
			'@babel/plugin-proposal-throw-expressions',
			'@babel/plugin-proposal-object-rest-spread',
			'@babel/plugin-proposal-async-generator-functions',
			'@babel/plugin-proposal-optional-catch-binding',
			'@babel/plugin-proposal-unicode-property-regex',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-syntax-import-meta',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/plugin-proposal-logical-assignment-operators',
			'babel-plugin-jsx-control-statements',
			['babel-plugin-module-resolver', moduleResolverOptions],
			['babel-plugin-react-css-modules', cssModulesOptions],
			["babel-plugin-flow-runtime", {
				"assert": true,
				"annotate": true
			}]
		]
	}
}