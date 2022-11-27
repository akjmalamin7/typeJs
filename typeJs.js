let getAnimatedElement = document.querySelector("#text span");
const typeText = ["Akjm Al-Amin", "a coder","a programmer","a developer","an engineer"];
let j = 0, init = 0, speed = 80;
let animatedText = "";
const typeJsMadByAkjm = () => {
    if (init < typeText[j].length) {
        animatedText += typeText[j][init];
        getAnimatedElement.textContent = animatedText;
        init++;
        setTimeout(typeJsMadByAkjm, speed);
    } else {
        setTimeout(() => {
            animatedText = "";
            getAnimatedElement.textContent = "";
            init = 0;
            j++;
            if (j >= typeText.length) {
                j = 0;
            }
            setTimeout(typeJsMadByAkjm, speed);
        }, 1000);
    }
};
typeJsMadByAkjm();