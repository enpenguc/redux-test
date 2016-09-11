// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

// const mock = {};
//
// require('fs').readdirSync(require('path').join(__dirname + '/mock'))
//   .forEach(function(file) {
//     Object.assign(mock, require('./mock/' + file));
//   });
//
// module.exports = mock;
module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
};
