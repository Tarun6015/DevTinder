const adminAuth = (req, res, next) => {
  const key = "realKey";
  const auth = key === "realKey";
  if (!auth) {
    res.status(401).send("Unrecognized Admin");
  } else next();
};

const userAuth = (req, res, next) => {
  const key = "realKey";
  const auth = key === "realKey";
  if (!auth) {
    res.status(401).send("Unrecognized User");
  } else next();
};

module.exports = { adminAuth, userAuth };
