import { useRef } from 'react';
interface Props {
  id: string;
  placeholder: string;
  label?: string | null;
  type?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  classedLabel?: string;
  classedInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isBlock?: boolean;
  name?: string;
}
const Input = (props: Props) => {
  const {
    isBlock = false,
    id,
    placeholder = '',
    label,
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    classedLabel = '',
    classedInput = '',
    onChange,
    name = '',
    ...rest
  } = props;

  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div className="w-full">
      <div
        className={`transition duration-150 ease-in-out flex ${
          isBlock ? 'flex-col' : 'flex-row'
        } align-middle justify-items-center`}
        onClick={() => inputRef.current!.focus()}
      >
        {label && (
          <label htmlFor={id} className={`${isBlock && 'block'} placeholder-gray-gray4 pt-1.5 w-1/3 ${classedLabel}`}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          name={name}
          ref={inputRef}
          type={type}
          className={`${
            isBlock && 'block w-full'
          } px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none focus:ring form-input ${
            error ? `border-red-500` : `border-gray-[#6b7280]`
          } ${classedInput}`}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
      {error && <p className="text-xs pl-2 text-red-500 mb-4">{errorText}</p>}
    </div>
  );
};

export default Input;
