describe('about us', () => {

    it('modal window opening', () => {
        cy.visit(`/`)
        cy.contains(`[data-toggle="modal"]`, 'About us').click()
        cy.get(`[class="btn btn-secondary"]`).should(`be.visible`)
    });

    it('video playing', () => {
        cy.get(`video`).should(`have.prop`, `paused`, true)
            .and(`have.prop`, `ended`, false)
            .then(video => {
                video[0].play()
        })
        cy.wait(2000)
        cy.get(`video`).should(`have.prop`, `paused`, false)
            .then(video => {
            video[0].pause()
        })
        cy.get(`video`).should(`have.prop`, `paused`, true)
    });
});
