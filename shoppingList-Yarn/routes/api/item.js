const express = require('express');
const router = express.Router();

const Item = require('../../model/Item');

// @route GET
// @desc Get all Items
// @access public
router.get('/' , (req, res)=>{
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
});


// @route Post
// @desc posting an item
// @access public
router.post('/' , (req, res)=>{
    const newItem = new Item({
        name :req.body.name,
    });
    newItem.save()
        .then(item => res.json(item))    
    ;
});



// @route Delete
// @desc Delete an item
// @access public
router.delete('/:id' , (req, res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({seccess : true})))
        .catch(err => res.status(404).json({success : false})); 
})






module.exports = router;