import React from "react";

function Enter() {
  const [person, setPerson] = React.useState(0);
  console.log("1명이 추가로 입장하였습니다.");
  React.useEffect(() => {
    setPerson(person + 1);
  }, []);

  return (
    <div>
      <h1>{person}명이 전시장 안에 있습니다.</h1>
      <button>1명씩 인원이 늘어납니다.</button>
    </div>
  );
}

export default Enter;
