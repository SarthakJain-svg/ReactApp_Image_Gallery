import React from 'react';

const Pagination = (props) => {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(props.totalPosts/props.postsPerPage); i++)
	{
		pageNumbers.push(i);
	}

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				{pageNumbers.map(number => (
					<li key={"list-item" + number.toString()} className={(number === 1) ? "page-item active" : "page-item"}>
						<a key={"a-item" + number.toString()} onClick={() => props.paginate(number)} href="javascript:void(0)" className="page-link">{number}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;