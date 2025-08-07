    //función para activar el link cuando pase el cursor por encima de la opción del menú
        var lista = document.querySelectorAll('.nav li');
        function activarLink(){
            lista.forEach((item)=> 
            item.classList.remove('active'));
            this.classList.add('active');
        }
        lista.forEach((item)=>
            item.addEventListener('mouseover', activarLink));

        //función para ocultar el menú
        var toggle = document.querySelector('.toggle');
        var nav = document.querySelector('.nav');
        var container = document.querySelector('.container');

        toggle.onclick = function(){
            nav.classList.toggle('active');
            container.classList.toggle('active');
        }