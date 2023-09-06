import PropTypes from 'prop-types';
import { Title } from 'components/Section/Section.styled';

const Notification = ({message})=>{
  return <Title>{message}</Title>
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}