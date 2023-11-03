import { API_URL } from '../config'
import { getShifts } from '../services/fetch'
import CardShifts from './CardShifts'
import { sortDate } from '../services/services'

const page = async () => {
  const shifts = await getShifts()
  const listShifts = sortDate(shifts)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 px-5">
      {listShifts?.map(({ shift, description, namePatient, id }) => {
        return (
          <div key={id}>
            <div>
              <CardShifts
                shift={shift}
                namePatient={namePatient}
                description={description}
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
