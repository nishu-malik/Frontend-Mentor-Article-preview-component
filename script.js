

   var share = document.getElementsByClassName("btn-submit");
 
   
   share[0].addEventListener('click',()=>{
       console.log('clicked');
       let div = document.getElementsByClassName('row-3');
        let arrow = document.getElementsByClassName('arrow');
        let toogle = document.getElementsByClassName('share');
        let btn = document.getElementsByClassName('toggle');
        let svg = document.getElementsByClassName('svg');
        div[0].classList.toggle('hide');
        arrow[0].classList.toggle('hide');
        toogle[0].classList.toggle('color-change')
        btn[0].classList.toggle('color-change')   
        svg[0].classList.toggle('arrow-svg')   
   })
