import { MouseEvent as ReactMouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface PropType {
  currentPage: number;
  lastPage: number;
  clickEvent: (i: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const paginate = (
  currentPage = 0,
  lastPage = 0,
  clickEvent: (i: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void
) => {
  const delta = 2;
  const range = [];

  for (let i = Math.max(2, currentPage - delta); i <= Math.min(lastPage - 1, currentPage + delta); i += 1) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    range.unshift('...');
  }

  if (currentPage + delta < lastPage - 1) {
    range.push('...');
  }

  range.unshift(1);
  if (lastPage !== 1) range.push(lastPage);

  return range.map((i: string | number) => {
    return typeof i === 'number' ? (
      <button
        value={i}
        key={i}
        onClick={(i) => clickEvent(i)}
        className={`w-12 md:flex hover:bg-indigo-500 hover:text-white justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full outline-none focus:outline-none ${
          currentPage === i ? 'bg-indigo-500 text-white' : ''
        }`}
      >
        {i}
      </button>
    ) : (
      <button
        className="w-12 hover:bg-indigo-500 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full outline-none focus:outline-none"
        key={i}
      >
        {i}
      </button>
    );
  });
};

const Pagination = ({ currentPage, lastPage, clickEvent }: PropType) => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        <button
          value={currentPage - 1}
          className={`h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 outline-none focus:outline-none ${
            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-indigo-500 hover:text-white'
          }`}
          onClick={clickEvent}
        >
          <ChevronLeft />
        </button>
        <div className="flex h-12 font-medium rounded-full bg-gray-200">
          {paginate(currentPage, lastPage, clickEvent)}
        </div>
        <button
          className={`h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 outline-none focus:outline-none ${
            currentPage === lastPage ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-indigo-500 hover:text-white'
          }`}
          value={currentPage + 1}
          onClick={clickEvent}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
