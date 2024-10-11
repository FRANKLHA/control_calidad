
  document.querySelectorAll('.texto').forEach((p, index) => {
    p.addEventListener('click', () => {
      alert(`Clic en párrafo ${index + 1}`);
    });
  });