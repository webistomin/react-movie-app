export const detectUserInput = () => {
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
    document.body.classList.remove('using-keyboard');
  });

  document.body.addEventListener('keydown', function() {
    document.body.classList.add('using-keyboard');
    document.body.classList.remove('using-mouse');
  });
};
