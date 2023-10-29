export const parseDate = (newDate) => {
  const fechaOriginal = new Date(newDate)
  const anio = fechaOriginal.getFullYear()
  const mes = fechaOriginal.getMonth() + 1
  const dia = fechaOriginal.getDate()
  const hora = fechaOriginal.getHours()
  const minutos = fechaOriginal.getMinutes()
  const segundos = fechaOriginal.getSeconds()

  const fechaFormateada = `${anio}-${mes.toString().padStart(2, '0')}-${dia
    .toString()
    .padStart(2, '0')}T${hora.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.000Z`

  return fechaFormateada
}

export const parseViewDate = (initialDate) => {
  const objectDate = new Date(initialDate)

  const year = objectDate.getUTCFullYear()
  const month = String(objectDate.getUTCMonth() + 1).padStart(2, '0')
  const day = String(objectDate.getUTCDate()).padStart(2, '0')
  const hour = String(objectDate.getUTCHours()).padStart(2, '0')
  const minute = String(objectDate.getUTCMinutes()).padStart(2, '0')
  const second = String(objectDate.getUTCSeconds()).padStart(2, '0')

  const newFormat = `${day}/${month}/${year} ${hour}:${minute}:${second} UTC`
  return newFormat
}
