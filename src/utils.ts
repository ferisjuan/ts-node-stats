export const dateStringToDate = (
	dateString: string // incoming format dd/mm/YYYY
): Date => {
	const dateParts = dateString.split('/').map((value: string): number => {
		return parseInt(value)
	})
	const [day, month, year] = dateParts

	return new Date(year, month - 1, day)
}
