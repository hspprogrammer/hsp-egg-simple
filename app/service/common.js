const Service = require('egg').Service;

class CommonService extends Service {
    //上传图片
    async uploadImg() {
        const {
            ctx
        } = this;
        const parts = ctx.multipart();
        let part = await parts();
        if (part != null) {
            if (part.length) {
                // 这是 busboy 的字段
                console.log('field: ' + part[0]);
                console.log('value: ' + part[1]);
                console.log('valueTruncated: ' + part[2]);
                console.log('fieldnameTruncated: ' + part[3]);
            } else {
                if (!part.filename) {
                    // 这时是用户没有选择文件就点击了上传(part 是 file stream，但是 part.filename 为空)
                    // 需要做出处理，例如给出错误提示消息
                    return {code:-1,msg:'请选择上传的图片'};
                }
                // part 是上传的文件流
                // console.log('field: ' + part.fieldname);
                // console.log('filename: ' + part.filename);
                // console.log('encoding: ' + part.encoding);
                // console.log('mime: ' + part.mime);
                let key = 'hanshanpeng' + new Date().getTime() + Math.floor(Math.random() * 100) + '.' + part.mime.toString().split('/')[1]
                // 文件处理，上传到云存储等等
                let result;
                try {
                    result = await this.app.upLoadimage(part, key);
                } catch (err) {
                    // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
                    await sendToWormhole(part);
                    throw err;
                }
                return result;
            }
        }
        
    }

}

module.exports = CommonService;