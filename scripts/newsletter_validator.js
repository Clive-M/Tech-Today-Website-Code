function validateForm() {
    const email_text_box = document.forms["newsletterForm"]["email"];
    const ai_checkbox = document.getElementById("inlineCheckbox1")
    const business_checkbox = document.getElementById("inlineCheckbox2")
    const automation_checkbox = document.getElementById("inlineCheckbox3")
    const company_updates_checkbox = document.getElementById("inlineCheckbox4")
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (email_text_box.value == null || email_text_box.value == "") {
        alert("Signup Failed, Please Ensure You Have Entered Your Email");
        return false;
    } else if (!ai_checkbox.checked && !business_checkbox.checked && !automation_checkbox.checked && !company_updates_checkbox.checked) {
        alert("Please Select At Least One News Filter");
        return false;
    } else if (!emailRegex.test(email_text_box.value)) {
        alert("Incorrect Email");
    } else {
        alert("User Signed Up");
        return true;
    }
}