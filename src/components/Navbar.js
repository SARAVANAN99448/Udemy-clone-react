function Navbar(){
    return( <div class="navbar">
      <div class="navbar__s1">
          <h1 class="navbar__s1__tittle">Udemy</h1>
      </div>
      <div class="navbar__s2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for anything here. Tech, bussiness,Art....."/>
  
      </div>
      <div class="navbar__s3">
          <p>courses</p>
          <div class="mylearning">
              <p>My Coureses</p>
              <div class="mylearning__popup">
                  <p>you didn't purchase anything yet</p>
              </div>
          </div>
  
          <i class="fa-solid fa-cart-shopping" style={{color:"#0c0d0d"}}></i>
          <i class="fa-solid fa-bell"  style={{color:"#0f0f0f"}}></i>
          <i class="fa-solid fa-user"   style={{color:"#1a1a19"}}></i>
  
      </div>
      <div class="navbar__s4">
          <i class="fa-solid fa-bars"></i>
      </div>
  
  </div>)
  
  }

  export default Navbar