import React from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../actions';
import { LOCALES } from '../../i18n';
import { StoreState } from '../../reducers';

interface LocalesButtonsProps {
  changeLanguage: typeof changeLanguage;
  isOver?: boolean;
  language: LOCALES;
}
type LocalesButtonsState = {
  selectedOption: string;
};

export class _LocalesButtons extends React.Component<
  LocalesButtonsProps,
  LocalesButtonsState
> {
  themeHandler(locale: LOCALES) {
    this.props.changeLanguage(locale);
  }

  render() {
    return (
      <div
        className="btn-group btn-group-toggle locales-buttons"
        data-toggle="buttons"
      >
        <label
          className={`btn ${
            this.props.language === LOCALES.pt_BR ? 'active' : ''
          }`}
          onClick={() => this.themeHandler(LOCALES.pt_BR)}
        >
          <input type="radio" name="options" id="pt-br" /> BR
        </label>
        <label
          className={`btn  ${
            this.props.language === LOCALES.en_US ? 'active' : ''
          }`}
          onClick={() => this.themeHandler(LOCALES.en_US)}
        >
          <input type="radio" name="options" id="en-us" /> US
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { language: state.languages.language };
};

export const LocalesButtons = connect(mapStateToProps, { changeLanguage })(
  _LocalesButtons
);
