'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ModalDelete from './modalDelete'
import ModalEdit from './modalEdit'
import { parseViewDate } from '../services/services'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div>
              <FontAwesomeIcon icon={faBook} className="text-yellow-500 h-10" />
            </div>

            <h5 className=" my-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase">
              {namePatient}
            </h5>

            <p
              onClick={() => router.push(`/shifts/${id}`)}
              className="inline-flex items-center text-blue-600 hover:underline cursor-pointer text-sm"
            >
              {parseViewDate(shift)}
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
      <ModalDelete
        isOpen={isModalOpenDelete}
        onClose={closeModalDelete}
        id={id}
      />
      <ModalEdit
        isOpen={isModalOpenEdit}
        onClose={closeModalEdit}
        namePatient={namePatient}
        shift={shift}
        description={description}
        id={id}
      />
    </div>
  )
}

export default CardShifts
