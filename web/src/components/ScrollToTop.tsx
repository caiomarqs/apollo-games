import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ScrollToTopProps extends RouteComponentProps {}

class _ScrollToTop extends React.Component<ScrollToTopProps> {
  componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export const ScrollToTop = withRouter(_ScrollToTop);
