import { faker } from '@faker-js/faker';

const testData = {
	fullName: faker.person.fullName(),
  firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
  email: faker.internet.email({ firstName: this.fullName }),
	password: faker.internet.password({
		length: 10,
		pattern: /[A-Z-0-9!@#$%^&*()]/
	}),
	country: faker.location.country(),
	city: faker.location.city(),
	creditCard: faker.finance.creditCardNumber(),
  creditCardCVV: faker.finance.creditCardCVV(),
	creditCardMonth: faker.helpers.fromRegExp('[1-12]'),
	creditCardYear: faker.helpers.fromRegExp('/^(?:202[5-9]|[2-9]\d{3,})$/')

};

export const mockData = {
	testData
};