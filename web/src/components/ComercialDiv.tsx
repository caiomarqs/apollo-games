import React from 'react'
import { FormattedMessage } from 'react-intl'

type ComercialDivProps = {
    tiemout: number;
}
type ComercialDivState = {
    hide: string,
    progressBarClass: string
}

let timer: NodeJS.Timeout

export class ComercialDiv extends React.Component<ComercialDivProps, ComercialDivState> {

    state = {
        hide: "",
        progressBarClass: ""
    }

    progressBarTranstition(timeInMili: number) {
        const timeInSeg = timeInMili / 1000
        return `width ${timeInSeg}s linear`
    }

    hideHandler() {
        this.setState({ hide: "comercialHiden" })
        setTimeout(() => this.setState({ hide: "comercialHide" }), 500) //Animation time in scss 
        clearTimeout(timer);
    }

    async componentDidMount() {
        timer = setTimeout(() => this.hideHandler(), this.props.tiemout) //Time that div dismount
        setTimeout(() => this.setState({ progressBarClass: "progressBarTransition" }), 1)
    }

    componentWillUnmount() {
        clearTimeout(timer);
    }

    render() {
        return (
            <div className={`comercialDiv ${this.state.hide} noselect`}>
                <div className="close-comercial" onClick={() => this.hideHandler()}>
                    <span className="close-x-45"></span>
                    <span className="close-x-135"></span>
                </div>
                <a className="comercialContent" href="https://forcaintrepida.com.br/" target="_blank" rel="noopener noreferrer">
                    <img src="https://forcaintrepida.com.br/images/INTZ_Logo_ForcaIntrepida_Black-p-500.png" alt="" />
                    <div className="comercial-infos">
                        <h6><FormattedMessage id="comercial.titulo"/></h6>
                        <p className="caption-font"><FormattedMessage id="comercial.desc"/></p>
                    </div>
                </a>
                <div className={`comercialTimeOut ${this.state.progressBarClass}`} style={{ transition: this.progressBarTranstition(this.props.tiemout) }}>
                </div>
            </div>
        )
    }

}