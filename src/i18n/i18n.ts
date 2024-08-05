import Ru from './Ru.json'
import Ua from './Ua.json'

type LocaleMessageValue = string | { [key: string]: LocaleMessageValue }

export type LocaleMessages = {
    [key: string]: LocaleMessageValue
}

export const languages: Record<string, LocaleMessages> = {
    Ru,
    Ua
}

export const defaultLocale: string = 'Ru'
