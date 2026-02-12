// Password modal for protected projects on homepage
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Find the onboarding project card
    const onboardingCard = document.querySelector('a[href="skytab-onboarding.html"]');

    if (!onboardingCard) return;

    // Prevent default navigation
    onboardingCard.addEventListener('click', function(e) {
      e.preventDefault();
      showPasswordModal('skytab-onboarding.html', 'ricky');
    });
  }

  function showPasswordModal(targetUrl, correctPassword) {
    // Check if already verified in session
    const sessionKey = 'password_verified_onboarding';
    const isVerified = sessionStorage.getItem(sessionKey);

    if (isVerified === 'true') {
      window.location.href = targetUrl;
      return;
    }

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.2s ease;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
      background: var(--color-background-primary, #ffffff);
      border-radius: 16px;
      padding: 48px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.3s ease;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Password Required';
    title.style.cssText = `
      margin: 0 0 12px 0;
      font-size: 28px;
      font-weight: 600;
      color: var(--color-text-primary, #1a1a1a);
    `;

    const description = document.createElement('p');
    description.textContent = 'This project is password protected. Please enter the password to continue.';
    description.style.cssText = `
      margin: 0 0 32px 0;
      font-size: 16px;
      color: var(--color-text-secondary, #6b6b6b);
      line-height: 1.6;
    `;

    const input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Enter password';
    input.style.cssText = `
      width: 100%;
      padding: 14px 18px;
      border: 2px solid var(--color-border, #e5e7eb);
      border-radius: 12px;
      font-size: 16px;
      font-family: inherit;
      margin-bottom: 16px;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    `;

    input.addEventListener('focus', function() {
      this.style.borderColor = 'var(--color-accent, #1a1a1a)';
    });

    input.addEventListener('blur', function() {
      this.style.borderColor = 'var(--color-border, #e5e7eb)';
    });

    const errorMsg = document.createElement('p');
    errorMsg.style.cssText = `
      color: #ef4444;
      font-size: 14px;
      margin: -8px 0 16px 0;
      min-height: 20px;
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
      display: flex;
      gap: 12px;
    `;

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.cssText = `
      flex: 1;
      padding: 14px 24px;
      background: transparent;
      color: var(--color-text-secondary, #6b6b6b);
      border: 2px solid var(--color-border, #e5e7eb);
      border-radius: 50px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s ease;
    `;

    cancelButton.addEventListener('mouseover', function() {
      this.style.borderColor = 'var(--color-text-secondary, #6b6b6b)';
    });

    cancelButton.addEventListener('mouseout', function() {
      this.style.borderColor = 'var(--color-border, #e5e7eb)';
    });

    cancelButton.addEventListener('click', function() {
      overlay.remove();
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enter';
    submitButton.style.cssText = `
      flex: 1;
      padding: 14px 24px;
      background: linear-gradient(180deg, #4a4a4a 0%, #1a1a1a 100%);
      color: #ffffff;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.25);
    `;

    submitButton.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 8px 24px 0 rgba(0, 0, 0, 0.3)';
    });

    submitButton.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 14px 0 rgba(0, 0, 0, 0.25)';
    });

    function checkPassword() {
      const enteredPassword = input.value.toLowerCase().trim();
      const correctPass = correctPassword.toLowerCase();

      if (enteredPassword === correctPass) {
        // Store verification in session storage
        sessionStorage.setItem(sessionKey, 'true');

        // Navigate to page
        window.location.href = targetUrl;
      } else {
        errorMsg.textContent = 'Incorrect password. Please try again.';
        input.value = '';
        input.focus();

        // Shake animation
        modal.style.animation = 'shake 0.4s ease';
        setTimeout(() => {
          modal.style.animation = 'slideUp 0.3s ease';
        }, 400);
      }
    }

    submitButton.addEventListener('click', checkPassword);
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });

    // Close on overlay click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        overlay.remove();
      }
    });

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(submitButton);

    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(input);
    modal.appendChild(errorMsg);
    modal.appendChild(buttonContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
      }
    `;
    document.head.appendChild(style);

    // Focus the input
    setTimeout(() => input.focus(), 100);
  }
})();
