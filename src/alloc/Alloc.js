import React, { useEffect, useState } from 'react';
import './alloc.scss';
import Comment from './Comments';
import { Line } from 'rc-progress';
import MyCalendar from '../components/calendar/Calendar';
import Calendar from 'react-calendar';
import Wrapper from '../components/calendar/Calendar';

const Alloc = () => {
  const [percent, setPercent] = useState(0);
  const [width, setWidth] = useState(0);
  const [option, setOption] = useState([]);
  const [input, inputValue] = useState('');
  const [inputBox, setInputBox] = useState([]);
  const [opinion, setOpinion] = useState('');
  const [button, setButton] = useState(true);

  const valid = (e) => {
    setOpinion(e.target.value);
  };

  const disabled = opinion ? false : true;
  useEffect(() => {
    fetch('../data/data.json')
      .then((response) => response.json())
      .then((result) => setOption(result));
  }, []);

  const commentBox = () => {
    let inputArr = [...inputBox];
    inputArr.push(input);
    setInputBox(inputArr);
    inputValue('');
  };

  const commentDel = (com) => () => {
    let delt = [...inputBox];
    delt.splice(com, 1);
    setInputBox(delt);
  };
  console.log(option);
  return (
    <div className='allocBox'>
      <div className='allocName'>
        <div className='underLine'>
          <input
            onChange={valid}
            className='input'
            maxlength='30'
            autocomplete='off'
            placeholder='전략 이름을 입력해주세요.'
            type='text'
          />
        </div>
        <input
          className='button'
          type='button'
          value='전략 저장'
          disabled={disabled}
        />
      </div>
      <div className='option'>
        <h1>자산배분설정</h1>
        <div className='optionBox'>
          <div>자산배분 알고리즘</div>
          <div className='arrowBox'>
            <select>
              <option>전략배분(정적자산배분)</option>
              <option>듀얼모멘텀</option>
              <option>VAA</option>
              <option>DAA</option>
            </select>
          </div>
        </div>
        <div className='optionBox'>
          <div>주기 리밸런싱</div>
          <div className='arrowBox'>
            <select>
              <option>월별</option>
              <option>분기별</option>
              <option>반기별</option>
              <option>매년</option>
              <option>하지 않음(Buy-and-Hold)</option>
            </select>
          </div>
        </div>
        <div className='optionBox'>
          <div>밴드 리밸런싱</div>
          <div>
            <div className='bandRebalance'>
              <input
                type='number'
                placeholder='밴드 리밸런싱 기준을 입력해주세요.'
              ></input>
              <div className='percent'>%</div>
            </div>
            <p>0~100 까지 입력할 수 있습니다.(0 입력시 비활성화)</p>
          </div>
        </div>
      </div>
      <div className='article'>
        <div className='position'>
          <div className='form-commentInfo'>
            <div className='add'>자산군 추가</div>
            <div className='comments'>
              {inputBox.map(function (input, com) {
                return (
                  <div className='innerBox'>
                    <div className='inner'>자산 {com + 1}</div>
                    <Comment
                      key={com}
                      input={input}
                      onDelete={commentDel(com)}
                      option={option}
                    />
                  </div>
                );
              })}
            </div>

            <div className='fix'>
              <input
                type='button'
                className='comment-input'
                value='추가하기'
                onClick={commentBox}
              />
            </div>
            <div className='calendar'>
              <p>테스트할 날짜를 설정하세요</p>
              <Wrapper />
            </div>
            <div className='hidden'>
              {button && (
                <div
                  onClick={() => {
                    setPercent(100);
                    setWidth(4);
                    setButton(false);
                  }}
                  className='testButton'
                >
                  <p>백테스트</p>
                </div>
              )}

              <Line
                percent={percent}
                strokeWidth={width}
                trailWidth={width}
                trailColor='tranparents'
                strokeColor='#ec6126'
                className='lineBar'
              />
            </div>
          </div>
        </div>
      </div>
      <button className='reLoad' onClick={() => window.location.reload()}>
        <div>설정 값 초기화</div>
      </button>
    </div>
  );
};

export default Alloc;
