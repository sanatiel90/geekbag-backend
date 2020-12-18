module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'geekbag',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}