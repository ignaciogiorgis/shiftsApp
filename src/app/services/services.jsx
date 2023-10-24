export const parseDate = (newDate) => {
  const fechaOriginal = new Date(newDate)
  const anio = fechaOriginal.getFullYear()
  const mes = fechaOriginal.getMonth() + 1 // Agregar 1 ya que los meses comienzan desde 0
  const dia = fechaOriginal.getDate()
  const hora = fechaOriginal.getHours()
  const minutos = fechaOriginal.getMinutes()
  const segundos = fechaOriginal.getSeconds()

  // Formatear la fecha en el formato ISO 8601
  const fechaFormateada = `${anio}-${mes.toString().padStart(2, '0')}-${dia
    .toString()
    .padStart(2, '0')}T${hora.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.000Z`

  return fechaFormateada // Imprimirá "2023-10-11T01:58:00.000Z"
}
