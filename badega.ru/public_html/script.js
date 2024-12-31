document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('.elements img');

    
    function adjustContainerHeight() {
        const viewportHeight = window.innerHeight; 
        container.style.height = `${viewportHeight}px`;
    }

    
    adjustContainerHeight();

   
    window.addEventListener('resize', adjustContainerHeight);

    
    images.forEach(image => {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const maxX = containerWidth - image.offsetWidth; 
        const maxY = containerHeight - image.offsetHeight; 

        let positionX = Math.random() * maxX;
        let positionY = Math.random() * maxY;
        let velocityX = (Math.random() - 0.5) * 2; 
        let velocityY = (Math.random() - 0.5) * 2; 

        function move() {
            positionX += velocityX;
            positionY += velocityY;

            if (positionX <= 0 || positionX >= maxX) {
                velocityX = -velocityX; 
            }
            if (positionY <= 0 || positionY >= maxY) {
                velocityY = -velocityY; 
            }

            image.style.transform = `translate(${positionX}px, ${positionY}px)`;

            requestAnimationFrame(move);
        }

        move();
    });
});

