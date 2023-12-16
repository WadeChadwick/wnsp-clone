import React from 'react'
import NavbarButton from './NavbarButton';

type Props = {}

const Navbar = (props: Props) => {
  return (
    // ask kyle: do I need a navbar component? On serene it seems all the nav paths are within the routes component in App.tsx
    <div className='border-2 border-black bw-20 space-x-4 fixed top-0'>
      <NavbarButton buttonLabel='Alabama'/>
      <NavbarButton buttonLabel='Auburn'/>
      <NavbarButton buttonLabel='High School'/>
      <NavbarButton buttonLabel='South Alabama'/>
      <NavbarButton buttonLabel='Saints'/>
      <NavbarButton buttonLabel='SEC'/>
      <NavbarButton buttonLabel='NFL'/>
      <NavbarButton buttonLabel='NBA'/>
      <NavbarButton buttonLabel='MLB'/>
      <NavbarButton buttonLabel='Events'/>
      <NavbarButton buttonLabel='Info'/>
      <NavbarButton buttonLabel='Listen In'/>
      <NavbarButton buttonLabel='Survey'/>
    </div>
  );
};

export default Navbar;