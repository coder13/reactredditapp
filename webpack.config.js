var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.js',
    out: 'public',
    hostname: '0.0.0.0',
    isDev: (process.env.NODE_ENV !== 'production')
});
