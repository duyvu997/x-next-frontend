import { gql } from '@apollo/client';

// GraphQL Mutation to create an employee
const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($name: String!, $email: String!) {
    createEmployee(name: $name, email: $email) {
      code
      success
      message
      employee {
        id
        name
        email
      }
    }
  }
`;

// GraphQL Mutation to delete an employee
const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($deleteEmployeeId: ID!) {
    deleteEmployee(id: $deleteEmployeeId) {
      code
      success
      message
      employee {
        id
        name
        email
      }
    }
  }
`;

// GraphQL Mutation to update an employee
const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee(
    $updateEmployeeId: ID!
    $name: String
    $email: String
  ) {
    updateEmployee(id: $updateEmployeeId, name: $name, email: $email) {
      code
      success
      message
      employee {
        id
        name
        email
      }
    }
  }
`;

export default { CREATE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE };
