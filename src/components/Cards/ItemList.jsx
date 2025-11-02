import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <div className="row justify-content-center S">
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </div>
    );
}
export default ItemList;