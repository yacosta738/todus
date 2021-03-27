import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Tweets e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load Tweets', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('Tweets').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details Tweets page', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('tweets');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create Tweets page', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('Tweets');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit Tweets page', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('Tweets');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of Tweets', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('Tweets');

    cy.get(`[data-cy="content"]`).type('withdrawal', { force: true }).invoke('val').should('match', new RegExp('withdrawal'));

    cy.get(`[data-cy="createdAt"]`).type('2021-03-24T04:33').invoke('val').should('equal', '2021-03-24T04:33');

    cy.get(`[data-cy="updatedAt"]`).type('2021-03-24T15:41').invoke('val').should('equal', '2021-03-24T15:41');

    cy.setFieldSelectToLastOfEntity('customer');

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/tweets*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of Tweets', () => {
    cy.intercept('GET', '/api/tweets*').as('entitiesRequest');
    cy.intercept('DELETE', '/api/tweets/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('tweets');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.getEntityDeleteDialogHeading('tweets').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/tweets*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('tweets');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
