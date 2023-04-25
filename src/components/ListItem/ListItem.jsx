import s from "./style.module.css";

export function ListItem({ items }) {
  return (
    <tr>
      <th>{items.name}</th>
      <td className={s.price}>{items.price} $</td>
    </tr>
  );
}
