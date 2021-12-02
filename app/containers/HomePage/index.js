/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import useHorizontal from '@oberon-amsterdam/horizontal/hook';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import * as React from 'react';
import { useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header';
export default function HomePage() {
  // I'd prefer to use useRef, but we need a rerender to be triggered
  const [container, setContainer] = useState();
  if (isBrowser) {
    useHorizontal();
    console.log('anvesh');
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  return (
    <React.Fragment>
      <Header />

      <div
        className="container"
        ref={ref => {
          setContainer(ref);
        }}
      >
        <div
          className="block"
          id="start"
          style={{ backgroundColor: '#000000' }}
        >
          Landing Page
        </div>

        <div
          className="block"
          style={{ backgroundColor: '#f6d048', color: '#000100' }}
        >
          Services Page
        </div>

        <div
          className="block"
          style={{ backgroundColor: '#baa5ff', color: '#fff' }}
        >
          See react example
        </div>

        <div
          className="block"
          style={{
            backgroundColor: '#eb5e55',
            color: '#000100',
            textDecoration: 'none',
          }}
        >
          <a href="#start">Back to start</a>
        </div>
      </div>
    </React.Fragment>
  );
}
