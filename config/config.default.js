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
      host: '',
      // 端口号
      port: '3306',
      // 用户名
      user: '',
      // 密码
      password: '',
      // 数据库名
      database: '',
    },
  }
  config.sequelize = {
    dialect: '',
    host: '',
    username: '',
    password: '',
    port: 3306,
    database: '',
  };
  config.validate = {
    // 配置参数校验器，基于parameter
    convert: true, // 对参数可以使用 convertType 规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
    widelyUndefined: true
  }
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '',   // Redis host
      password: "",
      db: 0,
    },
  }
  const userConfig = {
    // myAppName: 'egg',
    qnConfig:{
      accessKey:"",
      secretKey:"",
      bucket:"", //空间名
      baseUrl:""
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
