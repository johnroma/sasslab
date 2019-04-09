var svgo = require('postcss-svgo');
var doiuse = require('doiuse');
var autoprefixer= require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
var cssstats = require('postcss-cssstats');
var postcssNesting = require('postcss-nesting');
var cssbyebye = require('css-byebye');

var opts = {
	plugins: [{
		removeDoctype: false
	}, {
		removeComments: false
	}, {
		cleanupNumericValues: {
			floatPrecision: 2
		}
	}, {
		convertColors: {
			names2hex: false,
			rgb2hex: false
		}
	}]
};



module.exports = ({file, options, env}) => {

	var rulesToRemove = [/.*\.responsive.*/, '.responsive'];
	return(
		{
			//map: options.map,
			parser: file.extname === '.scss' ? 'css' : false,

			plugins: [
				
				postcssNesting(/* pluginOptions */),
				cssnano({
					preset: ['default', {
						normalizeWhitespace: false,
						discardOverridden: false,
						normalizeCharset: false,
						mergeRules: false,
						orderedValues: true
					}]
				}),
				// purgecss({
				// 	content: ['./**/*.html']
				//   }),
				autoprefixer({
					//browsers: '> 5%'
					browsers: ['>0.5%',
						'not ie 11',
						'not op_mini all'
					]
				}),
				require('css-mqpacker')(),
				cssbyebye({ rulesToRemove: rulesToRemove, map: true }),
				// svgo(opts)()
		
				// doiuse({
				// 	browsers: [
				// 	  'ie >= 11',
				// 	  '> 1%',
				// 	  'not op_mini all'
				// 	],
				// 	ignore: ['rem'], // an optional array of features to ignore
				// 	ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
				// 	onFeatureUsage: function (usageInfo) {
				// 	  console.log(usageInfo.message);
				// 	}
				//   })
				// require("css-mqpacker")({
				// 	sort: function (a, b) {
				// 		return a.localeCompare(b);
				// 	}
				// })

				//	require('postcss-nested')
			]
		});
};