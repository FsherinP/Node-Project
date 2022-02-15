// module.exports = {
//     app: [{
//         name: 'sample-node-project',
//         script: 'app.js',
         
//         autorestart: true,
//         watch: true,
//         max_memory_restart: 'IG',
//         error_file : "./logs/err.log",

//         env: {
//             NODE_ENV: 'development',
//             instances: 1
//         }
//     }]
// }

module.exports = {
    apps : [{
      name: 'system-console-backend',
      script: 'app.js',

      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
    //   error_file : "./logs/err.log",

      env: {
        NODE_ENV: 'development',      //pm2 start ecosystem.config.js --env development
        instances: 1,
      },
    }],

};