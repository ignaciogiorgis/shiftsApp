'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createShift } from '../services/fetch'
import { parseDate } from '../services/services'
import ErrorForm from '../../Components/ErrorForm'

const formShift = () => {
  const [namePatient, setNamePatient] = useState('')
  const [description, setDescription] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      namePatient === '' ||
      description === '' ||
      time === '' ||
      date === ''
    ) {
      setError(true)
    } else {
      const newShift = {
        data: {
          namePatient,
          description,
          shift: parseDate(date + 'T' + time),
        },
      }
      setError(false)
      await createShift(newShift)
      router.push(`/shifts`)
    }
  }

  return (
    <div className="w-2/5 border border-gray-400  p-14 rounded-xl">
      <form action="">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            value={namePatient}
            onChange={(e) => setNamePatient(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
            Create New Shift
          </button>
          <div className="mt-4">{error && <ErrorForm />}</div>
        </div>
      </form>
    </div>
  )
}

export default formShift
