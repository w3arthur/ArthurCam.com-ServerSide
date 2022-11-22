import {getElement} from '../config/htmlElements.js';
import {configurations} from '../config/axios.js';

//feedback area
export function feedbackArea(element ,str, color = 'blue'){
    if(str === '') {    //api delay complete
        element.textContent = '';
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
        element.className = color;
        element.textContent = str;
        setTimeout( () => { feedbackArea(element ,''); }, configurations.FEEDBACK_SHOW_FOR_SEC * 1000);
    };
}

//delay functions
//add feedback area to delay
export function delayButton(buttonId, callback){
    const buttonElement = getElement(buttonId);
    buttonElement.disabled = true;
    setTimeout( () => {
        buttonElement.disabled = false;
        callback();
        if(configurations.RELOAD_PAGE_AFTER_DELAY_SEC != 0) //don't reload
            setTimeout( () => { location.reload(); }, configurations.RELOAD_PAGE_AFTER_DELAY_SEC * 1000);
    }, configurations.DELAY_SEC * 1000);
}

export function delayText(buttonId, textFieldId, callback){
    const buttonElement = getElement(buttonId);
    const textElement = getElement(textFieldId);
    buttonElement.disabled = true;
    textElement.disabled = true;
    setTimeout( () => {
        buttonElement.disabled = false;
        textElement.disabled = false;
        textElement.value = '';
        callback();
        if(configurations.RELOAD_PAGE_AFTER_DELAY_SEC != 0) //don't reload
            setTimeout( () => { location.reload(); }, configurations.RELOAD_PAGE_AFTER_DELAY_SEC * 1000);
    }, configurations.DELAY_SEC * 1000);
}

