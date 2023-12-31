const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

let words = ['Awesome', 'fun', 'cool', 'famous', 'weird🫥'];
const typingDelay = 200;
const erasingDelay =200;

//delay between current and next text
const nextLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length){
        setTimeout(type, nextLetterDelay);
    }
});

function type () {
    if (charIndex < words[index].length){
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        setTimeout(erase, nextLetterDelay);
    }

    function erase (){
        if (charIndex > 0) {
            typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay)
        } else{
            index++
            if (index >= words.length){
                index = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }
}