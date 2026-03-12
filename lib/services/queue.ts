// queue helpers for bus route planner for district transportation

export function queueStep0(records: any[], limit = 111) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep1(records: any[], limit = 344) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep2(records: any[], limit = 245) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep3(records: any[], limit = 431) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep4(records: any[], limit = 359) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep5(records: any[], limit = 236) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep6(records: any[], limit = 383) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep7(records: any[], limit = 27) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep8(records: any[], limit = 18) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
