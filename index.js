window.addEventListener('wheel', scrollChangeText);

let wheelCounter = 0;

function scrollChangeText(e) {
    wheelCounter += 1;
    let fadingTargetContent = document.getElementById('content');
    let fadingTargetIntro2 = document.getElementById('intro2');
    let fadingTargetSpec = document.getElementById('speciality');
    let fadingTargetContact = document.getElementById('contactme');
    
    if(wheelCounter === 1) {
        fadingTargetIntro2.style.opacity = 1;
        fadingTargetContent.style.opacity = 0;
    }
    if(wheelCounter === 2) {
        fadingTargetIntro2.style.opacity = 0;
        fadingTargetSpec.style.opacity = 1;
    }
    if(wheelCounter === 3) {
        fadingTargetSpec.style.opacity = 0;
        fadingTargetContact.style.opacity = 1;
    }
}