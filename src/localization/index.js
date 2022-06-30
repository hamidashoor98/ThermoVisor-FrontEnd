
import fa_ir from './fa'
import en_ir from './en'

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "fa"
export { lang }
const direction = {

    fa: 'rtl',
    en: 'ltr',

}

function getDirection() {

    return direction[lang]

}

export { getDirection }


const translate = {
    fa: fa_ir,

    en: en_ir

}

function getTranslate() {
    return translate[lang]
}

export { getTranslate }


function changeLanguage(newLang) {
    if (newLang === lang) {
        return
    }
    localStorage.setItem('lang', newLang)
    window.location.reload()
}
export { changeLanguage }