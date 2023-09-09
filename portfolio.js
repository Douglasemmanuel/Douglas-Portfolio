(function(){
    emailjs.init("ZxiQ7o3QStyEi2t2Y");
})();

// function sendmail(){
//     let fullName = document.getElementById("name").value;
//     let userEmail = document.getElementById("email").value;
//     let userproject = document.getElementById("project").value;
//     let userMessage = document.getElementById("message").value;

//     var contactParams = {
//         from_name : fullName,
//         from_email : userEmail,
//         project: userproject,
//         message : userMessage,
//     };

//     emailjs.send('service_bg0r2xn','template_kvbmpj6',contactParams).then(function(res) {})

// }
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_x2yobre';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});