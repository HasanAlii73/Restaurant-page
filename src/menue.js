export function menuePageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = '';

    const div = document.createElement("div");
    div.className = "contentContainer";
    div.innerHTML = `<h1>Menue</h1>
        <div class="dishes">
            <div class="dish dish1">
                <div class="dishName">Classic Chicken Shawarma Wrap</div>
                <div class="dishDesc">
                    Description: Tender, marinated chicken, slow-roasted to perfection.
                </div>
                <div class="dishIngs">
                    Includes: Garlic sauce, pickles, fries, and fresh veggies in a warm pita.
                </div>
            </div>
            <div class="dish dish2">
                <div class="dishName">Beef Shawarma Plate</div>
                <div class="dishDesc">
                    Description: Juicy, spiced beef slices cooked on a vertical rotisserie. 
                </div>
                <div class="dishIngs">
                    Includes: Served with rice, hummus, grilled tomatoes, and garlic sauce.
                </div>
            </div>
            <div class="dish dish3">
              <div class="dishName">Falafel Veggie Shawarma</div>
              <div class="dishDesc">
                Description: Crispy falafel with authentic Middle Eastern spices.
            </div>
                <div class="dishIngs">
                    Includes: Tahini, lettuce, tomatoes, and pickles in a whole wheat wrap.
                </div>
            </div>
            <div class="dish dish4">
              <div class="dishName">Mixed Grill Shawarma Platter</div>
              <div class="dishDesc">
                Description: A combo of chicken and beef shawarma with smoky flavors.
                </div>
                <div class="dishIngs">
                    Includes: Grilled veggies, garlic dip, fries, and fresh pita bread.
                </div>
            </div>
            <div class="dish dish5">
              <div class="dishName">Spicy Lamb Shawarma Wrap</div>
              <div class="dishDesc">
                Description: Succulent lamb with a kick of chili and aromatic spices.
                </div>
                <div class="dishIngs">
                    Includes: Hot sauce, parsley, onions, and sumac in a toasted flatbread.
                </div>
            </div>
            <div class="dish dish6">
              <div class="dishName">Cheesy Shawarma Manakeesh</div>
              <div class="dishDesc">
                Description: Flatbread topped with shawarma meat and melted cheese.
                </div>
                <div class="dishIngs">
                    Includes: Mozzarella, garlic paste, and a side of tangy yogurt sauce.
                </div>
            </div>
        </div>`;

        content.appendChild(div);
}