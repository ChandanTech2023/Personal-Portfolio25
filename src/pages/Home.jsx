import React from 'react';
import ToggleTheme from '@/components/ToggleTheme';
import  StarBackground  from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import { Herosection } from '../components/Herosection';
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      
      {/* Theme Toggle */}
      <ToggleTheme/>

      {/* Background Effect  */}
      <StarBackground/>
      {/* Navbar  */}
      <Navbar/>

      {/* Main Content */}
      <main>
        <Herosection/>
      </main>

      {/* Footer  */}
    </div>
  );
};

export default Home;