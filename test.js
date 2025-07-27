const inactiveBtns =  document.querySelectorAll(".inactive");
const olcontainer = document.querySelector("#label-0");
olcontainer.textContent = 0;
let count = Number(olcontainer.textContent);
inactiveBtns.forEach(function(inactiveBtn) {
        
    inactiveBtn.addEventListener("click", function AddCart(e) {
        if ( !inactiveBtn.classList.contains("active" ) ) {


            inactiveBtn.classList.add("active");

            const eventTarget = e.target.parentElement;
            console.log(eventTarget)

            const cartimg = eventTarget.querySelector(".cart-image");
            const addtext = eventTarget.querySelector(".add");
            const incquant = eventTarget.querySelector("#inc-0");
           
            const olContainer = eventTarget.querySelector(".ol-container");
            const decquant = eventTarget.querySelector("#dec-0");
    
           

            cartimg.classList.add("hide");
            addtext.classList.add("hide");
            decquant.classList.remove("hide");   
            olContainer.classList.remove("hide"); /* the div not containing the label or the id = label-0 */
            incquant.classList.remove("hide"); 
            

            eventTarget.querySelector(".dessert-img").style.border = "2px solid #c73a0f";

            // this.disabled = true;
            inactiveBtn.removeEventListener("click", AddCart);

           

            const cartEmpty = document.querySelector(".cart");
            const confirmCart = document.querySelector(".confirm-order-section");
            const cartItems = document.querySelector(".cart-number");
            

            cartItems.textContent = Number(olContainer.textContent);
            
            if (Number(olcontainer.textContent) > 0) {
                cartEmpty.classList.add("hide");
                confirmCart.classList.remove("hide");
            }

            incquant.addEventListener("click", function () {
                globalCount++;
                olcontainer.textContent = globalCount;
                cartItems.textContent = Number(olContainer.textContent);
            });

            // if (e.target.classList.contains("dessert")) {
            //     clickCount++;
            //     console.log("button clicked");
            // }

            decquant.addEventListener("click", function () {
                if ( globalCount > 0 )  {
                    globalCount--;
                    olcontainer.textContent = globalCount;
                    cartItems.textContent = globalCount;
                }

                if ( globalCount === 0 ) {
                    cartEmpty.classList.remove("hide");
                    confirmCart.classList.add("hide");
                }
            });
        }

    });
});

