import { render } from "@testing-library/react";
import React from "react";
import styles from './SideBar.module.css';
import {Link} from 'react-router-dom';

export default class SideBar extends React.Component {
  public render() {
    return (
        <div>
          <h2 className={styles.text_center}>사이드바</h2>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/school">학교</Link>
            </li>
          </ul>
        </div>
    );
  }
}