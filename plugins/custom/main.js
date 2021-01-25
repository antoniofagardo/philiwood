$('.contact1-form').on('submit', function (e) {
    //optional validation code here
    console.log("Stopping event propagation");
    e.preventDefault();
    console.log("Sending ajax request");
    $.ajax({
        url: $('.contact1-form')[0].getAttribute("action"),
        method: "POST",
        dataType: "json",
        data: $(".contact1-form").serialize(),
        success: function (response) {
            if (response.result == "success") {
                $('.contact1-form')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function () {
            alert("Something went wrong. Please try again.")
        }
    })
});