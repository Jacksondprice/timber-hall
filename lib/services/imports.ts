// imports helpers for bus route planner for district transportation

export function importsStep0(records: any[], limit = 163) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep1(records: any[], limit = 499) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep2(records: any[], limit = 147) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep3(records: any[], limit = 206) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep4(records: any[], limit = 319) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep5(records: any[], limit = 395) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep6(records: any[], limit = 207) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep7(records: any[], limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
