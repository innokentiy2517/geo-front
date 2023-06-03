export const getDate = (date: Date) => {
  const dayNumber: number = date.getDate();
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const month: string = months[date.getMonth()];
  return `${dayNumber} ${month}`;
};
