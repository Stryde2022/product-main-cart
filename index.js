const addToCartBtns = document.querySelectorAll(".add-btn")
console.log(addToCartBtns)


addToCartBtns.forEach((addToCartBtn) => {
    addToCartBtn.addEventListener("click", function() {
        if (addToCartBtn.classList.contains("inactive")) {
            
            addToCartBtn.classList.add('active')
            addToCartBtn.classList.remove('add')
            addToCartBtn.classList.remove('hide')
        }
    })
})
