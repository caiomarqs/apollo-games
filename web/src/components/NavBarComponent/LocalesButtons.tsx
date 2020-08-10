import React from 'react'
import { connect } from 'react-redux'

import { changeLanguage } from '../../actions'
import { LOCALES } from '../../i18n'

type LocalesButtonsProps = {
    changeLanguage: typeof changeLanguage;
}
type LocalesButtonsState = {
    selectedOption: string
}

export class _LocalesButtons extends React.Component<LocalesButtonsProps, LocalesButtonsState> {

    themeHandler(locale: LOCALES) {
        this.props.changeLanguage(locale)
    }

    render() {
        return (
            <div className="btn-group btn-group-toggle locales-buttons" data-toggle="buttons">
                <label className="btn active" onClick={() => this.themeHandler(LOCALES.pt_BR)}>
                    <input type="radio" name="options" id="pt-br" checked={true}/> BR
                </label>
                <label className="btn" onClick={() => this.themeHandler(LOCALES.en_US)}>
                    <input type="radio" name="options" id="en-us" checked={false} /> US
                </label>
            </div>
        )
    }
}

export const LocalesButtons = connect(null, { changeLanguage })(_LocalesButtons);