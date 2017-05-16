//Root (home) controller

module.exports = {
    index: {
        description: 'This is the root of all the things.',
        handler: function (request, reply) {
            reply({
                test: 'success!'
            });
        }
    }
};
