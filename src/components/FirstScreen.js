import React from 'react';
import Header from "./Header";
import {Row} from "react-bootstrap";
import Tracker from "./FirstScreenPages/Tracker";
import ExpenseGraph from "./FirstScreenPages/ExpenseGraph";
import CreditLimit from "./FirstScreenPages/CreditLimit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardList from "./SecondScreenPages/CardList";
import './firstScreen.scss';
import './FirstScreenPages/tracker.scss';
import PopularOperation from "./SecondScreenPages/PopularOperation";
import Layout from "./Layouts/layout";

function FirstScreen(){
    return(
        <Layout>
            <div className="page-header text-center">
                <h3><strong>Total Balance</strong></h3>
                <h2>$13,250</h2>
            </div>
            <div className="tracker-tabs">
                <Tracker/>
            </div>
            <div className="credit-limit-card">
                <CreditLimit/>
            </div>

        </Layout>
    )
}

export default FirstScreen