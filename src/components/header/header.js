import { renderLoader, clearLoader } from '../loader/loader.js'
import { renderError, clearError } from '../error/error.js'

const weatherForm = document.getElementById('weather-form')
const cityInput = weatherForm.elements.city

async function initHeader (handleSearch) {
    let isSubmitting = false

    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        if (isSubmitting) return
        
        const formData = new FormData(weatherForm)
        const cityName = formData.get('city')
        
        if (!cityName || cityName.trim() === '') return

        cityInput.blur()

        isSubmitting = true
        
        try {
            clearError()
            renderLoader()
            await handleSearch(cityName)
        } catch (error) {
            renderError(error.message)
            console.error(error)
        } finally {
            clearLoader()
            isSubmitting = false
        }
    })
}

export { initHeader }