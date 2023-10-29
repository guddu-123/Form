let selectedCountry = '';
const countryDropdown = document.getElementById("country");
countryDropdown.addEventListener("change", function() {
     selectedCountry = countryDropdown.value;
});

function myFunction ()
{
    var fname=document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phoneno").value;



    function getSelectedGender() {
        const maleRadio = document.getElementById("male");
        const femaleRadio = document.getElementById("female");
        const otherRadio = document.getElementById("others");
        if (maleRadio.checked) {
            return "Male";
        } else if (femaleRadio.checked) {
            return "Female";
        } else if (otherRadio.checked) {
            return "Other";
        }
    }
    const selectedGender = getSelectedGender();
    function getSelectedProfession() {
        const SeRadio = document.getElementById("SE");
        const BmRadio = document.getElementById("BM");
        const FmRadio = document.getElementById("FM");
        if (SeRadio.checked) {
            return "Software Engineer";
        } else if (BmRadio.checked) {
            return "Bussiness Man";
        } else if (FmRadio.checked) {
            return "Farmer";
        }
    }

    const selectedProfession = getSelectedProfession();

    if(selectedCountry != null)
    {
        alert(`        First Name: ${fname}
        Last Name: ${lname}
        DOB: ${dob}
        Gender: ${selectedGender}
        Country: ${selectedCountry}
        Profession: ${selectedProfession}
        Email: ${email}
        Phone.No: ${phoneNo}`);
    }
    else{
        alert(`        First Name: ${fname}
        Last Name: ${lname}
        Gender: ${selectedGender}
        Profession: ${selectedProfession}
        Email: ${email}
        Phone.No: ${phoneNo}`);
    }
    document.getElementById("myForm").reset();

}