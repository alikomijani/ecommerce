import React from 'react';
import './shop.style.scss';
import SHOP_DATA from './ShopData';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';
class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA,
            name: 'ali'
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherProps }) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}
export default Shop;