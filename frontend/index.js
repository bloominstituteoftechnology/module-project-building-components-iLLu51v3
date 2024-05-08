function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav
  /**
   * Create a variable/container for 'nav'
   * Loop over the href objects that creates an anchor tag for each element 
   * Then append the objects to the container
   */

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav');
    links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.titel = link.title;
      anchor.textContent = link.textContent;
      nav.appendChild(anchor);
    });
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

    /** Steps for 2A
     * starting out:
     * Either by viewing the mock example or just simply plugging something in, we create a div.
     * Add some text content of w.e. just to fill it with something that can be visually seen when on the DOM and return the element
     * Move and fill Task 2B for it to append to the DOM
    
     * **Filling in the card information**
     * - start by connecting the information to the right className it must have
     * -- Looking at the mock, the dive will have a className of 'learner-card' as well as leaner-card active className when it is the active/selected card.
     * - We add a new class to the card element -> card.classList.add('')
     
     * create the paragraph elements for each point of the learners information
     * **Rememeber** to interpolate the text content or the info will only show string  without context to what the string is (see mock)
     * -- The info will not be visible yet, but creates the divs (card/learnerCard) for the # of learners
     * Append the p-elements to the card
     */

  function buildLearnerCard(learner, languages) {
    const card = document.createElement('div')
    // card.textContent = 'WIP'
    card.classList.add('learner-card')

    const learnerName = document.createElement('p')
      learnerName.textContent = learner.fullName
    const learnerID = document.createElement('p')
     learnerID.textContent = `Learner ID: ${learner.id}`
    const learnerDOB = document.createElement('p')
     learnerDOB.textContent = `Date of Birth: ${learner.dateOfBirth}`
    const learnerFavLang = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
     learnerFavLang.textContent = `Favorite Language: ${favLanguage.name}`;

    let learnerInfo = [learnerName, learnerID, learnerDOB, learnerFavLang]
    learnerInfo.forEach(p => {
      card.appendChild(p)
    })

/** Adding card functionality:
 * eventListeners, expanding card info, & applying 'active' to selected card
 * -- on click adds 'active' to selected card, and removes 'active' from all other cards.
 */

    card.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active') // refers to card: as each of the divs
      })
      card.classList.add('active') // refers to card: as from line 51
    })
    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    /** Steps for Task 2B:
     * make new card for the learners -- learnerCard
     * -- We need to loops over the learners list. generating and appending a card to <section> for each learner at each loop iteration
     * -- Use .forEach() array loop meathod
          
     * learnerCard takes a created object, learner, as it's first arg and languages as its second
     * Since we are appending it to the <section>, we use querySelector to find the section element in the HTML document. -> append leanerCard to <section>
     * You should see the card.textContent("") a # of times = to # of learners
      
     * Go back to Task 2A to fill in the cards information
     */

    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    
    return document.createElement('footer')
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
