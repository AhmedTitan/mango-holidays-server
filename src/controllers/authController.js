const register = async (req, res) => {
    try {
    const { userName, email, password } = req.body;
        res.send({ userName, email, password });
    } catch (error) {
      res.status(500).send({error});
    }
  };


  export default {
    register,
  };