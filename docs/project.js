const copyButton = document.querySelector('.copy-button');

if (copyButton) {
    copyButton.addEventListener('click', async () => {
        const targetId = copyButton.getAttribute('data-copy-target');
        const target = targetId ? document.getElementById(targetId) : null;

        if (!target) {
            return;
        }

        try {
            await navigator.clipboard.writeText(target.textContent.trim());
            copyButton.classList.add('is-copied');
            copyButton.querySelector('span').textContent = 'Copied';
            window.setTimeout(() => {
                copyButton.classList.remove('is-copied');
                copyButton.querySelector('span').textContent = 'Copy';
            }, 1600);
        } catch (error) {
            copyButton.querySelector('span').textContent = 'Select text';
        }
    });
}
