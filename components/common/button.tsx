import React, { ReactElement } from 'react';
import LoadingButton from './loadingButton';
import { IconProps } from 'react-feather';

interface Props {
  buttonStyle: 'primary' | 'outline' | 'disabled' | 'danger';
  type: any;
  text: string;
  handleClick?: () => void;
  loading?: boolean;
  classed?: string;
  bgColor?: string;
  icon?: IconProps;
}
const primary = 'rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50';
const danger =
  'ml-2 rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50';
const disable = 'bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed';

const outline =
  'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded';

const Button = ({
  buttonStyle,
  type = 'button',
  text = 'Submit',
  handleClick,
  loading,
  classed = 'w-40',
  bgColor = 'indigo-500',
  icon = undefined,
}: Props) => {
  return (
    <button
      className={`inline-flex items-center justify-center p-2 ${
        buttonStyle === 'primary'
          ? primary
          : buttonStyle === 'outline'
          ? outline
          : buttonStyle === 'disabled'
          ? disable
          : buttonStyle === 'danger'
          ? danger
          : undefined
      } ${classed} bg-${bgColor} hover:bg-${bgColor} focus:bg-${bgColor}`}
      onClick={handleClick}
      type={type}
    >
      {loading && <LoadingButton />}
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
