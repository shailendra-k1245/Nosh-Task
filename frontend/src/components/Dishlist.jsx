import DishCard from './Dishcard';

const DishList = ({ dishes, onToggle }) => {
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {dishes.map((dish) => (
        <DishCard key={dish.dishId} dish={dish} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default DishList;
