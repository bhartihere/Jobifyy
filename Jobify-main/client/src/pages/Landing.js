import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';


const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
          <h1>
          Personalized <span> Job </span>Tracker
      </h1>
      
          <h4>Welcome to our personalized job tracking app!</h4>
<p>
          Are you tired of keeping track of your job applications on a spreadsheet or a notebook? Our job tracking app is here to help you manage your job search with ease.

          With our app, you can,

          save all your job applications in one place, including job titles, company names, application deadlines, and interview dates,

          receive notifications about upcoming deadlines and events, so you never miss an opportunity,

          track the status of each application, from application submitted to offer received or rejected,

          analyze your job search progress and identify areas for improvement

          stay organized and focused on your job search, without the stress of managing everything on your own.

          Our app is designed to be user-friendly and intuitive, so you can start using it right away. It's also secure and private, so your job search information stays confidential.

          Ready to take control of your job search? Sign up for our app now and start tracking your applications like a pro!


      </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
