import PropTypes from "prop-types";
import {Table, TableHead, Th, Tr, Td } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return <Table className="transaction-history">
    <TableHead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </TableHead>
  
    <tbody>
      {items.map(({ id, type, amount, currency}) => {
        return (<Tr key={id}>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </Tr>
      )
    })}
    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};