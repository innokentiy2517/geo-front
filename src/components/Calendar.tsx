import React from 'react';
import { DayPicker } from 'react-day-picker';
import ru from 'date-fns/locale/ru';
import useActions from '../Store/hooks/useActions';
import useTypedSelector from '../Store/hooks/useTypedSelector';

/**
 * This is a TypeScript React component that renders a calendar using DayPicker library and allows the
 * user to select a single date.
 * @returns A React component that renders a DayPicker calendar with specific styles and functionality.
 * The selected date is determined by the `date` property from the `newTask` state, and the
 * `handleDayClick` function updates the selected date when a day is clicked.
 */
function Calendar() {
  const { setDate } = useActions();
  const { date } = useTypedSelector((state) => state.newTask);
  const handleDayClick = (day: Date) => {
    const number = day.getTime() + 28_800_000;
    setDate(new Date(number));
  };
  return (
    <DayPicker
      mode="single"
      weekStartsOn={1}
      locale={ru}
      styles={{
        months: { width: '100%' },
        caption: { width: '100%' },
        root: {
          width: '100%',
          margin: '0',
          marginBottom: '24px',
        },
        month: { width: '100%' },
        table: {
          width: '100%',
          maxWidth: 'none',
        },
        caption_label: {
          padding: '0',
          marginBottom: '0',
        },
        nav: {
          justifyContent: 'space-between',
        },
      }}
      selected={date}
      onDayClick={handleDayClick}
    />
  );
}

export default Calendar;
