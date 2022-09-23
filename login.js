function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
     
    if(u== "") {
    alert("Vui lòng nhập số điện thoại!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
     
    alert("Chúc mừng bạn đăng nhập thành công!")
     
    return true;
    }
    