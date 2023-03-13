const router = require("express").Router();

const { getUsers, getSingleUser, loginUser, createUser, updateUser, deleteUser } = require("../../controllers/userController");

router.route("/").get(getUsers);
router.route("/login").post(loginUser);
router.route("/signup").post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
