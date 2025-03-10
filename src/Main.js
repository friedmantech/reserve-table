import rest from "./images/restaurant-sm.jpg"
import greekSalad from "./images/greek-salad-sm.jpg"
import motorcycle from "./images/motorcycle.jpg"
import bruschetta from "./images/bruschetta-sm.jpg"
import lemonCake from "./images/lemon-cake-lg.jpg"
import reviewer from "./images/reviewer.jpg"
import madrian1 from "./images/madrian1.jpg"
import madrian2 from "./images/madrian2.jpg"

function Main() {
    return (
    <main>
        <section className = "heroArea">
            <article  className = "heroText highlight">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices risus commodo, ultricies eros a, pellentesque mi.
            Suspendisse in gravida arcu, ac ultricies quam. Proin volutpat faucibus quam, at lacinia mi condimentum ac.
            Sed non porttitor tortor. Aliquam erat volutpat.
            Praesent volutpat vehicula diam, sit amet dictum purus.
            Suspendisse varius sapien nisi, pellentesque scelerisque turpis placerat nec.
            Phasellus laoreet metus sodales, pellentesque ex rutrum, auctor nibh.</p>
            <p>Sed non porttitor tortor. Aliquam erat volutpat. Praesent volutpat vehicula diam, sit amet dictum purus. Suspendisse varius sapien nisi, pellentesque scelerisque turpis placerat nec. Phasellus laoreet metus sodales, pellentesque ex rutrum, auctor nibh.</p>
            <button>Reserve a Table</button>
            </article>
            <img src = {rest} alt = "Restaurant Food"  className = "heroImg" />
        </section>
        <section className="specialsHeaderArea">
        <h2>This Week's Specials!</h2><button>Order Online</button>
        </section>
        <section className="specialsArea">
         <article>
         <img src = {greekSalad} alt = "greek salad" className="special" />
         <div className="specialsDetail"><h3>Greek Salad</h3><span className = "price">$12.99</span>
         <p className="specialsText">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
         <b>Order for Delivery</b> <img src = {motorcycle} alt = "motorcycle" className="orderIcon" />
         </div>
         </article>
         <article>
         <img src = {bruschetta} alt = "bruschetta" className="special" />
         <div className="specialsDetail"><h3>Bruschetta</h3><span className = "price">$8.99</span>
         <p className="specialsText">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
         <b>Order for Delivery</b> <img src = {motorcycle} alt = "motorcycle" className="orderIcon" />
         </div>
         </article>
         <article>
         <img src = {lemonCake} alt = "lemon cake" className="special" />
         <div className="specialsDetail"><h3>Lemon Cake</h3><span className="price">$5</span>
         <p className="specialsText">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
         <b>Order for Delivery</b> <img src = {motorcycle} alt = "motorcycle" className="orderIcon" />
         </div>
         </article>
        </section>
        <div class = "highlight"><h2 className="testimonialsHeader">Testimonials</h2>
        <section className="testimonialArea">
        <article className="testimonial">
        <h3>Excellent Food</h3>
        <img src = {reviewer} alt = "reviewer" /> <b>Fred Freeman</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet tellus, non posuere sem accumsan sed.
            Pellentesque ac consectetur mauris. Aliquam viverra cursus malesuada.</p>
        </article>
        <article className="testimonial">
        <h3>Excellent Food</h3>
        <img src = {reviewer} alt = "reviewer" /> <b>Fred Freeman</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet tellus, non posuere sem accumsan sed.
            Pellentesque ac consectetur mauris. Aliquam viverra cursus malesuada.</p>
        </article>
        <article className="testimonial">
        <h3>Excellent Food</h3>
        <img src = {reviewer} alt = "reviewer" /> <b>Fred Freeman</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet tellus, non posuere sem accumsan sed.
            Pellentesque ac consectetur mauris. Aliquam viverra cursus malesuada.</p>
        </article>
        <article className="testimonial">
        <h3>Excellent Food</h3>
        <img src = {reviewer} alt = "reviewer" /> <b>Fred Freeman</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet tellus, non posuere sem accumsan sed.
            Pellentesque ac consectetur mauris. Aliquam viverra cursus malesuada.</p>
        </article>
        </section>
        </div>
        <section className="aboutArea">
        <article className="aboutText">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula aliquet tellus, non posuere sem accumsan sed.
        Pellentesque ac consectetur mauris. Aliquam viverra cursus malesuada.
        Nunc non turpis scelerisque, vehicula odio sit amet, tempus orci.
        Pellentesque id tincidunt dolor. Nam leo eros, mattis in molestie eu, volutpat sit amet odio.
        </article>
        <article>
        <img src = {madrian1} alt = "Mario and Adrian 1" className="aboutPic1" /><img src = {madrian2} alt = "Mario and Adrian 2" className="aboutPic2" />
        </article>
        </section>
    </main>
);

}

export default Main;