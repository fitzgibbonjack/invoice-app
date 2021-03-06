import React from "react";
import AddressInput from "../Address/Address";
import ItemInput from "../Item/Item";
import TextInput from "../Text/Text";
import SelectInput from "../Select/Select";
import "./Invoice.scss";

export default function InvoiceInput({ props, action, invoice }) {
	const [itemCount, setItemCount] = props;
	let i = 0;

	return (
		<form className="invoiceInput" id={`${action}Invoice`}>
			<fieldset name="senderAddress">
				<legend className="form__legend">Bill From</legend>
				<AddressInput
					id={0}
					defaultValue={invoice && invoice.senderAddress}
				/>
			</fieldset>

			<fieldset name="clientDetails">
				<legend className="form__legend">Bill To</legend>
				<TextInput
					name="clientName"
					defaultValue={invoice && invoice.clientName}
				/>
				<TextInput
					name="clientEmail"
					type="email"
					defaultValue={invoice && invoice.clientEmail}
				/>
				<AddressInput
					id={1}
					defaultValue={invoice && invoice.clientAddress}
				/>
			</fieldset>

			<fieldset name="projectDetails">
				<SelectInput
					name="paymentTerms"
					defaultValue={invoice && invoice.paymentTerms}
				>
					<option value="1">Net 1 Day</option>
					<option value="7">Net 7 Days</option>
					<option value="14">Net 14 Days</option>
					<option value="30">Net 30 Days</option>
				</SelectInput>
				<TextInput
					name="projectDescription"
					defaultValue={invoice && invoice.description}
				/>
			</fieldset>

			<fieldset name="items">
				<legend className="form__legend">Item List</legend>

				<ul style={{ display: "grid", gap: "3rem" }}>
					{[...Array(itemCount)].map(() => (
						<li key={i++}>
							<ItemInput
								i={i}
								defaultValue={invoice && invoice.items[i]}
							/>
						</li>
					))}
				</ul>

				<button
					type="button"
					className="button--2 items__add"
					onClick={() => setItemCount(itemCount + 1)}
				>
					Add New Item
				</button>
			</fieldset>
		</form>
	);
}
