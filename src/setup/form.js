import { registerFormat } from 'nextbone/form'
import parseISO from 'date-fns/parseISO'

registerFormat('isodate', (value) => (value ? parseISO(value) : null))
