// JavaScript to toggle the menu visibility on mobile
        document.getElementById('menu-button').addEventListener('click', function () {
            var menu = document.getElementById('menu');
            menu.classList.toggle('hidden');
        });

        // JavaScript to change background color
        function changeBackgroundColor(hexColor) {
            document.getElementById('body').style.backgroundColor = hexColor;
            document.querySelector('.navbar').style.backgroundColor = hexColor;
        }

        // JavaScript for sliders
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        // JavaScript to bring interactive elements to project sections
        function showModal(id) {
            document.getElementById(id).classList.add('show');
        }

        function closeModal(id) {
            document.getElementById(id).classList.remove('show');
        }

        function openModal(id) {
            document.getElementById(id).style.display = 'flex';
        }

        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
        }

        // JavaScript for search functionality
        function search() {
            const searchInput = document.getElementById('search-input').value.toLowerCase();
            const projectTitles = document.querySelectorAll('.project-title');
            projectTitles.forEach(title => {
                if (title.textContent.toLowerCase().includes(searchInput)) {
                    title.closest('.project-card').style.display = 'block';
                } else {
                    title.closest('.project-card').style.display = 'none';
                }
            });
        }

        document.getElementById('search-button').addEventListener('click', search);
        document.getElementById('search-input').addEventListener('input', search);