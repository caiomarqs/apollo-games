import { Dispatch } from 'redux'

enum NavBarThemes {
    DARK = 'DARK',
    WHITE = 'WHITE',
}

interface Theme {
    navTheme:  NavBarThemes
}

export const SetInitialTheme = () => {

}