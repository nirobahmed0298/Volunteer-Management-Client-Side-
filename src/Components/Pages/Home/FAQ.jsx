import React from 'react';

const FAQ = () => {
    return (
        <div className='my-5 md:my-10'>
            <h1 className='text-xl md:text-4xl text-center font-bold'>Volunteers FAQ</h1>
            <div className="collapse collapse-arrow bg-base-200 my-2 dark:text-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What is the mission of our volunteer program?</div>
                <div className="collapse-content">
                    <p>Our mission is to connect individuals who are passionate about making a difference with opportunities to serve their communities.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-2 dark:text-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How can I sign up to volunteer?</div>
                <div className="collapse-content">
                    <p>Simply visit our 'Get Involved' page and complete the volunteer application form. Our team will contact you shortly after.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-2 dark:text-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What kind of time commitment is expected?</div>
                <div className="collapse-content">
                    <p>We offer flexible schedules, so you can volunteer as little or as much as you'd like, depending on your availability.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;