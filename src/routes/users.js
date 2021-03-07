const router = require('express-promise-router')();

const {
    index, getUser, newUser, replaceUser, updateUser, deleteUser, getUsersCars, newUserCar
} = require('../controler/users');

router.get('/', index);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', replaceUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/:userId/cars', getUsersCars);
router.post('/:userId/cars', newUserCar);






module.exports = router;