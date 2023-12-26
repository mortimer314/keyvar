export function localStorageChangeTheme() {
    document.documentElement.classList.toggle('dark')

    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', "dark")
    } else {
        localStorage.setItem('theme', "light")

    }
}


export function localStorageChangeDirection() {
    // document.documentElement.classList.toggle('rtl')

    // console.log("dir", document.documentElement.dir)
    if (document.documentElement.dir === "rtl") {
        localStorage.setItem('dir', "ltr")
        document.documentElement.dir = "ltr"

    } else {
        localStorage.setItem('dir', "rtl")
        document.documentElement.dir = "rtl"
    }
}

export function localStorageChangeNavigation(value) {
    localStorage.setItem('navigation', value)

}

export function localStorageChangeVerticalNavbarTheme(value) {
    localStorage.setItem('verticalNavbarTheme', value)
}
export function localStorageChangeHorizentalNavbarTheme(value) {
    localStorage.setItem('horizentalNavbarTheme', value)
}
export function localStorageChangeHorizentalNavbarShape(value) {
    localStorage.setItem('horizentalNavbarShape', value)
}

