import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = ({course}) => {
    return (
        <div className='side-nav'>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </div>
    );
};

export default SideNav;