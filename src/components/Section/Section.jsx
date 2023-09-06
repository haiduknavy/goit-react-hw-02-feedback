import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({title,children})=>{
return (
    <section>
        <Title>{title}</Title>
        {children}
    </section>
)
}

export default Section;

Section.propTypes = {
    children: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}