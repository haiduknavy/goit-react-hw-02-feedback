import PropTypes from 'prop-types';
import { List,Item } from './FeedbackOptions.styled';

const FeedbackOptions = ({options,onLeaveFeedback})=>{
return (    
<List>
{options.map((option)=>
(<Item key={option}>
    <button onClick={()=> onLeaveFeedback(option)}>{option}</button>
</Item>)
)}
</List>)
}  

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}