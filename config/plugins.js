module.exports = [{
  register: require('inert')
}, {
  register: require('vision')
}, {
  register: require('hapi-swagger'),
    options: {
      'info': {
        'title': 'API Documentation',
        'description': 'Description goes here',
        'version': '1.0.0',
      },
      schemes: ['http']
    }
}];
