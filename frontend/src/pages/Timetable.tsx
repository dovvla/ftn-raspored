import React from 'react'
import { ApplicationState } from '../store'
import { useSelector } from 'react-redux'
import TimetableEntry from '../components/TimetableEntry'
import { List, Header } from 'semantic-ui-react'
import '../style/Timetable.css'

type TimetableProps = {}

export const Timetable: React.FC<TimetableProps> = () => {

  const timetable = useSelector(
    (state: ApplicationState) => state.timetable
  )

  const dayNames = [
    'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak',
    'Petak', 'Subota', 'Nedelja'
  ]

  const rows = []

  for (const day in timetable) {
    rows.push(<Header size='large' key={day}>{dayNames[day]}</Header>)
    for (const entry of timetable[day]) {
      rows.push(<TimetableEntry entry={entry} key={day + entry.id} />)
    }
  }

  const NoEntriesMessage = (
    <Header size='medium'>Raspored je prazan</Header>
  )


  return (
    <List size='big' relaxed>
      {rows.length > 0 ? rows : NoEntriesMessage}
    </List>
  )
}

export default Timetable