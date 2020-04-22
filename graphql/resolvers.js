const { Movies, Authors } = require("./db");

const resolvers = {
  Query: {
    movies: async () => {
      return await Movies.findAll();
    },
    movie: async (_, args) => {
      mov = await Movies.findByPk(args.id)
      //console.log(mov)
      aut = await Authors.findAll({
        where: {
          "id": mov['dataValues'].author_id
        }
      })
      //console.log(aut)
        movFind = Movie = {
          id: args.id,
          name: mov.name,
          score: mov.score,
          author: aut[0]     // get the first row of array aut
        }
      console.log(movFind)
      return await movFind
    },
    authors: async () => {
      return await Authors.findAll();
    },
    author: async (_, args) => {
      au = await Authors.findByPk(args.id);
      //console.log(au['dataValues'].id)
      mov = await Movies.findAll({
        where: {
          "author_id": au['dataValues'].id
        }
      });
      auFind = Author = {
        id: args.id,
        name: au.name,
        email: au.email,
        movies: mov,
      };
      return await auFind;
    },
  },
  Mutation: {
    createMovie: async (_, args) => {
      const movie = await Movies.create({
        name: args.name,
        score: args.score,
      });
      return movie;
    },
    deleteMovie: async (_, args) => {
      const movie = await Movies.destroy({
        where: args,
      });
      return { id: args.id };
    },
    updateMovie: async (_, args) => {
      const data = {};
      if (args.name === undefined) {
        data.score = args.score;
      } else if (args.score === undefined) {
        data.name = args.name;
      } else {
        data.name = args.name;
        data.score = args.score;
      }
      const movie = await Movies.update(data, {
        where: { id: args.id },
      });
      return { id: args.id };
    },
  },
};

module.exports = {
  resolvers: resolvers,
};
