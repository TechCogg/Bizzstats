import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { INavigate, State, Url } from 'types/index';

interface WithNavigationProps {
  navigate?: INavigate;
  children?: ReactNode;
}
const withNavigation = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithNavigationProps>,
) => {
  return (props: P) => {
    const navigate = useNavigate();
    const redirect = (url: Url | string | number, state?: State) => {
      if (url === -1) {
        // Handle going back
        navigate(-1);
      } else if (typeof url === 'string') {
        // Handle navigating to a specific URL with state
        navigate(url, { state });
      } else if (typeof url === 'object' && 'url' in url) {
        // Ensure that url has a 'url' property
        navigate(url.url);
      }
    };
    return <WrappedComponent {...props} navigate={redirect} />;
  };
};

export default withNavigation;
