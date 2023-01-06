import PokeMoveCard from "./PokeMoveCard";
import { moves } from "./data";

export default function PokeMoves() {
  return (
    <div>
      <h1>PokeMoves</h1>

      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
