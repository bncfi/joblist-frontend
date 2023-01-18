describe('Joblist app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('Loads all jobs and jobs are in right orderd', function () {
    cy.contains('Haulla löytyi 1000 tulosta')

    cy.get('#joblist').should(function ($div) {
      expect($div.first()).to.contain('Koskikujan toimintayksikkö')
    })

    cy.get('#joblist').children().filter('div').should('have.length', 15)
  })

  it('Sort button works back and forth ', function () {
    cy.contains('Koskikujan toimintayksikkö')
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
})
