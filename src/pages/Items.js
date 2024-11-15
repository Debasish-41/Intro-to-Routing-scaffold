import {Link} from 'react-router-dom';
import { ITEMS } from '../data/itemData';
import Navbar from '../components/Navbar';
function Items() {
  return (
    <>
    
      <main>
        <h1>Items</h1>
      </main>
      <ul>
        {ITEMS.map((item,i) => (
          <Link to = {`/items/${item.id}`}>  
            <li>{item.id}</li>
          </Link>
        ))}

        
      </ul>
    </>
  );
}

export default Items;
