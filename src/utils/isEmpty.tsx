const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length;

export default isEmpty;