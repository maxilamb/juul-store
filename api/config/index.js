const ENV = process.env.NODE_ENV;

module.exports = ENV === 'development' ? require('./dev.json') : require('./prod.json');
