describe('Joblist app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('Loads all jobs and jobs are in right order', function () {
    cy.contains('Haulla löytyi 1000 tulosta')

    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })
    cy.get('#joblist').children().filter('div').should('have.length', 15)
  })

  it('Job details view works', function () {
    cy.get('#joblist').children().first().click()
    cy.get('[class^=Jobdetails_heading').should(function ($div) {
      expect($div).to.contain(
        'Varhaiskasvatuksen opettaja, 2 paikkaa, Koskikujan toimintayksikkö'
      )
    })
    cy.get('[class^=Jobdetails_backToListing]').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain(
        'Varhaiskasvatuksen opettaja, 2 paikkaa, Koskikujan toimintayksikkö'
      )
    })
  })

  it('Sort button works back and forth ', function () {
    cy.contains('Koskikujan toimintayksikkö')
    cy.wait(100)
    cy.get('#oldestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain(
        'Huolto-/saumaustyöntekijä pääkaupunkiseudulle'
      )
    })
    cy.get('#newestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })
  })

  it('Test of searching with ordering and clearing search fields', function () {
    cy.get('#searchword').type('Myyjä')
    cy.get('#location').type('Helsinki')
    cy.get('#submit-button').click()
    cy.wait(500)
    cy.get('#joblist').children().filter('div').should('have.length', 14)
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Sulautettujen järjestelmien kehittäjä')
    })
    cy.get('#oldestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain(
        'Myymälämyyjä DNA Kauppaan, Pääkaupunkiseutu'
      )
    })
    cy.get('#newestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Sulautettujen järjestelmien kehittäjä')
    })
    cy.get('#searchword').clear()
    cy.get('#location').clear()
    cy.get('#submit-button').click()
    cy.wait(500)
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })
  })

  it('Pagination next and prev works', function () {
    cy.get('.next').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain(
        'Vastuuohjaajia koululaisten Yrityskylään Kuopioon'
      )
    })
    cy.get('.previous').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })
  })

  it('Pagination holds page', function () {
    cy.get('.next').click()
    cy.get('#joblist').children().first().click()
    cy.get('[class^=Jobdetails_backToListing]').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain(
        'Vastuuohjaajia koululaisten Yrityskylään Kuopioon'
      )
    })
  })

  it('Pagination holds page when sorted back and forth', function () {
    cy.get('.next').click()
    cy.get('.next').click()
    cy.get('#oldestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Saaristo Kokki / Archipelago Chef')
    })
    cy.get('#newestbutton').click()
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Varhaiskasvatuksen lastenhoitaja')
    })
  })

  it('Search works after use of pagination', function () {
    cy.get('.next').click()
    cy.get('.next').click()
    cy.get('#searchword').type('Myyjä')
    cy.get('#location').type('Helsinki')
    cy.get('#submit-button').click()
    cy.wait(500)
    cy.get('#joblist').children().filter('div').should('have.length', 14)
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Sulautettujen järjestelmien kehittäjä')
    })
    cy.get('#searchword').clear()
    cy.get('#location').clear()
    cy.get('#submit-button').click()
    cy.wait(500)
    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })
  })
})
