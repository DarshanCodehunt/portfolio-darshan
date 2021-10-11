/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserContact = /* GraphQL */ `
  query GetUserContact($id: ID!) {
    getUserContact(id: $id) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
    }
  }
`;
export const listUserContacts = /* GraphQL */ `
  query ListUserContacts(
    $filter: ModeluserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
