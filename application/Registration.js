const Registration = () => {
    let value = [];
    return {
        registration(handlers) {
            value = value.concat(handlers);
        },
        handlers() {
            return value;
        }
  };
};

module.exports = Registration;