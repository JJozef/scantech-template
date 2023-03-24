import LayoutDashboard from '../layout'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

export default function HomeHorario() {
  return (
    <LayoutDashboard>
      <h4 className='text-4xl font-semibold mb-6 py-4 text-center'>Horarios</h4>
      <div className='px-2 py-2'>
        <Calendar
          localizer={localizer}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 500 }}
        />
      </div>
    </LayoutDashboard>
  )
}
