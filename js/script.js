// const titles = document.querySelectorAll(".accordion-title");
// const content = document.querySelector(".accordion-content");
const checkBox = document.querySelector("input[type='checkbox']");
const accordion = document.querySelectorAll(".accordion-item");

window.addEventListener('load', () => {
    accordion.forEach((acc) => {
        const title = acc.querySelector(".accordion-title");
        const content = acc.querySelector(".accordion-content");
        title.addEventListener('click', (e) => {
            if(checkBox.checked){
                if(content.classList.contains("open")){
                    content.classList.remove("open");
                    title.classList.remove("open");
                } else {
                    content.classList.add("open");
                    title.classList.add("open");
                }
            }
            else {
                accordion.forEach((a) => {
                    const title1 = a.querySelector(".accordion-title");
                    const content1 = a.querySelector(".accordion-content");
                    if(title !== title1 && content1.classList.contains("open")) {
                        content1.classList.remove("open");
                        title1.classList.
                        remove("open")
                    }
                    title.classList.add("open")
                    content.classList.add("open")
                })
            }
          
        })
    });
})