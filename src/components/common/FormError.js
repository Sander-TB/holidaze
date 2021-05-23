import PropTypes from "prop-types";

export default function FormError({ children }) {
	return (
		<div className='bg-red-100 rounded-md px-5 py-2 text-main-fire'>
			{children}
		</div>
	);
}

FormError.propTypes = {
	children: PropTypes.node.isRequired,
};
