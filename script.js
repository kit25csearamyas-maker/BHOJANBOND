const form = document.getElementById("donationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values (optional)
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;
    const phone = document.getElementById("phone").value;

    // Display success message
    message.innerHTML = "✅ Donation Submitted Successfully!";
    message.style.color = "green";
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";

    // Clear the form
    form.reset();
});
