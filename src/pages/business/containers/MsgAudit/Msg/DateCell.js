import React from 'react';
import { Cell } from 'fixed-data-table-2';
import PropTypes from 'prop-types';

/**
 * Date Cell
 */
const DateCell = ({ date, rowIndex, columnKey, ...props }) => (
    <Cell {...props}>
        {date.getObjectAt(rowIndex)[columnKey].toLocaleString()}
    </Cell>
);
DateCell.propTypes = {
    date: PropTypes.objectOf(Date).isRequired,
    rowIndex: PropTypes.number.isRequired,
    columnKey: PropTypes.number.isRequired,
};
export default DateCell;
