import { gql } from '@apollo/client';

// GraphQL Query to fetch employees
const QUERY_EMPLOYEES = gql`
  query Employees($page: Int, $pageSize: Int) {
    employees(page: $page, pageSize: $pageSize) {
      id
      name
      email
    }
  }
`;

export default { QUERY_EMPLOYEES };
