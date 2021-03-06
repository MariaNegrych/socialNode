module.exports = (sequelize, DataTypes) => {
    const Sex = sequelize.define('Sex', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        label: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'sex',
        timestamps: false
    });

    return Sex
};
