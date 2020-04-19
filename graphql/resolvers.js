const { Movies } = require('./db');

const resolvers = {
    Query: {
        movies: async () => {
            return await Movies.findAll();
        },
        movie: async (_, args) => {
            return await Movies.find({
                where: args
            })
        }
    },
    Mutation: {
        createMovie: async (_, args) => {
            const movie = await Movies.create({
                name: args.name,
                score: args.score
            });
            return movie;
        },
        deleteMovie: async (_, args) => {
            const movie = await Movies.destroy({
                where: args
            })
            return {id: args.id};
        },
        updateMovie: async (_, args) => {
            const data = {};
            if(args.name === undefined) {
                data.score = args.score;
            } else if(args.score === undefined) {
                data.name = args.name;
            } else {
                data.name = args.name;
                data.score = args.score;
            }
            const movie = await Movies.update(data, {
                where: {id: args.id}
            })
            return {id: args.id};
        }
    }
}

module.exports = {
    resolvers: resolvers
}