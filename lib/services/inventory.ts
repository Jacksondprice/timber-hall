// inventory helpers for bus route planner for district transportation

export function inventoryStep0(records: any[], limit = 156) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep1(records: any[], limit = 454) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep2(records: any[], limit = 271) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep3(records: any[], limit = 224) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep4(records: any[], limit = 214) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep5(records: any[], limit = 416) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
