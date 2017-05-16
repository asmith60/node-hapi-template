//Config file to store and test env variables for components
module.exports = {
    getConnection: function () {
        return {
            host: '0.0.0.0',
            port: parseInt(process.env.PORT) || 8000
        };
    }
};
