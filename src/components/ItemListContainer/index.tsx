import "./styles.css";

interface Props {
  greetings: string;
}

const ItemListContainer = ({ greetings }: Props) => {
  return (
    <div className="body">
      <h1 className="greetings">{greetings}</h1>
      <div className="loading"></div>
    </div>
  );
};

export default ItemListContainer;

// React.FunctionComponent

// import './styles.css';

// interface Props {
//     greetings: string;
// }

// const ItemListContainer: React.FC<Props> = ({ greetings }) => {
//     return (
//         <div className='body'>
//             <h1>{greetings}</h1>
//         </div>
//     );
// }

// export default ItemListContainer;
