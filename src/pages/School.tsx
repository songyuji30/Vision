import { render } from "@testing-library/react";
import React from "react";
import styles from "./School.module.css";

const schoolInfo : SchoolInfo = {
  name: '전주비전대학교',
  subject : '컴퓨터공학과',
  students : [
    { id: 20200001 , name: '제니', age: 20, address: { city: '전주', zipcode: 12345}},
    { id: 20200002 , name: '지수', age: 18, address: { city: '대전', zipcode: 45645}},
    { id: 20200003 , name: '짱구', age: 25, address: { city: '서울', zipcode: 85849}},
    { id: 20200004 , name: '짱아', age: 23, address: { city: '인천', zipcode: 26451}},
    { id: 20200005 , name: '철수', age: 37, address: { city: '전주', zipcode: 12345}},
  ]
}

interface SchoolInfo {
  name: string;
  subject: string;
  students: Student[]; 
}

interface Student {
  id: number;
  name: string;
  age: number;
  address: Address;
}

interface Address {
  city: string;
  zipcode: number;
}


interface IState {
  props : Address | null ;
}

export default class School extends React.Component<{} , IState> {

  state : IState = {
    props: null
  }

  public render() {
    return (
      <>
        <h3>학교 정보입니다.</h3>
        <div>학교명 : {schoolInfo.name}</div>
        <div>전공 : {schoolInfo.subject}</div>
        <hr />

        <div className={styles.left_content}>
          <h4>학생 목록입니다.</h4>
          <ul>
            {schoolInfo.students.map( (stu: Student) => 
              <li key={stu.id}> 
                <span className={styles.cursor} onClick={() => this.setState( {props : stu.address} )}>{stu.name}</span>
                <div> 나이 : {stu.age} </div>
                <br/>
              </li>
            )}
          </ul>
          <div className={styles.detail}>
            <DetailInfo {...this.state}/>
          </div>
        </div>
      </>
    );
  }
}


const DetailInfo : React.FC<IState> = (props) => {

  if(props.props === null) return <div>사용자를 선택하세요.</div>
  return (
    <span>
       선택한 사람의 주소?
       <br />
        {props.props.city} ( {props.props.zipcode} )
    </span>
  );
}