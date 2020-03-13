import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem);