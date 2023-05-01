export async function getUser(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));    

    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    }

    const response =  await fetch(`http://localhost:8000/600/users/${cbid}`, requestOptions)
    const data = await response.json();
    return data 

}


export async function getUserOrder(){

    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid")); 

    const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}` , {
      method : "GET" , 
      headers : {"Content-Type" : "application/json" , Authorization : `Bearer ${token}`}
      
      });

      const data = await response.json()

      return data

}

export async function createOrder(cartList , total , user){

    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));   


    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const response = await fetch("http://localhost:8000/660/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    });
    const data = await response.json();
    
    return data

}