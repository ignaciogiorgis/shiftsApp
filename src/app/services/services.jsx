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
