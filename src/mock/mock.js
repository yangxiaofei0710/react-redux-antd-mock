import Mock from "mockjs";
const Random = Mock.Random;

Random.date();
Random.id();

Mock.mock("setUp.json",{ //拦截的ajax请求接口
//    数据模板
    "list|5-10": [{
        'name': "@NAME",
        'age|+1': 20,
        'email': '@EMAIL',
        "date": "@DATE",
        "id": "@ID"
    }]
})
