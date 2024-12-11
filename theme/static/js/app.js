document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');

                // Optional: Change toggle icon
                const svg = mobileMenuToggle.querySelector('svg');
                if (mobileMenu.classList.contains('hidden')) {
                    svg.innerHTML = `
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    `;
                } else {
                    svg.innerHTML = `
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    `;
                }
            });
        });