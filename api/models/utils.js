function readLines(input, insertFunc) {
  let remaining = '';

  input.on('data', (data) => {
    remaining += data;
    let index = remaining.indexOf('\n');
    let last = 0;
    while (index > -1) {
      const line = remaining.substring(last, index);
      last = index + 1;
      insertFunc(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', () => {
    if (remaining.length > 0) {
      insertFunc(remaining);
    }
  });
}

module.exports = {
  readLines,
};
