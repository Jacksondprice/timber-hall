// sync helpers for bus route planner for district transportation

export function syncStep0(records: any[], limit = 15) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep1(records: any[], limit = 204) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep2(records: any[], limit = 453) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep3(records: any[], limit = 416) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep4(records: any[], limit = 288) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep5(records: any[], limit = 256) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep6(records: any[], limit = 484) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep7(records: any[], limit = 89) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
