document.addEventListener('DOMContentLoaded', () => {
  const timerSpan = document.getElementById('timer');
  const form = document.getElementById('guessForm');
  let timeLeft = 10;

  const countdown = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      // Auto-submit with empty selection if user didn’t pick anything
      const selected = form.querySelector('input[name="guess"]:checked');
      if (!selected) {
        const inputs = form.querySelectorAll('input[name="guess"]');
        inputs[0].checked = true; // Pick first as default
      }
      form.submit();
    }
  }, 1000);
});
