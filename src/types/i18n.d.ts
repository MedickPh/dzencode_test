export interface LocaleMessages {
    [key: string]: string | { [key: string]: LocaleMessages }
}

export const defaultLocale: string
export const languages: Record<string, LocaleMessages>
