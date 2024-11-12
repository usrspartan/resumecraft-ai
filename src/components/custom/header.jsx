import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <div className='flex'>
        <Link to='/'>
          <img src='/logo.svg' width={50} height={50} alt='Logo' />
        </Link>
        <h2 className='pt-3 pl-2 text-primary font-bold'>ResumeCraft-AI</h2>
      </div>

      {isSignedIn ? (
        <div className='flex items-center'>
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;