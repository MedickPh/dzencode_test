export const isDateChanged = () => {
    const isDateChanged = localStorage.getItem('is_date_changed')
    if (isDateChanged) {
        return
    }
    localStorage.setItem('is_date_changed', 'false')
}
