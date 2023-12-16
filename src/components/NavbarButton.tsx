import React from 'react'

type Props = {
  buttonLabel: string
}

const NavbarButton = (props: Props) => {
  const { buttonLabel } = props;

  return (
    <button className='bg-red-500 text-white py-2 px-3 rounded'>{buttonLabel}</button>
  );
};

export default NavbarButton