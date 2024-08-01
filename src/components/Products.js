import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Products (){
    return(
        <div class="recommened">
        <h1 class="recommened__tittle">Recommened For You</h1>
        <p>pick the best fit</p>
        <div class="recommened__container">
            <div class="course-card">
                <img src={c1}/>
                <h3>2023 python Data visualisation masterclass</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c2} alt="img"/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>2190</del></p>
            </div>
            <div class="course-card">
                <img src={c3} alt="img"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={c4} alt="img"/>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>col steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>888</del></p>
            </div>
        </div>
    </div>
    )
}

export default Products