const themeSwitcher = document.getElementById('theme-switcher')
const lightButton = themeSwitcher.querySelector(`[data-theme="light"]`)
const darkButton = themeSwitcher.querySelector(`[data-theme="dark"]`)

let theme = 'light'

const savedTheme = localStorage.getItem('theme')

if (savedTheme !== null) {
    theme = savedTheme
}

const applyTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)

    lightButton.classList.toggle('header__theme-button--active', theme === 'light')
    darkButton.classList.toggle('header__theme-button--active', theme === 'dark')
}

applyTheme(theme)

themeSwitcher.addEventListener('click', (event) => {
    const button = event.target.closest('button')

    if (!button || !button.dataset.theme) return

    theme = button.dataset.theme

    applyTheme(theme)
})