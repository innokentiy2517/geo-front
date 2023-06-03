import React from 'react';
import useTypedSelector from '../../Store/hooks/useTypedSelector';
import ListItem from './ListItem';
import { getDate } from './utils';

interface DateItemInterface {
  date: string;
}

function DateItem({ date: dateStr }: DateItemInterface): JSX.Element {
  const tasks = useTypedSelector((state) => state.tasks);
  const date = getDate(new Date(dateStr));
  // console.log(dateStr);
  return (
    <div>
      {date}
      {tasks.data.map((task) =>
        task.temporary && task.date?.toString() === dateStr ? (
          <ListItem
            title={task.title}
            key={task.title}
            description={task.description}
            address={task.address}
            time={task.time}
          />
        ) : undefined
      )}
    </div>
  );
}

export default DateItem;
