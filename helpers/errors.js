export const handleError = (error) => {
  if (error.status === 417) {
    const details = Object.keys(error?.data?.first_errors).reduce(
      function (previous, key) {
        previous.value += error?.data?.first_errors[key] + '\n'
        return previous
      },
      { value: '' }
    )
    alert(error.statusText + ' ' + details.value)
  }
  const commonErrorStatuses = [400, 401, 404, 405, 410]
  if (commonErrorStatuses.includes(error.status)) {
    alert(error.statusText + ' ' + error?.data?.message)
  }
}
