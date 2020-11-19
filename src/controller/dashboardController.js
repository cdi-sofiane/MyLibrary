
const find_all = (req, res) => {


  res.send(req.session.User);
};

export default { find_all };
