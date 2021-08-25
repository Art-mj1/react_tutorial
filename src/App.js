//import React from "react";

const arr = [1, 2, 3];
arr.map((a) => {
  return a;
});

//내가 만든 컴포넌트 > app.js > index.js >index.html(화면에 보여지는 문서)
//react는 페이지 전체가 바뀌는 방식이 아니라 처음 보여지는 문서에서 화면만 바뀌는 형식
function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
    </div>
  );
}
export default App;
