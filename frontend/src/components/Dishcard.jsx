const DishCard = ({ dish, onToggle }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: 10,
        width: 200,
        borderRadius: 8,
        backgroundColor: dish.isPublished ? '#e0ffe0' : '#ffe0e0'
      }}
    >
      <img
        src={dish.imageUrl}
        alt={dish.dishName}
        width="100%"
        height="100"
        style={{ objectFit: 'cover' }}
        onError={(e) =>
          (e.target.src = 'https://picsum.photos/200')
        }
      />
      <h3>{dish.dishName}</h3>
      <p>{dish.details}</p>
      <p>Status: {dish.isPublished ? '✅ Published' : '❌ Unpublished'}</p>
      <button onClick={() => onToggle(dish.dishId)}>
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default DishCard;
