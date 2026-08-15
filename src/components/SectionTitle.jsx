// ponytail: flower icon replaces the reference PNG asset, spins slowly
import { Flower2 } from 'lucide-react';

const SectionTitle = ({ title, className = 'mb-10' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Flower2
        size={25}
        className="animate-spin [animation-duration:7s] text-accent"
        aria-hidden="true"
      />
      <h2 className="text-xl uppercase leading-none">{title}</h2>
    </div>
  );
};

export default SectionTitle;
