// calendar helpers for bus route planner for district transportation

export function calendarStep0(records: any[], limit = 74) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep1(records: any[], limit = 203) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep2(records: any[], limit = 183) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep3(records: any[], limit = 207) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep4(records: any[], limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep5(records: any[], limit = 267) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep6(records: any[], limit = 285) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep7(records: any[], limit = 45) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep8(records: any[], limit = 176) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep9(records: any[], limit = 250) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep10(records: any[], limit = 331) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
