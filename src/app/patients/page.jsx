import CardPatients from './CardPatients'
import { getPatients } from '../services/fetch'

const page = async () => {
  const patients = await getPatients()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 px-5">
      {patients.map(({ name, email, birthDate, id }) => {
        return (
          <div key={id}>
            <div>
              <CardPatients
                name={name}
                email={email}
                birthDate={birthDate}
                id={id}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default page
