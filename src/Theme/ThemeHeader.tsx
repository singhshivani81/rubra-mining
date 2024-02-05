import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ABOUT_HOME_URI, HOME_URI, PRODUCTS_SERVICES_URI } from '../Constants';
import AboutUs from '../Content/AboutUs';
import ProductsServices from '../Content/ProductsServices';
import GoalGuidingPrinciples from '../Content/GoalGuidingPrinciples';

const ThemeHeader = (props: any) => {
    return (<>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path={HOME_URI} element={<GoalGuidingPrinciples screen={props.screen} />} />
            <Route path={ABOUT_HOME_URI} element={<AboutUs   screen={props.screen}/>} />
            <Route path={PRODUCTS_SERVICES_URI} element={<ProductsServices  screen={props.screen}/> } />
        </Routes>
    </>);
}

export default ThemeHeader;