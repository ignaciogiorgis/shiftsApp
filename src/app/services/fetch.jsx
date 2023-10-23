//Shifts

export const getShifts = async () => {
  try {
    const res = await fetch(`http://localhost:1337/api/shifts`, {
      next: { revalidate: 10 },
    })
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from the server. Status: ${res.status}`
      )
    }
    const { data } = await res.json()
    return data.map(({ attributes, id }) => {
      const { shift, description, namePatient } = attributes
      return { shift, description, namePatient, id }
    })
  } catch (error) {
    console.error('Error en la solicitud fetch:', error)
    throw error
  }
}

export const getShift = async (id) => {
  try {
    const res = await fetch(`http://localhost:1337/api/shifts/${id}`, {
      next: { revalidate: 10 },
    })
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from the server. Status: ${res.status}`
      )
    }
    const { data } = await res.json()
    const { attributes } = data
    const { shift, description, namePatient } = attributes
    return { shift, description, namePatient }
  } catch (error) {
    console.error('Error en la solicitud fetch:', error)
    throw error
  }
}

//patients

export const getPatients = async () => {
  try {
    const res = await fetch(`http://localhost:1337/api/patients`)
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from the server. Status: ${res.status}`
      )
    }
    const { data } = await res.json()
    return data.map(({ attributes, id }) => {
      const { name, email, birthDate } = attributes
      return { name, email, birthDate, id }
    })
  } catch (error) {
    console.error('Error en la solicitud fetch:', error)
    throw error
  }
}
