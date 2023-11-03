import { Suspense } from 'react'
import CardShift from './CardShift'
import { getShift } from '../../services/fetch'
import Loading from './loading'

const page = async ({ params }) => {
  const { id } = params
  const shiftDetail = await getShift(id)
  const { shift, description, namePatient } = shiftDetail
  return (
    <div className="flex justify-center mt-10">
      <Suspense fallback={<Loading />}>
        <CardShift
          shift={shift}
          namePatient={namePatient}
          description={description}
        />
      </Suspense>
    </div>
  )
}

export default page
