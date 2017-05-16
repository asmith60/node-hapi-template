//Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller namespace. https://github.com/troygoode/node-require-directory
const controllers = require('require-directory')(module, '../controllers');

module.exports = [{
    method: 'GET',
    path: '/',
    config: controllers.root.index
}];
