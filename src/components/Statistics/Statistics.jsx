import PropTypes from 'prop-types';
import { List,Item } from './Statistics.styled';

const Statistics = ({good,neutral,bad,total,positivePercentage})=>{
    return (
      <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total} </Item>
          <Item>Positive feedback: {positivePercentage} %</Item>
      </List>
    )
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

