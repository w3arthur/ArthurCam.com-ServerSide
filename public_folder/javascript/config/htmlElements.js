// tag ids elements
    // event shortcut functions
export const getElement = (id) => { if(typeof id === 'string') return document.getElementById(id); else if(typeof id === 'object') return id; };
export const clickEvent = (id, externalFunction ) => { if(typeof id == 'string') return getElement(id).addEventListener('click', (e) => { externalFunction(e) } );  else if(typeof id === 'object') return id.addEventListener('click', (e) => { externalFunction(e) } ); };
//export const changeEvent = (element, externalFunction ) => { return getElement(element).addEventListener('change', (e)=>{ externalFunction(e) } ); }
export const finishLoaded = (callback) => { document.addEventListener('DOMContentLoaded', () =>  { callback(); } );};
export const submitPrevent = (e) => { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); }; //only for type="submit" issue

export const tags = {
    youtube: getElement('youtube')
    , video: getElement('video')
    , led: getElement('led')
    , lamp: getElement('lamp')
    , send_text: getElement('send_text')
    , send_text_button: getElement('send_text_button')
    , send_iot_text: getElement('send_iot_text')
    , send_iot_text_button: getElement('send_iot_text_button')
    , reload: getElement('reload')
    , send_comment: getElement('send_comment')
    , send_comment_button: getElement('send_comment_button')
    , documentation: getElement('documentation')
    , feedbackAreaLight_element: getElement('feedbackAreaLight')
    , feedbackAreaText_element: getElement('feedbackAreaText')
    , led_iot: getElement('led_iot')
    , lamp_iot: getElement('lamp_iot')
    , feedbackAreaIOTLight_element: getElement('feedbackAreaIOTLight')
    , feedbackAreaIOTText_element: getElement('feedbackAreaIOTText')
    , feedbackAreaComment_element: getElement('feedbackAreaComment')
    , displayedText: getElement('displayedText')
    , displayedIOTText: getElement('displayedIOTText')
    , comments: getElement('comments')
};
