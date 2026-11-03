// This is a template for the app builder. It is used to create a new app, please don't implement any app logic in this file.

import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import App from './App';

const INITIAL_APP_HEIGHT = '550px';
const INITIAL_APP_WIDTH = '100%';
const COPY_SUCCESS_TIMEOUT = 2000;

// Get colorScheme even before ZAF is initialized
const queryParams = new URLSearchParams(location.search);
const colorScheme = queryParams.get('colorScheme');

const AppWrapper = styled.div`
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
  min-height: 100vh;
`;

const ErrorContainer = styled.div`
  font-size: 16px;
  display: grid;
  height: 100vh;
  width: 100vw;
  place-content: center;
  padding: 20px;
  text-align: center;
`;

const ErrorTitle = styled.h4`
  margin-bottom: 8px;
  color: #d93f4c;
`;

const ErrorMessage = styled.p`
  margin-bottom: 16px;
  color: #49545c;
  max-width: 500px;
`;

const ErrorPre = styled.pre`
  background: #f8f9f9;
  padding: 16px;
  border-radius: 4px;
  max-width: 600px;
  overflow: auto;
  text-align: left;
  white-space: pre-wrap;
`;

const CopyButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border: 1px solid #c1c3c5;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f8f9f9;
    border-color: #68737d;
  }
`;

const CopiedText = styled.span`
  color: #1f73b7;
`;

const IconText = styled.span`
  font-size: 14px;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      copied: false 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    const rawStack = error.stack || '';
    const errorStack = (window.__resolveStack ? window.__resolveStack(rawStack) : rawStack);
    window.parent.postMessage({
      type: 'iframe-error',
      error: error.toString(),
      stack: errorStack,
      errorInfo: JSON.stringify(errorInfo)
    }, '*');
  }

  copyErrorToClipboard = () => {
    const errorMessage = this.state.error?.toString() || 'Unknown error';
    const rawStack = this.state.error?.stack || '';
    const errorStack = (window.__resolveStack ? window.__resolveStack(rawStack) : rawStack);
    const errorText = errorStack || errorMessage;
    navigator.clipboard.writeText(errorText);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, COPY_SUCCESS_TIMEOUT);
  }

  render() {
    if (this.state.hasError) {
      const rawStack = this.state.error?.stack || this.state.error?.toString() || 'Unknown error';
      const errorStack = (window.__resolveStack ? window.__resolveStack(rawStack) : rawStack);
      return (
        <ErrorContainer>
            <ErrorTitle>
              An error occurred in your application
            </ErrorTitle>
            <ErrorMessage>
              To resolve this issue, please copy the error message below and paste it back into the app builder.
              App Builder will automatically attempt to fix this issue.
            </ErrorMessage>
            <ErrorPre>
              {errorStack}
            </ErrorPre>
            <div>
                <CopyButton
              onClick={this.copyErrorToClipboard}
              title="Click to copy error message"
            >
              {this.state.copied ? (
                <>
                  <CopiedText>Copied!</CopiedText>
                  <IconText>✓</IconText>
                </>
              ) : (
                <>
                  Copy Error
                  <IconText>📋</IconText>
                </>
              )}
            </CopyButton>
            </div>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

const Entry = () => {
  // default to light mode
  const [base, setBase] = useState(colorScheme || 'light');

  useEffect(() => {
    // Resize the app to proper dimensions
    window.zafClient.invoke('resize', { height: INITIAL_APP_HEIGHT, width: INITIAL_APP_WIDTH });

    // Listen for color scheme changes
    const client = window.zafClient;
    client.on('colorScheme.changed', (colorScheme) => setBase(colorScheme));
  }, []);

  const themeObject = {
    ...DEFAULT_THEME,
    colors: { ...DEFAULT_THEME.colors, base },
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={themeObject}>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

try {
  createRoot(document.getElementById('root')).render(<Entry />);
} catch (error) {
  console.log({error});
  const rawStack = error.stack || '';
  window.parent.postMessage({
    type: 'iframe-error',
    error: error.toString(),
    stack: (window.__resolveStack ? window.__resolveStack(rawStack) : rawStack),
  }, '*');
}

export default Entry;
