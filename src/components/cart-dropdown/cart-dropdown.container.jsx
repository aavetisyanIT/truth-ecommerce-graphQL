import React from 'react';
import CartDropdown from './cart-dropdown.component';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`;

export default function CartDropdownContainer() {
	return (
		<Mutation mutation={TOGGLE_CART_HIDDEN}>
			{toggleCartHidden => (
				<Query query={GET_CART_ITEMS}>
					{({ data: { cartItems } }) => (
						<CartDropdown
							cartItems={cartItems}
							toggleCartHidden={toggleCartHidden}
						/>
					)}
				</Query>
			)}
		</Mutation>
	);
}
