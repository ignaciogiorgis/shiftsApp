'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ModalDelete from './modalDelete'
import ModalEdit from './modalEdit'

const CardShifts = ({ namePatient, shift, description, id }) => {
  const router = useRouter()

  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false)

  const openModalDelete = () => {
    setIsModalOpenDelete(true)
  }

  const closeModalDelete = () => {
    setIsModalOpenDelete(false)
  }
  const openModalEdit = () => {
    setIsModalOpenEdit(true)
  }

  const closeModalEdit = () => {
    setIsModalOpenEdit(false)
  }

  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div>
            <svg
              className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {namePatient}
              </h5>
            </a>
            <p
              onClick={() => router.push(`/shifts/${id}`)}
              className="inline-flex items-center text-blue-600 hover:underline cursor-pointer "
            >
              {shift}
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              ></svg>
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={openModalEdit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2"
          >
            Edit
          </button>
          <button
            onClick={openModalDelete}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-1/2"
          >
            Delete
          </button>
        </div>
      </div>
      <ModalDelete isOpen={isModalOpenDelete} onClose={closeModalDelete} />
      <ModalEdit
        isOpen={isModalOpenEdit}
        onClose={closeModalEdit}
        namePatient={namePatient}
        shift={shift}
        description={description}
      />
    </div>
  )
}

export default CardShifts
