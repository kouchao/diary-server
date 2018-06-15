const User = require('../db').User;


//找到所有用户
const getAllUser = async( ctx ) => {
    let res = await User.find({});
    ctx.body = {
        code: res ? 0 : 1,
        res
    };
}


// 添加用户
const addUser = async( ctx ) => {
    let {body} = ctx.request
    if(!body.name){
        ctx.body = {
            code: 1,
            res: 'name不存在'
        }

        return false
    }

    const res = await User.create({
        name: body.name
    })

    ctx.body = {
        code: res ? 0 : 1,
        res
    };
}



module.exports = {
    getAllUser,
    addUser
}
