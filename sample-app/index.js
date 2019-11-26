const SimpleNodeLogger = require('simple-node-logger');
const opts = {
  timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

(function repeatMe() {
  setTimeout(() => {
    log.info('I am here, it works');
    repeatMe();
  }, 1000)
})();
