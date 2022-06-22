/*
    서버에서 가지고 있는 데이터
*/

let userList = [
    {
        usercode: 20220001,
        username: "joohong1",
        password: "1234",
        name: "전주홍",
        email: "izx43@naver.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "naver"
    },
    {
        usercode: 20220002,
        username: "junil1",
        password: "1234",
        name: "김준일",
        email: "aaaa@naver.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "naver"
    },
    {
        usercode: 20220003,
        username: "junil2",
        password: "1234",
        name: "김준이",
        email: "bbbb@gmail.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "google"
    },
    {
        usercode: 20220004,
        username: "junil3",
        password: "1234",
        name: "김준삼",
        email: "cccc@kakao.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "kakao"
    }
];


/*
    클라이언트
*/

const userListLoadBtn = document.querySelector('.user-list-load-btn');
const userTableList = document.querySelector('.user-table-list');

userListLoadBtn.onclick = () => {
    let userJSON = JSON.stringify(userList);
    let userListObj = JSON.parse(userJSON);

    userListObj.forEach(user => {
        userTableList.innerHTML += `
            <tr>
                <td>${user.usercode}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role.join(", ")}</td>
                <td>${user.provider}</td>
            </tr>
        `;
    });

};