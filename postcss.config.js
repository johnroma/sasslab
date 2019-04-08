module.exports = ctx => ({
	map: ctx.options.map,
	parser: ctx.file.extname === '.scss' ? 'css' : false,
	// plugins: {
	// 	'postcss-import': {
	// 		root: ctx.file.dirname
	// 	},
	// 	cssnano: ctx.env === 'production' ? {} : false
	// },
	plugins: [
		require('autoprefixer')({
			browsers: '> 5%'
		})
	]
})