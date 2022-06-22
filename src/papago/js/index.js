const brandLogo = document.querySelector('.brand-logo-border');
const converButton = document.querySelector('.article-footer button');
const textarea = document.querySelector('.article-body-textarea textarea');
const pre = document.querySelector('.article-body pre');
const linkButton = document.querySelector('.button-url button');
const inputUrl = document.querySelector('#web-url');



brandLogo.onclick = () => {
    // alert('로고 클릭되었음');
    // location.href = "https://papago.naver.com";  => 뒤로가기가 먹힌다.
    // location.replace("https://papago.naver.com");
    location.href = "file:///Users/junil/joohong/web-basic/src/papago/historyback.html";
}

converButton.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++) {
        if(inputUrl.value.includes(protocols[i])) {
            location.href = inputUrl.value;
            return;
        }
    }
    location.href = "https://" + inputUrl.value;
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13) {
        linkButton.click();
    }
}




