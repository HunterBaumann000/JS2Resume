$('#formSubmit').on('click', saveComment);

    var comment;
    var firstName;
    var lastName;
    var email;

    function saveComment() {

        comment = document.getElementById("commentInput").value;

        firstName = document.getElementById("firstNameInput").value;

        lastName = document.getElementById("lastNameInput").value;

        email = document.getElementById("emailInput").value;

    }