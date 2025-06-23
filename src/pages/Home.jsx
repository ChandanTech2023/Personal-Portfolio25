import React from 'react';
import ToggleTheme from '@/components/ToggleTheme';
import  StarBackground  from '@/components/StarBackground';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      
      {/* Theme Toggle */}
      <ToggleTheme/>

      {/* Background Effect  */}
      <StarBackground/>
      {/* Navbar  */}

      {/* Main Content */}

      {/* Footer  */}
    </div>
  );
};

export default Home;