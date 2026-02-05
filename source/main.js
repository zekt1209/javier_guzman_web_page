        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación básica
            if (!nombre || !telefono || !email) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
                return;
            }

            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
                return;
            }

            // Simulación de envío exitoso
            formMessage.className = 'form-message success';
            formMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
            
            // Limpiar formulario
            this.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);

            // Aquí irían las llamadas reales a tu backend
            console.log('Datos del formulario:', {
                nombre,
                telefono,
                email,
                mensaje
            });
        });

        // Smooth scroll para enlaces del menú
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });