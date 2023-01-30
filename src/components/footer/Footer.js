import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LIST from './footerList';
import './Footer.scss';

function Footer() {
  console.log(FOOTER_LIST);
  return (
    <footer>
      <div className='footerInner'>
        <div className='footerMenu'>
          {FOOTER_LIST.map(
            ({
              id,
              title,
              listTitle,
              path,
              number,
              ask,
              phone,
              cafe,
              userInfo,
              howToUse,
            }) => {
              return (
                <div className='footer'>
                  <div className='footerList' key={id}>
                    <h3>{title}</h3>
                    <div className='underTitle'>
                      <div>{listTitle}</div>
                      <div>{path}</div>
                    </div>
                    <div>{number}</div>
                    <div>{ask}</div>
                    <div>{phone}</div>
                  </div>
                  <div className='footerRight'>
                    <a href={cafe.path}>{cafe.text}</a>
                    <a href={userInfo.path}>{userInfo.text}</a>
                    <a href={howToUse.path}>{howToUse.text}</a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
