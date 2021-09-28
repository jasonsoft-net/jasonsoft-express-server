/**
 * FilePath: /jasonsoft-express-server/bin/start.js
 * * 项目入口文件，初始相关配置信息
 * Added by Jason.Song (成长的小猪) on 2021/02/01
 * CSDN: https://blog.csdn.net/jasonsong2008
 * GitHub: https://github.com/jasonsoft-net
 * Organizations: https://github.com/jasonsoft
 */

/**
 * * 支持ES6/ES2015及更高版本的新特性和语法
 * ! 注意：这个必须放在当前入口文件的最上面
 * Added by Jason.Song (成长的小猪) on 2021/02/01 20:16:17
 */
// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register');

/**
 * * 导入 app 初始化相关服务和注入相关中间件
 * Added by Jason.Song (成长的小猪) on 2021/02/01 20:21:01
 */
module.exports = require('../app');
