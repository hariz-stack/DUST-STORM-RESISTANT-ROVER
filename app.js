// Mars Rover Presentation - Interactive Controls

class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.init();
    }

    init() {
        this.updateSlideCounter();
        this.updateProgressBar();
        this.attachEventListeners();
        this.initPowerDeclineChart();
    }

    attachEventListeners() {
        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.previousSlide());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'Home') this.goToSlide(1);
            if (e.key === 'End') this.goToSlide(this.totalSlides);
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        if (startX - endX > swipeThreshold) {
            this.nextSlide();
        } else if (endX - startX > swipeThreshold) {
            this.previousSlide();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideNumber) {
        // Remove active class from current slide
        this.slides[this.currentSlide - 1].classList.remove('active');
        
        // Add prev class if going backwards
        if (slideNumber < this.currentSlide) {
            this.slides[this.currentSlide - 1].classList.add('prev');
            setTimeout(() => {
                this.slides[this.currentSlide - 1].classList.remove('prev');
            }, 600);
        }

        // Update current slide
        this.currentSlide = slideNumber;

        // Add active class to new slide
        this.slides[this.currentSlide - 1].classList.add('active');

        // Update UI
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateNavigationButtons();
    }

    updateSlideCounter() {
        document.getElementById('currentSlide').textContent = this.currentSlide;
        document.getElementById('totalSlides').textContent = this.totalSlides;
    }

    updateProgressBar() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.disabled = this.currentSlide === 1;
        nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    initPowerDeclineChart() {
        const canvas = document.getElementById('powerDeclineChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 300;

        // Draw power decline graph
        ctx.fillStyle = 'rgba(0, 217, 255, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = (canvas.height / 5) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Power decline curve
        ctx.strokeStyle = '#ff3864';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        const points = [
            { x: 0, y: 50 },
            { x: 100, y: 60 },
            { x: 200, y: 80 },
            { x: 300, y: 110 },
            { x: 400, y: 150 },
            { x: 500, y: 180 },
            { x: 600, y: 220 },
            { x: 700, y: 250 },
            { x: 800, y: 280 }
        ];

        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();

        // Fill area under curve
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 56, 100, 0.2)';
        ctx.fill();

        // Labels
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Inter';
        ctx.fillText('100% Power', 10, 70);
        ctx.fillText('Mission Start', 10, canvas.height - 10);
        ctx.fillText('0% Power', canvas.width - 80, canvas.height - 10);
        ctx.fillText('Mission End (Dec 2022)', canvas.width - 180, canvas.height - 10);
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PresentationController();
    
    // Add animation classes to elements as they appear
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in-item, .stat-card, .lesson-card').forEach(el => {
        observer.observe(el);
    });

    console.log('🚀 Mars Rover Presentation Loaded');
    console.log(`📊 Total Slides: ${presentation.totalSlides}`);
});
