window.addEventListener('wheel', scrollChangeText);

let wheelCounter = 0;

function scrollChangeText(e) {
    wheelCounter += 1;
    if(wheelCounter === 1) {
        document.getElementById('content').innerHTML = "My Name is Nielsen Prambudi";
    }
    if(wheelCounter === 2) {
        document.getElementById('content').innerHTML = "I have many experienced as Front end website or android mobile developer using React Js or React Native";
    }
    if(wheelCounter === 3) {
        document.getElementById('content').innerHTML = "Please Contact Me!";
    }
}