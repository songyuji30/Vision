import { render } from "@testing-library/react";
import React, { ReactElement, ReactHTMLElement, useState } from "react";

export default function Home() {

  const [count, setCount] = useState<number>(0);

  function plus() {
    setCount(count => count +1);
  }

  function minus() {
    if(count == 0) return alert('0 미만으로 감소시킬 수 없습니다.');
    setCount(count => count -1);
  }

  return (
    <>
      <h3>홈 화면입니다.</h3>

      <hr />

      <h4> {count} </h4>
      <Button clickE={plus} name="+1"/>
      <Button clickE={minus} name="-1"/>
    </>
  );
}

interface IBtn {
  name: string;
  clickE: () => void;
}

const Button : React.FC<IBtn> = (data) => {
  return (
    <button onClick={data.clickE}> { data.name } </button>
  );
}
