import Locale from '~/locales'

export const state = () => ({
    locales: Locale(),
    locale: Locale()[0]
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            // console.log(locale)
            state.locale = locale
        }
    }
}

export const getters = {
    isMobile: state => {
        if (process.client) {
            const flag = window.navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            )
            return flag != null && flag.length > 0
        }
    }
}
