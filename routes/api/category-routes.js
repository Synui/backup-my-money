const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// all categories
router.get('/', (req, res) => {
  Category.findAll({
    order: [['id', 'ASC']],
    include: [
      {
        model: Product
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// get one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    order: [['id', 'ASC']],
    include: [
      {
        model: Product
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// create a new category
router.post('/', (req, res) => {
  /* the req.body would display like this:
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      category_id: [1, 2]
      tagIds: [1, 2, 3, 4]
    }
  */
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
