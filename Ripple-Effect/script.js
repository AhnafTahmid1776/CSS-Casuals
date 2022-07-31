const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click',function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop//from where it starts-offset
        const buttonLeft = e.target.offsetLeft//from where it starts-offset

        const xInside = x- buttonLeft
        const yInside = y- buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})