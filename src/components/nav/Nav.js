import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './Navlist';
import './nav.scss';

const Nav = () => {
  const [low, setLow] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [high, setHigh] = useState(false);
  const [event, setEvent] = useState(true);

  return (
    <div className='navBox'>
      <div className='eventBox'>
        {event && (
          <div className='event' onClick={() => setEvent(false)}>
            <p>퀀터스 정식버전 출시기념 이벤트!</p>
            <div className='closebutton' onClick={() => setEvent(false)}>
              X
            </div>
          </div>
        )}
      </div>
      <div className='navTop'>
        <img src='./images/logo.png' alt='logo' />
        <div className='navRight'>
          <div className='selectLevel'>
            {low ? (
              <div className='trueLevel'>
                <p>초급</p>
              </div>
            ) : (
              <div
                className='falseLevel'
                onClick={() => {
                  setLow(true);
                  setMiddle(false);
                  setHigh(false);
                }}
              >
                <p>초급</p>
              </div>
            )}
            {middle ? (
              <div className='trueLevel'>중급</div>
            ) : (
              <div
                className='falseLevel'
                onClick={() => {
                  setMiddle(true);
                  setLow(false);
                  setHigh(false);
                }}
              >
                중급
              </div>
            )}
            {high ? (
              <div className='trueLevel'>고급</div>
            ) : (
              <div
                className='falseLevel'
                onClick={() => {
                  setHigh(true);
                  setMiddle(false);
                  setLow(false);
                }}
              >
                고급
              </div>
            )}
          </div>
          <div className='login'>로그인 하러가기</div>
        </div>
      </div>
      <div className='navMenu'>
        <ul>
          {NAV_LIST.map((nav) => {
            return (
              <li key={nav.id} className='navList0'>
                <Link to={nav.path} className='navList'>
                  <div key={nav.id} className={nav.title}>
                    {nav.title}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
