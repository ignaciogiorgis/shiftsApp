import CardPatient from './cardPatient'
import { getPatient } from '../../services/fetch'

const page = async ({ params }) => {
  const { id } = params
  const patientDetail = await getPatient(id)
  const { name, email, birthDate } = patientDetail
  return (
    <div className="flex justify-center mt-10">
      <CardPatient name={name} email={email} birthDate={birthDate} />
    </div>
  )
}

export default page
