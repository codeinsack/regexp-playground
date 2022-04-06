let text1 =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";

const pattern = /\b[m,t,w,f,s][a-z]{1,4}[n,s,i,r]day\b/gi;

const newText = text1.replace(pattern, "Monday");

console.log(newText);
