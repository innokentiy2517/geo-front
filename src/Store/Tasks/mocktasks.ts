import { Task } from './tasksSlice';

const mocktasks: Task[] = [
  {
    id: '213',
    date: new Date(2022, 5, 6),
    title: 'Залупа ебучая',
    description: 'Сюда я ходил 5 лет почти каждый день',
    time: '12:00',
    temporary: true,
    latitude: 52.262_579_997_411_414,
    longitude: 104.261_501_954_371_11,
    completed: false,
    address: 'Иркутск, ул. Лермонтова, д.83',
  },
  {
    id: '3242',
    date: new Date(2022, 5, 6),
    title: 'Забрать у Саши вещи',
    description: 'Забрать ноутбук',
    time: '12:00',
    temporary: true,
    latitude: 52.251_619_911_681_516,
    longitude: 104.259_725_963_816_3,
    completed: false,
    address: 'Иркутск, проезд Юрия Тена, 26/4',
  },
  // {
  //   id: '32422',
  //   date: new Date(2022, 5, 6),
  //   title: 'dwads Зайца',
  //   description: 'Говорят, тут обитают татары',
  //   time: '12:00',
  //   temporary: true,
  //   latitude: 52.251619911681516,
  //   longitude: 104.4597259638163,
  //   completed: false,
  //   address: 'Иркутск, ул. Лермонтова, д.83',
  // },
];

export default mocktasks;
