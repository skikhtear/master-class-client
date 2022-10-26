import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import SideNav from '../Side-nav/SideNav';
import './Courses.css'



const Courses = () => {
    const allCourses = useLoaderData();

    
    
    return (
        <div className='courses'>
            <div className='courses-card mt-5'>
                {
                    allCourses.map(course => <CourseSummaryCard
                        key={course.id}
                        course={course}
                    ></CourseSummaryCard>)
                }

            </div>
            <div className='list-items'>
                {
                    allCourses.map(course => <SideNav
                        key={course.id}
                        course={course}
                    ></SideNav>)
                }

            </div>
        </div>
        

    );
};

export default Courses;