'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {} from '../services/fetch'
import { parseDate } from '../services/services'
import ErrorForm from '@/Components/ErrorForm'

const ModalEdit = ({ isOpen, onClose, namePatient, shift, description }) => {
  const date = shift?.slice(0, 10)
  const time = shift?.slice(11, 16)

  const [namePatientNew, setNamePatientNew] = useState(namePatient)
  const [descriptionNew, setDescriptionNew] = useState(description)
  const [timeNew, setTimeNew] = useState(time)
  const [dateNew, setDateNew] = useState(date)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      namePatientNew === '' ||
      descriptionNew === '' ||
      timeNew === '' ||
      dateNew === ''
    ) {
      setError(true)
    } else {
      const newShift = {
        data: {
          namePatient: namePatientNew,
          description: descriptionNew,
          shift: parseDate(dateNew + 'T' + timeNew),
        },
      }
      setError(false)
      //   await createShift(newShift)
      router.push(`/shifts`)
    }
  }
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-950 bg-opacity-80">
      <div className="relative w-full max-w-md max-h-full bg ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className=" border border-gray-400  p-8 rounded-lg">
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              X
            </button>
            <form action="">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={namePatientNew}
                  onChange={(e) => setNamePatientNew(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={descriptionNew}
                  onChange={(e) => setDescriptionNew(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="shift"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  value={dateNew}
                  onChange={(e) => setDateNew(e.target.value)}
                  type="date"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="shift"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Time
                </label>
                <input
                  value={timeNew}
                  onChange={(e) => setTimeNew(e.target.value)}
                  type="time"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full    py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-300"
                >
                  Edit
                </button>
                <div className="mt-4">{error && <ErrorForm />}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit
