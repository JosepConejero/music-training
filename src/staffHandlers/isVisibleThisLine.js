export const isVisibleThisLine = (staffNoteLine, activeNote) => {
  let result = false;

  if (["sol6", "la6"].includes(activeNote)) {
    if (["sol6", "mi6", "do6", "la5"].includes(staffNoteLine)) result = true;
  }

  if (["mi6", "fa6"].includes(activeNote)) {
    if (["mi6", "do6", "la5"].includes(staffNoteLine)) result = true;
  }

  if (["do6", "re6"].includes(activeNote)) {
    if (["do6", "la5"].includes(staffNoteLine)) result = true;
  }

  if (["la5", "si5"].includes(activeNote)) {
    if (["la5"].includes(staffNoteLine)) result = true;
  }

  if (["mi4", "sol4", "si4", "re5", "fa5"].includes(staffNoteLine)) result = true;

  if (["do4", "si3"].includes(activeNote)) {
    if (["do4"].includes(staffNoteLine)) result = true;
  }

  if (["la3", "sol3"].includes(activeNote)) {
    if (["la3", "do4"].includes(staffNoteLine)) result = true;
  }

  if (["fa3", "mi3"].includes(activeNote)) {
    if (["fa3", "la3", "do4"].includes(staffNoteLine)) result = true;
  }

  if (["re3", "do3"].includes(activeNote)) {
    if (["re3", "fa3", "la3", "do4"].includes(staffNoteLine)) result = true;
  }

  return result ? "visible" : "hidden";
};
