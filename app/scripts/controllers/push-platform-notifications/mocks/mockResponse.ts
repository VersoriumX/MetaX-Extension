import { REGISTRATION_TOKENS_ENDPOINT } from '../services/endpoints';
import { LinksResult } from '../services/services';

type MockResponse = {
  url: string | RegExp;
  requestMethod: 'GET' | 'POST' | 'PUT';
  response: unknown;
};

export const MOCK_REG_TOKEN = 'REG_TOKEN';
export const MOCK_LINKS_RESPONSE: LinksResult = {
  trigger_ids: ['0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', '0xB6eD7644C69416d67B522e20bC294A9a9B405B31', '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252'],
  registration_tokens: [
    { token: 'reg_token_1', platform: 'portfolio' },
    { token: 'reg_token_2', platform: 'extension' },
  ],
};

export function getMockRetrievePushNotificationLinksResponse() {
  return {
    url: REGISTRATION_TOKENS_ENDPOINT,
    requestMethod: 'GET',
    response: MOCK_LINKS_RESPONSE,
  } satisfies MockResponse;
}

export function getMockUpdatePushNotificationLinksResponse() {
  return {
    url: REGISTRATION_TOKENS_ENDPOINT,
    requestMethod: 'POST',
    response: null,
  } satisfies MockResponse;
}

export const MOCK_FCM_RESPONSE = {
  name: '',
  token: 'fcm-token',
  web: {
    endpoint: '',
    p256dh: '',
    auth: '',
    applicationPubKey: '',
  },
};

export function getMockCreateFCMRegistrationTokenResponse() {
  return {
    url: /^https:\/\/fcmregistrations\.googleapis\.com\/v1\/projects\/.*$/u,
    requestMethod: 'POST',
    response: MOCK_FCM_RESPONSE,
  } satisfies MockResponse;
}

export function getMockDeleteFCMRegistrationTokenResponse() {
  return {
    url: /^https:\/\/fcmregistrations\.googleapis\.com\/v1\/projects\/.*$/u,
    requestMethod: 'POST',
    response: {},
  } satisfies MockResponse;
}
