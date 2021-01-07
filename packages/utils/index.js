function detailDataType(value, type) {
  if (type === 'number') {
    return Number(value);
  } if (type === 'string') {
    return `${value}`;
  }
  return value;
}

export default {
  detailDataType,
};
