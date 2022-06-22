let userData = {
    "code": 1,
    "msg": "유저정보 로드 성공",
    "data": {
        "usercode": 202206021,
        "username": "joohong",
        "password": "1234",
        "name": "전주홍",
        "email": "izx43@naver.com",
        "role": ["ROLE_ADMIN", "ROLE_USER"],
        "provider": "naver"
    }
}

let jsonData = JSON.stringify(userData);

console.log(jsonData);