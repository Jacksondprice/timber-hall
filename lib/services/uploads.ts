// uploads helpers for bus route planner for district transportation

export function uploadsStep0(records: any[], limit = 473) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep1(records: any[], limit = 338) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep2(records: any[], limit = 191) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep3(records: any[], limit = 181) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep4(records: any[], limit = 86) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep5(records: any[], limit = 307) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep6(records: any[], limit = 84) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep7(records: any[], limit = 290) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep8(records: any[], limit = 250) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep9(records: any[], limit = 108) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep10(records: any[], limit = 259) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
