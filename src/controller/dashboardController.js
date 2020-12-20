class dashboardController {
  constructor() {
    
  }
  findAll(req, res) {
    console.log(req);
    res.send(req.session.user);
  };
  findOne(req, res) {
    console.log(req);
    res.send(req.params.id);
  };
}

export default new dashboardController;
