export const homePageSelectors = {
  loginRegisterButton: "#customernav",
  addAbsoluteAntiAgeCreamToChart: '[data-id="68"]',
  addAbsolueEyeCreamToChart: '[data-id="65"]',
  addTotalMoistureCreamToChart: '[data-id="66"]',
  openChart: ".cart_total", 
};

export const loginSelectors = {
  loginInput: '[name="loginname"]',
  passwordInput: '[name="password"]',
  loginButton: '[title="Login"]',
  errorIncorrectLogin: ".alert-danger",
};

export const registerSelectors = {
  continueButton: '[title="Continue"]',
  registerHeader: ".maintext",
  firstName: '[name="firstname"]',
  lastName: '[name="lastname"]',
  email: '[name="email"]',
  address_1: '[name="address_1"]',
  city: '[name="city"]',
  regionState: "#AccountFrm_zone_id",
  postcode: '[name="postcode"]',
  country: '[name="country_id"]',
  login: '[name="loginname"]',
  password: '[name="password"]',
  passwordConfirm: '[name="confirm"]',
  privacyPolicy: '[name="agree"]',
  failMessage: ".alert-error",
};

export const chartSelectors = {
  itemBox: '[id*="cart_quantity"]',
};

export const checkoutSelectors = {
  checkoutButton: '#cart_checkout2',
  confirmOrderButton: '#checkout_btn',
  successMessage: '.heading1',
}