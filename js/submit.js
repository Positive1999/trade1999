
  //contact
function submit() {
    var shopEmail = "hieutran11525@gmail.com";
    var subject = "Liên hệ mới từ khách hàng";
  
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
  
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
  
    var phoneInput = document.getElementById('phone');
    var phone = phoneInput.value;

    var messageInput = document.getElementById('message');
    var message = messageInput.value;
  
    if (name === '' || email === '' || message === '' || phone === '') {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return; // Stop further execution
    }
  
    var body = "Thông báo mới:\n\nTên người dùng: " +
      name + "\nEmail: " + email + "\nPhone : "+ phone + "\nMessage: " + message;
  
    var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  // het contact