export function aboutPageLoad(){
    const content = document.querySelector("#content");
    content.innerHTML = '';

    const div = document.createElement("div");
    div.className = "about";
    div.innerHTML = `<div class="div1 aboutDiv">
            <div class="aboutHeader">Who Are We?</div>
            <div class="aboutDesc">
                In our Syrian Restaurant, we are dedicated in honing our craft of making Shawarma to spread the Syrian culture to our customers. We started this business in making Shawarma through our love of Syria's rich traditional culture. Hence, we believe the best way to spread our culture is by serving out famous local delicacy, Shawarma!
            </div>
        </div>
        <div class="div2 aboutDiv">
            <div class="aboutHeader">What We Do?</div>
            <div class="aboutDesc">We specialise in making Shawarma. From the Classic Chicken Shawarma Wrap, to the Spicy Lamb Shawarma Wrap and Falafel Veggie Shawarma, there will always be Shawarma catered to your preference. Every Shawarma we make is prepared with utmost precision and detail as to us, our customers experience is our top priority, and thats what makes us stand out.</div>
        </div>
        <div class="div3 aboutDiv">
            <div class="aboutHeader">Why We're Here?</div>
            <div class="aboutDesc">We're here to make an impact on our local community. Apart from spreading the Syrian culture, we also want our customers to have a great time in our restaurant. Our restaurant provides an ideal setting for our customers to unwind and connect with others whilst consuming Shawarma.</div>
        </div>`;

        content.appendChild(div);
}