const postService = require('../service/post');

const post = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user.newLogin;
    console.log(id);
    // if (displayName.length < 8) {
    //     return res.status(400)
    //     .json({ message: '"displayName" length must be at least 8 characters long' });
    // }
    try {
      const newPost = await postService.post({
        title, content, categoryIds });
    //   const token = jwt.sign({ newUser }, secret, jwtConfig);
      res.status(201).json({ 
        id: newPost.id, 
        title: newPost.title, 
        content: newPost.content, 
        userId: id,
        updated: new Date(),
        published: new Date() });
    } catch (erro) {
      res.status(erro.status || 500).json({ message: erro.message });
    }
  };

  const get = async (req, res) => {
    const getUsers = await postService.get();
  //   const users = getUsers.map((user) => (
  //       { id: user.id, 
  //          displayName: user.displayName, 
  //          email: user.email, 
  //          image: user.image }
  //  ));
    // const token = jwt.sign({ users }, secret, jwtConfig);
    return res.status(200).json(getUsers);
};

  module.exports = {
    post,
    get,
  };