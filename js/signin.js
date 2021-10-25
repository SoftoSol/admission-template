function signin(role){
    if(role==1) window.location.href="../pages/student/admission-form.html";
    else window.location.href="../pages/admin/dashboard.html";
}

function verifyEmail(){
    window.location.href="../pages/student/admission-form.html";
}


function signup(){
    //setTimeout(() => {
        window.location.href="../pages/verify-email.html";
    //}, 1000);
}