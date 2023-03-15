const router = require("express").Router();

const { getUsers, getSingleUser, loginUser, createUser, updateUser, deleteUser, isValidToken } = require("../../controllers/userController");

router.route("/").get(getUsers);
router.route("/login").post(loginUser);
router.route("/signup").post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
router.route("/isValidToken").get(isValidToken);

module.exports = router;
