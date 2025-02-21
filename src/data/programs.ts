export interface Program {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  featured: boolean;
  slug: string;
}

export const programs: Program[] = [
  {
    id: 'food-bank',
    title: 'Food Bank Services',
    description: 'Providing essential food supplies to those experiencing food insecurity in our community.',
    detailedDescription: `
      <p class="lead">Our Food Bank Services program is a cornerstone of our mission to support those in need. 
      We provide nutritious food supplies to individuals and families experiencing food insecurity.</p>

      <h2>How It Works</h2>
      <p>Through partnerships with local grocery stores, farmers, and generous donors, we maintain a well-stocked 
      food bank that offers:</p>
      <ul>
        <li>Non-perishable food items</li>
        <li>Fresh produce when available</li>
        <li>Personal care items</li>
        <li>Baby supplies</li>
      </ul>

      <h2>Our Approach</h2>
      <p>Our service is designed to be accessible and dignified, ensuring that everyone who comes through our 
      doors is treated with respect and compassion. We believe in:</p>
      <ul>
        <li>Treating everyone with dignity and respect</li>
        <li>Providing nutritious food options</li>
        <li>Offering guidance on nutrition and cooking</li>
        <li>Creating a welcoming environment</li>
      </ul>

      <h2>Additional Support</h2>
      <p>Beyond food assistance, we also provide:</p>
      <ul>
        <li>Nutrition education and cooking tips</li>
        <li>Connection to other community resources</li>
        <li>Budgeting and meal planning guidance</li>
      </ul>`,
    image: '/images/home/food-bank.webp',
    featured: true,
    slug: 'food-bank-services'
  },
  {
    id: 'food-for-kids',
    title: 'Food for Kids',
    description: 'Breakfast clubs in seven local schools ensuring children start their day with a nutritious meal.',
    detailedDescription: `
      <p class="lead">Our Food for Kids program operates in partnership with seven local schools to ensure 
      that no child starts their day hungry. Through our breakfast clubs, we provide nutritious morning meals 
      that help students focus on learning rather than hunger.</p>

      <h2>Program Impact</h2>
      <ul>
        <li>Serves hundreds of children daily</li>
        <li>Operates in 7 local schools</li>
        <li>Provides balanced, nutritious meals</li>
        <li>Supports academic success</li>
      </ul>

      <h2>What We Provide</h2>
      <p>Each breakfast includes:</p>
      <ul>
        <li>Fresh fruits and vegetables</li>
        <li>Whole grain options</li>
        <li>Protein-rich foods</li>
        <li>Dairy products</li>
      </ul>

      <h2>Our Partners</h2>
      <p>We work closely with:</p>
      <ul>
        <li>School administrators and staff</li>
        <li>Nutritionists and dietitians</li>
        <li>Local food suppliers</li>
        <li>Community volunteers</li>
      </ul>`,
    image: '/images/home/kids-breakfast.webp',
    featured: true,
    slug: 'food-for-kids'
  },
  {
    id: 'marthas-table',
    title: "Martha's Table",
    description: 'Weekly soup kitchens offering warm meals and community support to those in need.',
    detailedDescription: `
      <p class="lead">Martha's Table is more than just a soup kitchen - it's a place where community 
      members can find warm meals and warm hearts. Our weekly gatherings provide nutritious meals in a 
      dignified, welcoming environment where everyone is treated as family.</p>

      <h2>What We Offer</h2>
      <ul>
        <li>Weekly home-style meals</li>
        <li>Welcoming, café-style environment</li>
        <li>Community fellowship</li>
        <li>Connection to additional resources</li>
      </ul>

      <h2>Our Impact</h2>
      <p>Every week, we serve:</p>
      <ul>
        <li>Hundreds of nutritious meals</li>
        <li>Community members from all walks of life</li>
        <li>Special holiday celebrations</li>
        <li>Emergency food assistance</li>
      </ul>

      <h2>Community Support</h2>
      <p>Our program is made possible through:</p>
      <ul>
        <li>Dedicated volunteer teams</li>
        <li>Local food donations</li>
        <li>Community partnerships</li>
        <li>Financial supporters</li>
      </ul>`,
    image: '/images/home/soup-kitchen.webp',
    featured: true,
    slug: 'marthas-table'
  },
  {
    id: 'medical-transport',
    title: 'Medical Transportation',
    description: 'Providing essential transportation services for medical appointments and treatments.',
    detailedDescription: `
      <p class="lead">Our Medical Transportation program ensures that no one misses important medical 
      appointments due to lack of transportation. We coordinate rides to medical facilities both within 
      Camrose and to specialized care centers in nearby cities.</p>

      <h2>Service Coverage</h2>
      <ul>
        <li>Local medical appointments</li>
        <li>Specialist visits in nearby cities</li>
        <li>Regular treatment sessions</li>
        <li>Emergency medical transportation</li>
      </ul>

      <h2>Our Volunteer Drivers</h2>
      <p>All our drivers are carefully selected and provide:</p>
      <ul>
        <li>Safe, reliable transportation</li>
        <li>Door-to-door assistance</li>
        <li>Companionship during trips</li>
        <li>Flexible scheduling options</li>
      </ul>

      <h2>Program Benefits</h2>
      <p>This vital service helps:</p>
      <ul>
        <li>Seniors maintain independence</li>
        <li>Reduce missed appointments</li>
        <li>Ensure continuity of care</li>
        <li>Provide peace of mind</li>
      </ul>`,
    image: '/images/home/medical-transport.webp',
    featured: false,
    slug: 'medical-transportation'
  },
  {
    id: 'emergency-aid',
    title: 'Emergency Financial Assistance',
    description: 'Helping those facing urgent financial crises with temporary support and guidance.',
    detailedDescription: `
      <p class="lead">Our Emergency Financial Assistance program provides temporary support to 
      individuals and families facing unexpected financial hardships. We offer assistance with essential 
      expenses while also connecting clients with resources for long-term financial stability.</p>

      <h2>Types of Assistance</h2>
      <ul>
        <li>Utility bill payments</li>
        <li>Rent assistance</li>
        <li>Medical expense support</li>
        <li>Emergency food assistance</li>
      </ul>

      <h2>Support Services</h2>
      <p>Beyond financial aid, we provide:</p>
      <ul>
        <li>Financial counseling</li>
        <li>Budgeting workshops</li>
        <li>Resource referrals</li>
        <li>Long-term planning support</li>
      </ul>

      <h2>Our Process</h2>
      <p>We ensure responsible distribution of aid through:</p>
      <ul>
        <li>Careful needs assessment</li>
        <li>Direct payment to service providers</li>
        <li>Follow-up support</li>
        <li>Connection to additional resources</li>
      </ul>`,
    image: '/images/home/emergency-aid.webp',
    featured: false,
    slug: 'emergency-financial-assistance'
  },
  {
    id: 'referral-services',
    title: 'Referral Services',
    description: 'Connecting individuals with additional support resources and community services.',
    detailedDescription: `
      <p class="lead">Our Referral Services program acts as a bridge between those in need and the 
      various support services available in our community. We maintain strong relationships with local 
      agencies, government services, and other nonprofits to ensure our clients can access all available 
      resources.</p>

      <h2>Available Resources</h2>
      <ul>
        <li>Government assistance programs</li>
        <li>Mental health services</li>
        <li>Employment support</li>
        <li>Housing assistance</li>
      </ul>

      <h2>How We Help</h2>
      <p>Our experienced staff provides:</p>
      <ul>
        <li>Personalized needs assessment</li>
        <li>Application assistance</li>
        <li>Documentation support</li>
        <li>Follow-up services</li>
      </ul>

      <h2>Partner Network</h2>
      <p>We collaborate with:</p>
      <ul>
        <li>Local social services</li>
        <li>Healthcare providers</li>
        <li>Educational institutions</li>
        <li>Community organizations</li>
      </ul>`,
    image: '/images/home/referral-services.webp',
    featured: false,
    slug: 'referral-services'
  }
];
