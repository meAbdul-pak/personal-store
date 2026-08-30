const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Laptops' },
    { id: 2, name: 'Phones' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Gaming' }
  ]

  return (
    <div className='categories-section'>
      <h2>Shop By Category</h2>

      <div className='categories-container'>
        {categories.map(item => (
          <div
            className={`category-card ${selectedCategory === item.name || (item.name === 'All' && selectedCategory === '')? 'active': ''}`}
            key={item.id}
            onClick={() => setSelectedCategory(item.name === 'All' ? '' : item.name)}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
