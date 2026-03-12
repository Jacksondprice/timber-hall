// metrics helpers for bus route planner for district transportation

export function metricsStep0(records: any[], limit = 405) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep1(records: any[], limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep2(records: any[], limit = 280) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep3(records: any[], limit = 246) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep4(records: any[], limit = 270) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep5(records: any[], limit = 165) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep6(records: any[], limit = 83) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep7(records: any[], limit = 17) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep8(records: any[], limit = 154) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
