import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production...'.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Warmings log: '.bold.yellow);
        jsonStats.warmings.map(warning => console.log(warning.yellow));
    }
    console.log(`Webpack stats: ${stats}`);

    console.log('Application compiled successfuly'.green);
    return 0;
});