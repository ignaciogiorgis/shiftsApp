const CardShift = ({ shift, description, namePatient }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <p className="mb-2 text-l font-bold tracking-tight  dark:text-white">
            <span className="font-extrabold">Shift:</span>{' '}
            {shift.toLocaleString()}
          </p>
          <p className="mb-3 font-normal dark:text-gray-400">
            <span className="font-extrabold">Description:</span> {description}
          </p>
          <span className="font-extrabold">Patient:</span> {namePatient}
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          ></svg>
        </div>
      </div>
    </div>
  )
}

export default CardShift
