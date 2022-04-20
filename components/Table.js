import Link from "next/link";
import { useState } from "react";
import moment from "moment";

const Table = ({ tableHeader, locations }) => {
	console.log(locations);

	const [data, setData] = useState(locations);
	const [order, setOrder] = useState("ASC");

	const descendingComparator = (a, b, orderBy) => {
		let aIndex = 0;
		let bIndex = 0;

		if (a[orderBy] === undefined || b[orderBy] === undefined) {
			return 1;
		}

		let aString = a[orderBy].toString();
		let bString = b[orderBy].toString();

		while (aIndex < aString.length && bIndex < bString.length) {
			let first = aString.charAt(aIndex).toLowerCase();
			let second = bString.charAt(bIndex).toLowerCase();

			if (first === second) {
				aIndex++;
				bIndex++;
			}

			if (second < first) {
				return -1;
			}
			if (second > first) {
				return 1;
			}
		}
		return aIndex < aString.length ? -1 : 1;
	};

	const sortColumn = (sortKey) => {
		if (order === "ASC") {
			const sorted = [...data].sort((a, b) =>
				descendingComparator(a, b, sortKey)
			);
			setData(sorted);
			setOrder("DESC");
		}
		if (order === "DESC") {
			const sorted = [...data].sort(
				(a, b) => -descendingComparator(a, b, sortKey)
			);

			setData(sorted);
			setOrder("ASC");
		}
	};

	return (
		<div className="tableContainer">
			<table>
				<thead>
					<tr>
						{tableHeader.map((colName, index) => {
							return (
								<th
									align="center"
									key={index}
									onClick={() => sortColumn(colName)}>
									{colName.charAt(0).toUpperCase() + colName.slice(1)}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							{tableHeader.map((header, headerIdx) =>
								header === "title" ? (
									<td key={headerIdx} align="left">
										<Link href={"/" + item.id}>
											<a>{item[header]}</a>
										</Link>
									</td>
								) : header === "time" ? (
									<td key={headerIdx} align="left">
										<a>{moment(new Date(item[header])).format("lll")}</a>
									</td>
								) : (
									<td key={headerIdx} align="left">
										{item[header]}
									</td>
								)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
