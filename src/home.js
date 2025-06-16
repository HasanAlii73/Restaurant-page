export function homePageLoad(shawarmaImg) {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    
    const div1 = document.createElement("div");
    div1.className = "contentContainer";
    div1.innerHTML = `
        <div class="contentContainer">
            <h1>Serving you the best Shawarma the country has to offer</h1>
            <p>Shawarma is a popular dish originating from the Middle East. It’s a popular street food that is traditionally made in the form of spiced meats that are stacked on a vertical rotisserie with thin slices shaved off as it rotates. But don’t worry! We can cook our horizontally in a good old pan or on the BBQ!</p>
            <button class="orderBtn">Order Now!</button>
        </div>
    `;

    const div2 = document.createElement("div");
    div2.className = "imgContainer";

    const image = document.createElement("img");
    image.src = shawarmaImg;
    image.className = "image";
    div2.appendChild(image);

    content.appendChild(div1);
    content.appendChild(div2);
    
}