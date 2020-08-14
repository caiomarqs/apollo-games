import React from "react";
import { withRouter } from "react-router-dom";

interface ScrollToTopProps {
    location: any
}

class _ScrollToTop extends React.Component<ScrollToTopProps> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
           
        }
    }

    render() {
        return <React.Fragment />
    }
}

export const ScrollToTop = withRouter(_ScrollToTop)