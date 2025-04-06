import rest from "./images/restaurant-sm.jpg"
import GreekSalad from "./images/greek-salad-sm.jpg"
import Bruschetta from "./images/bruschetta-sm.jpg"
import LemonDessert from "./images/lemon-cake-lg.jpg"
import motorcycle from "./images/motorcycle.jpg"
import reviewer from "./images/reviewer.jpg"
import madrian1 from "./images/madrian1.jpg"
import madrian2 from "./images/madrian2.jpg"

function HeroArea () {
    return (
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
    );
}

function SpecialsArea() {
    const specials = [
        {
            name: "Greek Salad",
            price: 12.99,
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: GreekSalad
        },
        {
            name: "Bruschetta",
            price: 8.99,
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: Bruschetta
        },
        {
            name: "Lemon Dessert",
            price: 5,
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            image: LemonDessert
        }
    ];

    const specialsJSX = specials.map(special => {
        const item =
        <article>
        <img src = {special.image} alt = {special.name} className="special" />
        <div className="specialsDetail"><h3>{special.name}</h3><span className = "price">${special.price}</span>
        <p className="specialsText">{special.description}</p>
        <b>Order for Delivery</b> <img src = {motorcycle} alt = "motorcycle" className="orderIcon" />
        </div>
        </article>;
        //alert({`${special.image}`});
        return item;
    })

    return (
    <>
    <section className="specialsHeaderArea">
    <h2>This Week's Specials!</h2><button>Order Online</button>
    </section>
    <section className="specialsArea">
    {specialsJSX}
    </section>;
    </>
    );
}

function TestimonialsArea() {
    return (
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
    );
}

function AboutArea() {
    return (
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
    );
}

function HomePage() {
    return (
        <>
        <HeroArea />
        <SpecialsArea />
        <TestimonialsArea />
        <AboutArea />
        </>
);

}

export default HomePage;