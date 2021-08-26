//App.js로 연결할 커스텀 컴포넌트
import React from "react";

//컴포넌트의 이름은 파일의 이름이자 함수의 이름이다.
//return 안에 들어가는 htmml 코드를 jsx(javascript xsm)이라 한다.
//만들어진 컴포넌트는 export 명령으로 다른 파일로 전달할 수 있게 한다.
//컴포넌트의 jsx는 최상위 태그 하나로 감싸야 한다.
// <> </> 형태로 감싸는 것을 fragment라 한다.
const FirstComponent01 = () => {
  return (
    <>
      <h1>My First Component</h1>
    </>
    //괄호 안은 형제태그 쓰면 안 됨, 쓸 꺼면 다른 div를 만들어 작성하기
  );
};

export default FirstComponent01;
