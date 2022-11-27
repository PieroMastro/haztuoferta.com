import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Search = () => {
	const { store, actions } = useContext(Context);

	const [value, setValue] = useState("");

	const onChange = (event) => {
		setValue(event.target.value);
	}

	const onSearch = (searchTerm) => {
		// API to fetch the search result
		let matchComputers = [];
		let matchCellphones = [];


		console.log("search", searchTerm);
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="input-group">
					<input
						// value={store.search}
						// onChange={(event) => actions.handleSearch(event.target.value)}
						value={value}
						onChange={onChange}
						type="text"
						className="form-control shadow-none border border-dark rounded-0"
						placeholder="Busca lo que quieras..."
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-search"
							type="button"
							onClick={() => onSearch(value)}>
							<i className="fa fa-search fa-fw"></i>
						</button>
					</span>
					<div className="suggestions">
						{ }
					</div>
				</div>
			</div>
		</React.Fragment>
	);
	// const [suggestions, setSuggestions] = useState([]);

	// const onChangeHandler = (text) => {
	//   let matchComputers = [];
	//   let matchCellphones = [];

	//   if (text.length > 0) {
	//     matchComputers = store.computadoras.filter((computadoras) => {
	//       const regex = new RegExp(`${text}`, "gi");
	//       return computadoras.properties.name.match(regex);
	//     });

	//     matchCellphones = store.celulares.filter((celulares) => {
	//       const regex = new RegExp(`${text}`, "gi");
	//       return celulares.properties.name.match(regex);
	//     });

	//   }
	//   let searches = [...matchComputers, ...matchCellphones,];

	//   setSuggestions(searches);
	//   setInputValue(text);
	// };

	// const onSuggestHandler = (text) => {
	//   setInputValue(text);
	//   setSuggestions([]);
	// };



	// return (
	//     <div className="container py-3">
	//         <div className="row ">
	//             <h2 className="text-center">Search</h2>
	//             <input
	//                 type="text"
	//                 placeholder="Search"
	//                 value={inputValue}
	//                 className="input-search"
	//                 onChange={(event) => {
	//                     onChangeHandler(event.target.value.trim());
	//                 }}
	//             ></input>
	//             <div className="suggestions">
	//                 {suggestions &&
	//                     suggestions.map((suggestion, index) => {
	//                         return (





	//                         );
	//                     })}
	//             </div>
	//         </div>
	//     </div>
	// );
};
