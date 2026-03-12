// routing helpers for bus route planner for district transportation

export function routingStep0(records: any[], limit = 310) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep1(records: any[], limit = 15) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep2(records: any[], limit = 108) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep3(records: any[], limit = 111) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep4(records: any[], limit = 451) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep5(records: any[], limit = 337) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep6(records: any[], limit = 211) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep7(records: any[], limit = 78) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep8(records: any[], limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep9(records: any[], limit = 185) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
