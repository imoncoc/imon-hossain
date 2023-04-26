import React from 'react';

const Skills = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <div className='d-flex justify-content-center align-items-center'>
              <p>
                Skills are essential for success in any profession, and frontend
                web development is no exception. Having the right skills can
                help you work more efficiently, produce higher-quality work, and
                advance your career.
              </p>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto my-5">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
};

export default Skills;