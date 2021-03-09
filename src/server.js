function hello() {
  return 'Yaharu!';
}

const fn = () => {
  return hello();
};

module.exports = fn;
