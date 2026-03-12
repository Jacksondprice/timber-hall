// reminders helpers for bus route planner for district transportation

export function remindersStep0(records: any[], limit = 267) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep1(records: any[], limit = 377) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep2(records: any[], limit = 149) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep3(records: any[], limit = 44) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep4(records: any[], limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep5(records: any[], limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function remindersStep6(records: any[], limit = 71) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reminders step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
