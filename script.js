async function products(filtro=""){
  let url = "https://diwserver.vps.webdock.cloud/products"
  if(filtro){
 url+=`/category/${filtro}`
  }
  let products = await fetch(url)
    products = await products.json()
    console.log (products)
    trocacards(products)
    
}

function trocacards(products){
    for (let i=1; i<=9;i++){
        document.getElementById(`${i}`).innerHTML=` <div class="card" >
        <img src="" class="card-img-top" alt=""-->
      
        <div class="card-body">
          <h5 class="card-title">${products['products'][i]['title']} </h5>
          <p class="texto-menor">
            <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
           </p>
          <p class="card-text">R$${products['products'][i]['price']} </p>
          
        </div>
      </div>
      
      <div class="card" aria-hidden="true">
        <img src="${products['products'][i]['image']} " class="card-img-top" alt=""-->
        <div class="card-body">
          <a " class="btn btn-primary">COMPRAR</a>
          </p>
        </div>
      </div>` 
    }
}

async function detalhes1(){
var id =30565
let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
    products = await products.json()
    console.log(products)
   document.getElementById(`10`).innerHTML=` <div>
   <h2>${products['title']}</h2>

   <br><br><br>
   
<div class="container text-center">
<div class="row row-cols-2">
<div class="col">
 <img src="${products['image']}"width='450px' alt="">
</div>
<div class="col">
 <h9>Vendido e entregue Navarro Store </h9>

<h9>À vista no PIX com até 5% OFF </h9>
<p>
<h2>R$ ${products['price']}</h2></p>
<p>

</p>

<button type="button" class="btn btn-primary btn-lg">COMPRAR</button>

</div>
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
DESCRIÇÃO DO PRODUTO
 </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
 <div class="accordion-body">
   <strong></strong> ${products['description']}

   
   
    
 </div>

 </div>
</div>
</div>`


}
async function detalhes2(){
    var id =30566
    let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
        products = await products.json()
        console.log(products)
       document.getElementById(`10`).innerHTML=` <div>
       <h2>${products['title']}</h2>
    
       <br><br><br>
       
    <div class="container text-center">
    <div class="row row-cols-2">
    <div class="col">
     <img src="${products['image']}"width='450px' alt="">
    </div>
    <div class="col">
     <h9>Vendido e entregue Navarro Store </h9>
    
    <h9>À vista no PIX com até 5% OFF </h9>
    <p>
    <h2>R$ ${products['price']}</h2></p>
    <p>
    
    </p>
    
    <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
    
    </div>
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    DESCRIÇÃO DO PRODUTO
     </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
     <div class="accordion-body">
       <strong></strong> ${products['description']}
    
       
       
        
     </div>
    
     </div>
    </div>
    </div>`
    
    
    }
    async function detalhes3(){
        var id =30567
        let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
            products = await products.json()
            console.log(products)
           document.getElementById(`10`).innerHTML=` <div>
           <h2>${products['title']}</h2>
        
           <br><br><br>
           
        <div class="container text-center">
        <div class="row row-cols-2">
        <div class="col">
         <img src="${products['image']}"width='450px' alt="">
        </div>
        <div class="col">
         <h9>Vendido e entregue Navarro Store </h9>
        
        <h9>À vista no PIX com até 5% OFF </h9>
        <p>
        <h2>R$ ${products['price']}</h2></p>
        <p>
        
        </p>
        
        <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
        
        </div>
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        DESCRIÇÃO DO PRODUTO
         </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
         <div class="accordion-body">
           <strong></strong> ${products['description']}
        
           
           
            
         </div>
        
         </div>
        </div>
        </div>`
        
        
        }
        async function detalhes4(){
            var id =30568
            let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                products = await products.json()
                console.log(products)
               document.getElementById(`10`).innerHTML=` <div>
               <h2>${products['title']}</h2>
            
               <br><br><br>
               
            <div class="container text-center">
            <div class="row row-cols-2">
            <div class="col">
             <img src="${products['image']}"width='450px' alt="">
            </div>
            <div class="col">
             <h9>Vendido e entregue Navarro Store </h9>
            
            <h9>À vista no PIX com até 5% OFF </h9>
            <p>
            <h2>R$ ${products['price']}</h2></p>
            <p>
            
            </p>
            
            <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
            
            </div>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            DESCRIÇÃO DO PRODUTO
             </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
             <div class="accordion-body">
               <strong></strong> ${products['description']}
            
               
               
                
             </div>
            
             </div>
            </div>
            </div>`
            
            
            }
            async function detalhes5(){
                var id =30569
                let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                    products = await products.json()
                    console.log(products)
                   document.getElementById(`10`).innerHTML=` <div>
                   <h2>${products['title']}</h2>
                
                   <br><br><br>
                   
                <div class="container text-center">
                <div class="row row-cols-2">
                <div class="col">
                 <img src="${products['image']}"width='450px' alt="">
                </div>
                <div class="col">
                 <h9>Vendido e entregue Navarro Store </h9>
                
                <h9>À vista no PIX com até 5% OFF </h9>
                <p>
                <h2>R$ ${products['price']}</h2></p>
                <p>
                
                </p>
                
                <button  type="button" class="btn btn-primary btn-lg">COMPRAR</button>
                
                </div>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                DESCRIÇÃO DO PRODUTO
                 </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <strong></strong> ${products['description']}
                
                   
                   
                    
                 </div>
                
                 </div>
                </div>
                </div>`
                
                
                }
                async function detalhes6(){
                    var id =30570
                    let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                        products = await products.json()
                        console.log(products)
                       document.getElementById(`10`).innerHTML=` <div>
                       <h2>${products['title']}</h2>
                    
                       <br><br><br>
                       
                    <div class="container text-center">
                    <div class="row row-cols-2">
                    <div class="col">
                     <img src="${products['image']}"width='450px' alt="">
                    </div>
                    <div class="col">
                     <h9>Vendido e entregue Navarro Store </h9>
                    
                    <h9>À vista no PIX com até 5% OFF </h9>
                    <p>
                    <h2>R$ ${products['price']}</h2></p>
                    <p>
                    
                    </p>
                    
                    <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
                    
                    </div>
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    DESCRIÇÃO DO PRODUTO
                     </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                       <strong></strong> ${products['description']}
                    
                       
                       
                        
                     </div>
                    
                     </div>
                    </div>
                    </div>`
                    
                    
                    }
                    async function detalhes7(){
                        var id =30571
                        let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                            products = await products.json()
                            console.log(products)
                           document.getElementById(`10`).innerHTML=` <div>
                           <h2>${products['title']}</h2>
                        
                           <br><br><br>
                           
                        <div class="container text-center">
                        <div class="row row-cols-2">
                        <div class="col">
                         <img src="${products['image']}"width='450px' alt="">
                        </div>
                        <div class="col">
                         <h9>Vendido e entregue Navarro Store </h9>
                        
                        <h9>À vista no PIX com até 5% OFF </h9>
                        <p>
                        <h2>R$ ${products['price']}</h2></p>
                        <p>
                        
                        </p>
                        
                        <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
                        
                        </div>
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        DESCRIÇÃO DO PRODUTO
                         </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                         <div class="accordion-body">
                           <strong></strong> ${products['description']}
                        
                           
                           
                            
                         </div>
                        
                         </div>
                        </div>
                        </div>`
                        
                        
                        }
                        async function detalhes8(){
                            var id =30572
                            let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                                products = await products.json()
                                console.log(products)
                               document.getElementById(`10`).innerHTML=` <div>
                               <h2>${products['title']}</h2>
                            
                               <br><br><br>
                               
                            <div class="container text-center">
                            <div class="row row-cols-2">
                            <div class="col">
                             <img src="${products['image']}"width='450px' alt="">
                            </div>
                            <div class="col">
                             <h9>Vendido e entregue Navarro Store </h9>
                            
                            <h9>À vista no PIX com até 5% OFF </h9>
                            <p>
                            <h2>R$ ${products['price']}</h2></p>
                            <p>
                            
                            </p>
                            
                            <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
                            
                            </div>
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DESCRIÇÃO DO PRODUTO
                             </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                             <div class="accordion-body">
                               <strong></strong> ${products['description']}
                            
                               
                               
                                
                             </div>
                            
                             </div>
                            </div>
                            </div>`
                            
                            
                            }
                            async function detalhes9(){
                                var id =30573
                                let products = await fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
                                    products = await products.json()
                                    console.log(products)
                                   document.getElementById(`10`).innerHTML=` <div>
                                   <h2>${products['title']}</h2>
                                
                                   <br><br><br>
                                   
                                <div class="container text-center">
                                <div class="row row-cols-2">
                                <div class="col">
                                 <img src="${products['image']}"width='450px' alt="">
                                </div>
                                <div class="col">
                                 <h9>Vendido e entregue Navarro Store </h9>
                                
                                <h9>À vista no PIX com até 5% OFF </h9>
                                <p>
                                <h2>R$ ${products['price']}</h2></p>
                                <p>
                                
                                </p>
                                
                                <button type="button" class="btn btn-primary btn-lg">COMPRAR</button>
                                
                                </div>
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                DESCRIÇÃO DO PRODUTO
                                 </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                 <div class="accordion-body">
                                   <strong></strong> ${products['description']}
                                
                                   
                                   
                                    
                                 </div>
                                
                                 </div>
                                </div>
                                </div>`
                                
                                
                                }
             function pesquisa(){
              localStorage.setItem('s',document.getElementById('searchbar').value)
            }
            async function search1(){
              var search2 = localStorage.getItem('s')
            if(search2 && search2 !=="null"){
            document.getElementById('searchbar2').value= search2
          var search3 = document.getElementById('searchbar2').value
          var searchproducts=await fetch("https://diwserver.vps.webdock.cloud/products")
          searchproducts= await searchproducts.json()
        searchproducts= searchproducts['products']
        var receberpesq = filtrarproducts(search3,searchproducts)
        console.log (receberpesq)
        pesquisapi(receberpesq)
        }
        else{
          var recebido = document.getElementById('searchbar2').value 
          if (!recebido){}
          else{
        }
            }
            function filtrarproducts(q,receberproducts){
              var recebertexto= q.toLowerCase()
              var receberresultado= receberproducts.filter(function(j){
                var titulo = j.title.toLowerCase()
                return titulo.includes(recebertexto)
              })
              return receberresultado
            }
          

         
           
          }
      async function pesquisahome(){
       var search3 = document.getElementById('searchbar2').value
        var searchproducts=await fetch("https://diwserver.vps.webdock.cloud/products")
        searchproducts= await searchproducts.json()
      searchproducts= searchproducts['products']
      var receberpesq = filtrarproducts(search3,searchproducts)
console.log (receberpesq)
pesquisapi(receberpesq)

      }

      function pesquisapi(receberpesq1){
        var products2=receberpesq1
      for (let i=1; i<=6;i++){
        document.getElementById(`${(i+3)}`).innerHTML=` <div class="card" >
        <img src="" class="card-img-top" alt=""-->
      
        <div class="card-body">
          <h5 class="card-title">${products2[i-1]['title']} </h5>
          <p class="texto-menor">
            <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
           </p>
          <p class="card-text">R$${products2[i-1]['price']} </p>
          
        </div>
      </div>
      
      <div class="card" aria-hidden="true">
        <img src="${products2[i-1]['image']} " class="card-img-top" alt=""-->
        <div class="card-body">
          <a " class="btn btn-primary">COMPRAR</a>
          </p>
        </div>
      </div>` 
    }
}
 function filtro(){
  var f1 = document.getElementById('f1').value
  console.log(f1)
  products(f1);
 }
 