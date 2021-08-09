import PropTypes from 'prop-types';

export const NavigationItem = ({title, href = "#"}) => {
    return <li className="nav-list-item">
        <a
            className="nav-list-link link"
            href={href}
        >
            {title}
        </a>
    </li>;
}

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
}
