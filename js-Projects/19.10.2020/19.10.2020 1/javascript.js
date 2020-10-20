// function validatephone()
// {
//    var phone = document.getElementById=('phone'),value;
//    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
//    var phoneResult = phoneRGEX.test(phone);
//    alert("phone:"+phoneResult )
// }
//  function



        function checkName() {

            var regex = /(\b[a-z](?!\s))/g;
            var txt = document.getElementById("name").value;
            txt = txt.replace(regex, function (x) { return x.toUpperCase(); });

            txt = txt.replace("Al", "Al -");




            document.getElementById("name").value = txt;


        }


        function checkPhone() {




            document.getElementById("phone").value = document.getElementById("phone").value.replace(/\D/g, '');

            function convert() {



                var match = document.getElementById("phone").value.match(/^(\d{3})(\d{3})(\d{4})$/);

                return match[1] + '-' + match[2] + '-' + match[3];

            }



            document.getElementById("phone").value = convert();

        }


        function email() {

            if (!((document.getElementById("email").value).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) && document.getElementById("email").value != "") {


                document.getElementById("email").style.boxShadow = " 0 0 10px red";
                document.getElementById("email").style.color = "red";


            } else {
                document.getElementById("email").style.boxShadow = " none";
                document.getElementById("email").style.color = "initial";
            }

        }



        function password() {
            if (!((document.getElementById("password").value).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) && document.getElementById("password").value != "") {


                document.getElementById("password").style.boxShadow = " 0 0 10px red";
                document.getElementById("password").style.color = "red";


            } else {
                document.getElementById("password").style.boxShadow = " none";
                document.getElementById("password").style.color = "initial";
            }




           
        }



