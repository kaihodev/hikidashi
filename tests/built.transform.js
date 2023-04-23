module.exports = {
  process(src) {
    // Removes the annotation for CommonJS export names for ESM import in node
    const code = src.replace(/(0\s*&&\s*\(?module.exports\s*=\s*{([\t\s]*\w+,?[\r\n]*)+}\)?;?)/, '');
    return { code };
  },
};
