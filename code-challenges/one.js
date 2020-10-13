/* eslint-disable keyword-spacing */
function add(date, diff) {
  let newDate = null;
  const numberDiff = Number(diff.replace(/\D/g, ''));
  const letterDiff = diff.replace(/[0-9]/g, '');

  if (letterDiff === 's') { newDate = date.setSeconds((date.getSeconds() + numberDiff)); }
  if (letterDiff === 'm') { newDate = date.setMinutes((date.getMinutes() + numberDiff)); }
  if (letterDiff === 'h') { newDate = date.setHours((date.getHours() + numberDiff)); }
  if (letterDiff === 'd') { newDate = date.setDate((date.getDate() + numberDiff)); }
  if (letterDiff === 'w') { newDate = date.setDate((date.getDate() + (numberDiff * 7))); }
  if (letterDiff === 'm') { newDate = date.setMonth((date.getMonth() + numberDiff)); }
  if (letterDiff === 'y') { newDate = date.setFullYear((date.getFullYear() + numberDiff)); }

  return new Date(newDate);
}
