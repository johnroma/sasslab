module.exports = ctx => ({
	//map: ctx.options.map,
	parser: ctx.file.extname === '.scss' ? 'css' : false,
	// plugins: {
	// 	'postcss-import': {
	// 		root: ctx.file.dirname
	// 	},
	// 	cssnano: ctx.env === 'production' ? {} : false
	// },
	plugins: [
		// require('postcss-import'),
		require('autoprefixer')({
			//browsers: '> 5%'
			browsers: [">0.5%",
				"not ie 11",
				"not op_mini all"
			]
		}),
		require('cssnano')({
			preset: ['default', {
				normalizeWhitespace: false
			}]
		}),
		// require("css-mqpacker")({
		// 	sort: function (a, b) {
		// 		return a.localeCompare(b);
		// 	}
		// })

		//	require('postcss-nested')
	]
})