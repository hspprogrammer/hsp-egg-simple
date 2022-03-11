/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.keys = appInfo.name + '_1646647028874_7198';
  config.middleware = [];

  config.mysql ={
    client: {
      host: 'hspprogrammer.tpddns.cn',
      // 端口号
      port: '13306',
      // 用户名
      user: 'qywx',
      // 密码
      password: 'hspadmin',
      // 数据库名
      database: 'qywx_clock',
    },
  }
  config.sequelize = {
    dialect: 'mysql',
    host: 'hspprogrammer.tpddns.cn',
    username: 'qywx',
    password: 'hspadmin',
    port: 13306,
    database: 'qywx_clock',
  };
  config.validate = {
    // 配置参数校验器，基于parameter
    convert: true, // 对参数可以使用 convertType 规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
    widelyUndefined: true
  }
  config.redis = {
    client: {
      port: 16379,          // Redis port
      host: 'hspprogrammer.tpddns.cn',   // Redis host
      password: "hspAdmin",
      db: 1,
    },
  }
  const userConfig = {
    // myAppName: 'egg',
    qnConfig:{
      accessKey:"iiwyLaeAWLZnU313VAxhB9jXG15XIU7qgTjjNL1C",
      secretKey:"8EhVmEGcB56cDIln26TqFhvLCpippzACAvEkglMR",
      bucket:"hsp-dev-space", //空间名
      baseUrl:"http://qndevcdn.bluepeng.club/"
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
