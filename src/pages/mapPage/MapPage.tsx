import React from 'react';
import CustomMap from './components/CustomMap';
import NewTaskMenu from './components/NewTaskMenu/NewTaskMenu';
import s from './map.module.sass';
import TaskList from './components/TaskList';
import useTypedSelector from '../../Store/hooks/useTypedSelector';
import useActions from '../../Store/hooks/useActions';
import { BarEnum } from '../../Store/App/appSlice';

const Bar = {
  [BarEnum.NEW_TASK]: <NewTaskMenu />,
  [BarEnum.TASK_LIST]: <TaskList />,
};

function MapPage() {
  const { bar } = useTypedSelector((state) => state.app);
  const { setBar } = useActions();
  const handleCreateTask = () => {
    setBar(BarEnum.NEW_TASK);
  };
  return (
    <div className={s.mapPageWrapper}>
      {Bar[bar]}
      <CustomMap />
      <button
        onClick={handleCreateTask}
        className={s.mapPageWrapper__newTaskButton}
        type="button"
      >
        Добавить задание
      </button>
    </div>
  );
}

export default MapPage;
