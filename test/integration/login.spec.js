import loginPage from 'cspace-ui/lib/test/pageObjects/loginPage';
import searchPage from 'cspace-ui/lib/test/pageObjects/searchPage';

describe('on the login page', function suite() {
  beforeEach(() => {
    loginPage.open();

    browser.waitUntil(loginPage.isOpen);
  });

  context('when valid credentials are entered', () => {
    beforeEach(() => {
      loginPage.getUsernameInput().setValue('admin@bampfa.cspace.berkeley.edu');
      loginPage.getPasswordInput().setValue('Administrator');
    });

    afterEach(() => {
      searchPage.logout();
    });

    it('should open the search page when the submit button is clicked', () => {
      loginPage.getSubmitButton().click();

      browser.waitUntil(searchPage.isOpen);

      searchPage.isUserMenuVisible().should.equal(true);
      searchPage.getUserScreenName().should.equal('Administrator');
    });

    it('should open the search page when enter is pressed on the username input', () => {
      browser.elementIdValue(loginPage.getUsernameInput().value.ELEMENT, 'Enter');

      browser.waitUntil(searchPage.isOpen);

      searchPage.isUserMenuVisible().should.equal(true);
      searchPage.getUserScreenName().should.equal('Administrator');
    });

    it('should open the search page when enter is pressed on the username input', () => {
      browser.elementIdValue(loginPage.getPasswordInput().value.ELEMENT, 'Enter');

      browser.waitUntil(searchPage.isOpen);

      searchPage.isUserMenuVisible().should.equal(true);
      searchPage.getUserScreenName().should.equal('Administrator');
    });
  });

  context('when invalid credentials are entered', () => {
    beforeEach(() => {
      loginPage.getUsernameInput().setValue('admin@bampfa.cspace.berkeley.edu');
      loginPage.getPasswordInput().setValue('uh oh');
    });

    it('should stay on the login page and show an error message when the credentials are submitted', () => {
      loginPage.getSubmitButton().click();

      browser.waitUntil(() => loginPage.getPromptText().includes('Incorrect username/password'));
    });
  });
});
