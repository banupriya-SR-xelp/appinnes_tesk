import React, { Component } from "react";
import styles from "./Login.module.css";
export default class Dasboard extends Component {
    componentDidMount=()=>{
        this.props.getDashboard()
    }
  render() {
    return (
      <div className={styles.base}>
        {this.props.userData &&
          this.props.userData.user &&
          this.props.userData.user.map(val => {
            return (<div className={styles.wrapper}><div className={styles.name}>{val.name}</div>
                <div className={styles.name}>{val.age}</div>
                <div className={styles.name}>{val.gender}</div>
                <div className={styles.name}>{val.email}</div>
                <div className={styles.name}>{val.phoneNo}</div>
                </div>)
          })}
      </div>
    );
  }
}
