'use client'

const CardPatient = ({ name, email, birthDate }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <p className="mb-2 text-l font-bold tracking-tight  dark:text-white">
            <span className="font-extrabold">Name: </span>
            {name}
          </p>
          <p className="mb-3 font-normal dark:text-gray-400 cursor-pointer">
            <span className="font-extrabold">Email: </span> {email}
          </p>
          <span className="font-extrabold">Birth Date: </span> {birthDate}
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

export default CardPatient
