/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserContact = /* GraphQL */ `
  mutation CreateUserContact(
    $input: CreateUserContactInput!
    $condition: ModeluserContactConditionInput
  ) {
    createUserContact(input: $input, condition: $condition) {
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
export const updateUserContact = /* GraphQL */ `
  mutation UpdateUserContact(
    $input: UpdateUserContactInput!
    $condition: ModeluserContactConditionInput
  ) {
    updateUserContact(input: $input, condition: $condition) {
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
export const deleteUserContact = /* GraphQL */ `
  mutation DeleteUserContact(
    $input: DeleteUserContactInput!
    $condition: ModeluserContactConditionInput
  ) {
    deleteUserContact(input: $input, condition: $condition) {
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
