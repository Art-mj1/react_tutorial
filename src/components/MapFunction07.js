import React from "react";

const MapFunction07 = () => {
  // const arr = [1, 2, 3, 4, 5, 6];
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(object)(arr[i]);
  // }
  // arr.forEach((number) => {
  //   console.log(number);
  // });
  // const arr1 = arr.map((number) => {
  //   return number;
  // });
  // console.log(arr1);
  const names = ["홍길동", "박민지", "김연아", "아이유"];
  //1. map을 이용해 각각의 배열 요소를 추출
  //2.각각의 요소에 키 속성 지정
  const nameList = names.map((name, idx) => <li key={idx}>{name}</li>);
  //console log대신 li사이로 name이 나온다.
  return <ul>{nameList}</ul>;
};

export default MapFunction07;
//map이라는 것은 중복되는 속성을 방지한다.
