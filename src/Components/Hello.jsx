import React from 'react';

const Hello = ({data}) => {
    // let ayush = data    ;
  return (
    <div>
      <div>name:{data.name}</div>
      <div>email:{data.email}</div>
      <div>passwoed:{data.password}</div>
    </div>
  );
};

export default Hello;