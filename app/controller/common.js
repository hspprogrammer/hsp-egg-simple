'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
    //上传图片
    async uploadImg() {
        const { ctx } = this;
        const res = await ctx.service.common.uploadImg();
        ctx.body = res;
    }
}

module.exports = CommonController;