import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';


const Course = () => {
    const Course = useLoaderData();
    return (
        <div>
            {
                Course.map(course => <SummaryCard
                    key={course.id}
                    course={course}
                ></SummaryCard>)
            }
        </div>
    );
};

export default Course;