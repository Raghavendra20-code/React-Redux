import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
        {items.map((items,index)=>{
            return <ListItem key = {items+index} items={items}/>
        })}
        </tbody>
      </table>
    </div>
  );
}
