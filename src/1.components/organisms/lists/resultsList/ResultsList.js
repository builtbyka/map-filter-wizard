import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from 'hookrouter';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './style';
import { filteredData } from '../../filters/_state/FilterSelectors';

function ResultsList() {
  const classes = useStyles();
  const data = useSelector(filteredData);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('price');
  const [isNumeric, setIsNumeric] = useState('false');

  function createData(name, dist, price, link) {
    return {
      name, dist, price, link,
    };
  }

  function desc(a, b, ordBy, num) {
    const x = num ? Number(a[ordBy].replace(/[^0-9.]+/g, '')) : a[ordBy];
    const y = num ? Number(b[ordBy].replace(/[^0-9.]+/g, '')) : b[ordBy];
    if (y < x) {
      return -1;
    }
    if (y > x) {
      return 1;
    }
    return 0;
  }

  const handleRequestSort = (property, numeric) => () => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    setIsNumeric(numeric);
  };

  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const ord = cmp(a[0], b[0]);
      if (ord !== 0) return ord;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getSorting(ord, ordBy, num) {
    return ord === 'desc'
      ? (a, b) => desc(a, b, ordBy, num)
      : (a, b) => -desc(a, b, ordBy, num);
  }

  const headCells = [
    {
      id: 'name', numeric: false, disablePadding: true, label: 'Property',
    },
    {
      id: 'dist', numeric: true, disablePadding: false, label: 'Distance',
    },
    {
      id: 'price', numeric: true, disablePadding: false, label: 'Price',
    },
  ];

  const rows = data.map((dat) => createData(dat.name, `${dat.distance_from_chosen_location_km} km`,
    `£${Math.round(dat.price).toLocaleString()} - £${Math.round(dat.estimated_price_upper).toLocaleString()}`,
    `../property/${dat.id}`));

  return (
    <article className={classes.list}>
      <section className={classes.listWrap}>
        <Table stickyHeader className={classes.table} aria-label="property table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              {headCells.map((headCell) => (
                <TableCell
                  className={classes.header}
                  key={headCell.id}
                  align="left"
                  padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={order}
                    onClick={handleRequestSort(headCell.id, headCell.numeric)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell className={`${classes.header} ${classes.hidden}`} align="left">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getSorting(order, orderBy, isNumeric)).map((row) => (
              <TableRow onClick={() => navigate(row.link)} key={row.name} className={classes.row}>
                <TableCell className={`${classes.cell} ${classes.mainCell}`} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.cell} align="left">{row.dist}</TableCell>
                <TableCell className={classes.cell} align="left">{row.price}</TableCell>
                <TableCell className={classes.cell} align="left">
                  <ArrowForwardIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </article>
  );
}

export default ResultsList;
