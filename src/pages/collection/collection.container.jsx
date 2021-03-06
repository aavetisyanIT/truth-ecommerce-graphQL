import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from './../../components/spinner/spinner.component';
import CollectionPage from './collection.component';

const GET_COLLECTION_BY_TITLE = gql`
	query getCollectionsByTitle($title: String!) {
		getCollectionsByTitle(title: $title) {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;

export default function CollectionPageContainer({ match }) {
	return (
		<Query
			query={GET_COLLECTION_BY_TITLE}
			variables={{ title: match.params.collectionId }}
		>
			{({ loading, data }) => {
				if (loading) return <Spinner />;
				const { getCollectionsByTitle } = data;
				return (
					<CollectionPage collection={getCollectionsByTitle} />
				);
			}}
		</Query>
	);
}
