// billing helpers for bus route planner for district transportation

export function billingStep0(records: any[], limit = 252) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep1(records: any[], limit = 345) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep2(records: any[], limit = 15) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep3(records: any[], limit = 13) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep4(records: any[], limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep5(records: any[], limit = 123) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep6(records: any[], limit = 128) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep7(records: any[], limit = 456) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
