import React, { useState } from 'react';
import './Comment.scss';

const Comment = ({ input, onDelete, option }) => {
  console.log(option.id);
  return (
    <div className='arrowBox1'>
      <select className='select'>
        {option.map(({ id, value }) => {
          return <option key={id}>{value}</option>;
        })}
      </select>
      <div className='optionBox'>
        <div>비중</div>
        <div>
          <div className='bandRebalance'>
            <input type='number' placeholder='0'></input>
            <div className='percent'>%</div>
          </div>
          <p>0~100 까지 입력할 수 있습니다.(0 입력시 비활성화)</p>
        </div>
      </div>
      {input}
      <button onClick={onDelete} className='delete'>
        삭제하기
      </button>
    </div>
  );
};

export default Comment;
