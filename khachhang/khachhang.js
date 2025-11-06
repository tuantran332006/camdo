 const name=document.getElementById("name").value.trim();
        const monney=document.getElementById("monney").value.trim();
        const phone=document.getElementById("phonenumber").value.trim();
        const goi=document.getElementById("goivay").value;
        const taisan=document.getElementById("taisan").value;
        const k=document.getElementById("input");
   k.addEventListener("submit", function(e) {
            e.preventDefault(); 
            console.log("form dh");
            // Ngăn load lại trang
            
            console.log("Button clicked!"); 
        console.log("Name:", name);
            console.log("Money:", money);
            console.log("Phone:", phone);
            console.log("Goi:", goi);
            console.log("Taisan:", taisan);

        const checkphone=/^[0-9]{10}$/;
        const checkname=/^[\w-.]$/;
        const checkmonney=/^[0-9]{1,3}[0-9]{3}000$/;

            if(!phone.test(checkphone) || !money.test(checkmoney) || !name.test(checkname)){
                alert("Thông tin nhập không hợp lệ!");
                return;
            }
            
            alert("Thông tin đã được gửi thành công!");
    });