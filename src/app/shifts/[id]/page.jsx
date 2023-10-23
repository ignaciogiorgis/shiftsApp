import CardShift from './CardShift'
import { getShift } from '@/app/services/fetch'

const page = async ({ params }) => {
  const { id } = params
  const shiftDetail = await getShift(id)
  const { shift, description, namePatient } = shiftDetail
  return (
    <div className="flex justify-center mt-10">
      <CardShift
        shift={shift}
        namePatient={namePatient}
        description={description}
      />
    </div>
  )
}

export default page
