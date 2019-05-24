import {XMLHttpRequest} from 'xmlhttprequest';

function getData(link) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            console.log(xhr.responseText);
            return xhr.responseText;
        }
    };
    xhr.timeout = 3000; // 3s

    xhr.ontimeout = () => {
        console.log('Bad connection on link: ' + link);
    }
}

getData('https://reqres.in/api/users/1');