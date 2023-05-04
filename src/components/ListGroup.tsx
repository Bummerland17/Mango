import { Fragment, useState } from "react";

interface Props {
  DiffrentRecipies: string[];
  heading: string;
  onSelectItem: (DiffrentRecipies: string) => void;
}

function ListGroup({ DiffrentRecipies, heading, onSelectItem }: Props) {
  // Hook && Getter & Setter
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {DiffrentRecipies.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {DiffrentRecipies.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
