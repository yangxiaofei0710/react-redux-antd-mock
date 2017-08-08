import Mock from "mockjs";

Mock.mock("setUp.json",{ //拦截的ajax请求接口
//    数据模板
    "list|10": [{
        'name': "@NAME",
        'age|+1': 20,
        'email': '@EMAIL'
    }]
})
