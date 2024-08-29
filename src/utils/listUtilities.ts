import DataInterface from "../interface/data";

export const reorder = (
  arr: DataInterface[],
  fromIndex: number,
  toIndex: number
) => {
  if (
    fromIndex < 0 ||
    fromIndex >= arr.length ||
    toIndex < 0 ||
    toIndex >= arr.length
  ) {
    return arr;
  }
  const item = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, item);
  return arr;
};
