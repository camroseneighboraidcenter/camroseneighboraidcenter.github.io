export interface Program {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  imageTitle: string;
  imageAlt: string;
  featured: boolean;
  slug: string;
}

export const programs: Program[] = [
  {
    id: 'food-bank',
    title: 'Food Bank Services',
    description: 'Providing essential food supplies to those experiencing food insecurity in our community since 1984.',
    detailedDescription: `
    <h2>Food Bank Services</h2>  
    <p class="lead">Our Food Bank Services program has been a cornerstone of our mission to support those in need 
      since 1984. We provide nutritious food supplies to individuals and families experiencing food insecurity.</p>

      <h2>Hours of Operation</h2>
      <ul>
        <li>Hamper Services:
          <ul>
            <li>Tuesday-Thursday, 9:00 AM - 11:30 AM</li>
          </ul>
        </li>
        <li>Front Room (extra foods, bread, beans & soups):
          <ul>
            <li>Monday & Friday: 9:00 AM - 12:00 PM</li>
            <li>Tuesday-Thursday: 10:00 AM - 3:00 PM</li>
          </ul>
        </li>
        <li>Additional Bread Distribution:
          <ul>
            <li>Monday: Camrose Community Church, 9:00 AM - 12:00 PM</li>
            <li>Wednesday: Center Point Church, 1:00 PM - 3:00 PM</li>
          </ul>
        </li>
      </ul>

      <h2>Volunteer Activities</h2>
      <p>Our dedicated volunteers engage in various essential tasks:</p>
      <ul>
        <li>Stocking shelves and making hampers</li>
        <li>Sorting donations</li>
        <li>Answering phones</li>
        <li>Cleaning and maintenance</li>
        <li>Creating schedules</li>
        <li>Transporting and delivering supplies</li>
        <li>Bread and soup delivery</li>
      </ul>

      <h2>Our Approach</h2>
      <p>Our service is designed to be accessible and dignified, ensuring that everyone who comes through our 
      doors is treated with respect and compassion. We believe in:</p>
      <ul>
        <li>Treating everyone with dignity and respect</li>
        <li>Providing nutritious food options</li>
        <li>Offering guidance on nutrition and cooking</li>
        <li>Creating a welcoming environment</li>
      </ul>`,
    image: '/images/programs/food-bank.webp',
    imageTitle: 'Food bank volunteers helping sort food.',
    imageAlt: 'Food bank volunteers helping sort food.',
    featured: true,
    slug: 'food-bank-services'
  },
  {
    id: 'food-for-kids',
    title: 'Food for Kids',
    description: 'Serving approximately 1,000 children monthly through breakfast clubs in six local schools since 2000.',
    detailedDescription: `
    <h2>Food for Kids</h2>  
    <p class="lead">Our Food for Kids program, established in 2000, operates in partnership with six local schools 
      to ensure that no child starts their day hungry. Through our breakfast clubs, we provide nutritious morning 
      meals that help students focus on learning rather than hunger.</p>

      <h2>Program Impact</h2>
      <ul>
        <li>Serves approximately 1,000 children monthly</li>
        <li>Operates in 6 local schools</li>
        <li>Daily breakfast service during school days</li>
        <li>Supports academic success</li>
      </ul>

      <h2>Participating Schools</h2>
      <ul>
        <li>The Comp</li>
        <li>Chester Ronning</li>
        <li>Charlie Killiam</li>
        <li>Jack Stuart</li>
        <li>Sifton</li>
        <li>Sparling</li>
      </ul>

      <h2>Program Operations</h2>
      <p>Our program runs through:</p>
      <ul>
        <li>School-based coordinators organizing volunteer teams</li>
        <li>Weekly grocery shopping and delivery service</li>
        <li>Partnership with local businesses for delivery</li>
        <li>Regular communication with school coordinators</li>
      </ul>`,
    image: '/images/programs/kids-breakfast.webp',
    imageTitle: 'Breakfast club food preparation.',
    imageAlt: 'Breakfast club food preparation.',
    featured: true,
    slug: 'food-for-kids'
  },
  {
    id: 'marthas-table',
    title: "Martha's Table",
    description: 'Free soup and sandwich program serving 20-400 people twice weekly since 1998.',
    detailedDescription: `
    <h2>Martha's Table</h2>
      <p class="lead">Martha's Table, established in 1998, is more than just a soup kitchen - it's a place where 
      community members can find warm meals and warm hearts. Our twice-weekly gatherings provide nutritious meals 
      in a dignified, welcoming environment where everyone is treated as family.</p>

      <h2>Service Schedule</h2>
      <ul>
        <li>Tuesdays at Messiah Lutheran Church, 12:00 PM - 1:00 PM</li>
        <li>Wednesdays at Camrose United Church, 12:00 PM - 1:00 PM</li>
      </ul>

      <h2>Volunteer Activities</h2>
      <p>Our dedicated volunteers:</p>
      <ul>
        <li>Create serving schedules</li>
        <li>Pick up and manage food supplies</li>
        <li>Prepare soup and sandwiches</li>
        <li>Set up and serve meals</li>
        <li>Build relationships with community members</li>
      </ul>

      <h2>Program Impact</h2>
      <p>Each service provides:</p>
      <ul>
        <li>Meals for 20-400 community members</li>
        <li>Nutritious soup and sandwich combinations</li>
        <li>Welcoming, community atmosphere</li>
        <li>Connection to additional resources</li>
      </ul>`,
    image: '/images/programs/soup-kitchen.webp',
    imageTitle: 'Soup kitchen volunteer distributing meals.',
    imageAlt: 'Soup kitchen volunteer distributing meals.',
    featured: true,
    slug: 'marthas-table'
  },
  {
    id: 'medical-transportation',
    title: 'Medical Transportation',
    description: 'Providing essential transportation services for specialist medical appointments in Edmonton.',
    detailedDescription: `
      <h2>Medical Transportation</h2>
      <p class="lead">Our Medical Transportation program ensures that no one misses important medical appointments 
        due to lack of transportation. We coordinate rides to specialist appointments in Edmonton for clients who 
        have no other means of transportation.</p>

      <h2>Program Process</h2>
      <ul>
        <li>Initial client screening and safety assessment</li>
        <li>Personal interview process</li>
        <li>Coordination with volunteer drivers</li>
        <li>Flexible scheduling based on appointment times</li>
      </ul>

      <h2>Our Volunteer Drivers</h2>
      <p>All our carefully selected drivers provide:</p>
      <ul>
        <li>Safe, reliable transportation</li>
        <li>Door-to-door assistance</li>
        <li>Companionship during trips</li>
        <li>Flexible scheduling options</li>
      </ul>

      <h2>Service Features</h2>
      <p>This vital service includes:</p>
      <ul>
        <li>Transportation to specialist appointments</li>
        <li>Door-to-door service</li>
        <li>Coordination with medical facilities</li>
        <li>Follow-up scheduling assistance</li>
      </ul>`,
    image: '/images/programs/medical-transport.webp',
    imageTitle: 'Medical transportation volunteer driving a person to an appointment.',
    imageAlt: 'Medical transportation volunteer driving a person to an appointment.',
    featured: true,
    slug: 'medical-transportation'
  },
  {
    id: 'emergency-aid',
    title: 'Emergency Financial Assistance',
    description: 'One-time emergency intervention for urgent financial crises, with repayment opportunities.',
    detailedDescription: `
      <h2>Emergency Financial Assistance</h2>
      <p class="lead">Our Emergency Financial Assistance program, supported by member churches, provides one-time 
      emergency intervention for individuals and families facing unexpected financial hardships. We operate as a 
      Lending Circle, offering recipients the opportunity to repay the assistance.</p>

      <h2>Types of Assistance</h2>
      <ul>
        <li>Rent assistance</li>
        <li>Utility bill payments</li>
        <li>Prescription medication costs</li>
        <li>Emergency housing for transients</li>
      </ul>

      <h2>Our Process</h2>
      <p>We ensure responsible distribution of aid through:</p>
      <ul>
        <li>Thorough needs assessment</li>
        <li>Validation of emergency situation</li>
        <li>Direct payment to service providers</li>
        <li>Repayment program coordination</li>
      </ul>

      <h2>Program Features</h2>
      <p>Key aspects include:</p>
      <ul>
        <li>One-time emergency intervention</li>
        <li>Lending Circle participation option</li>
        <li>Flexible repayment opportunities</li>
        <li>Connection to additional resources</li>
      </ul>`,
    image: '/images/programs/emergency-aid.webp',
    imageTitle: 'Emergency financial assistance volunteer helping a client.',
    imageAlt: 'Emergency financial assistance volunteer helping a client.',
    featured: true,
    slug: 'emergency-financial-assistance'
  },
  {
    id: 'referral-services',
    title: 'Referral Services',
    description: 'Connecting individuals with additional support resources and community services.',
    detailedDescription: `
      <h2>Referral Services</h2>
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
    image: '/images/programs/referral-services.webp',
    imageTitle: 'Referral services volunteer helping a client.',
    imageAlt: 'Referral services volunteer helping a client.',
    featured: true,
    slug: 'referral-services'
  }
];