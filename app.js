var buttonClickSlide = document.querySelector(".next-button")
var buttonClickSlideBack = document.querySelector(".back-button")
buttonClickSlide.addEventListener('click',function handleSlide() {
    let lists = document.querySelectorAll('.item-slide')
    document.getElementById('slide').appendChild(lists[0])
})
buttonClickSlideBack.addEventListener('click',function handleSlide() {
    let lists = document.querySelectorAll('.item-slide')
    document.getElementById('slide').prepend(lists[lists.length - 1])
})
