const {Diary} = require('../db');


//找到所有日记
const getAllDiary = async( ctx ) => {
    let res = await Diary.find({}).sort({'createTime':-1});
    ctx.body = {
        code: res ? 0 : 1,
        res
    };
}


// 添加日记
const addDiary = async( ctx ) => {

    const {content, weather} = ctx.request.body
    if(!content){
        ctx.body = {
            code: 1,
            res: 'content不存在'
        }
        return false
    }

    if(!weather){
        ctx.body = {
            code: 1,
            res: 'weather不存在'
        }
        return false
    }



    const res = await Diary.create({
        content,
        weather,
        createTime: new Date(),
        updateTime: new Date()
    })

    ctx.body = {
        code: res ? 0 : 1,
        res
    };
}



module.exports = {
    getAllDiary,
    addDiary
}
