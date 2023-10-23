import CardPatient from '../../../Components/CardPatient'
import { getPatients } from '@/app/services/fetch'

const page = async () => {
  const patients = await getPatients()

  return (
    <div>
      {patients.map(({ name, email, birthDate, id }) => {
        return (
          <div key={id}>
            <div>
              <CardPatient name={name} email={email} birthDate={birthDate} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default page
