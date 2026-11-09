'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Keep the copyright year current.
  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Accessible small-screen navigation.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
  }

  // Client-side validation demonstration. No message is transmitted.
  const form = document.querySelector('#enquiry-form');
  const feedback = document.querySelector('#form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = 'Please complete all fields with valid information before continuing.';
        feedback.setAttribute('data-state', 'error');
        return;
      }
      feedback.textContent = 'Your entries passed the browser checks. This demonstration does not send or store your enquiry; please contact the organisation directly.';
      feedback.setAttribute('data-state', 'success');
    });
  }
});