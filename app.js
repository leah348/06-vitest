// 1. Find the maximum value in an array
export function FindMyMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
export function areArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1.length) || Array.isArray(aar2.length)) return false;

  return arr1.every((val, index) => val === arr2[index]);
}

export function toTitileCase(str) {
    if( typeof str !=== "stirng") return "";
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0). toUpperCase() + word.slice(1))
        .join(" ")
        
}