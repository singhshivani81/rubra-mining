import React from 'react';
import logo from './rubra_logo.png';
import linkedInLogo from './linkedin.svg';
import linkedinWhite from './linkw.svg';
import { Context as ResponsiveContext } from 'react-responsive'
import './App.css';
import Footer from './Theme/Footer';
import Header from './Theme/Header';
import { useMediaQuery } from 'react-responsive';
import GoalGuidingPrinciples from './Content/GoalGuidingPrinciples';
import OfferingsSupport from './Content/OfferingsSupport';
import ThemeHeader from './Theme/ThemeHeader';
import { LAPTOP, MOBILE } from './Constants';

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  return (
    <>
      {isDesktopOrLaptop ? <div>
        <div><Header logo={logo} linkedInLogo={linkedInLogo} /></div>
        <div className="App">
          <ThemeHeader screen={LAPTOP} />
        </div>
        {/*  <div className="App-footer"><Footer logo={logo} rubra={rubra} linkedinWhite={linkedinWhite} /></div> */}</div>
        : <ResponsiveContext.Provider value={{ width: 300 }}>
        <div className="App">
       <ThemeHeader screen={MOBILE}/>
        </div>
        </ResponsiveContext.Provider>};
    </>
  );
}

export default App;
