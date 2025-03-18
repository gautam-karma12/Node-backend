module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
      allowNull: false,
    },
  });
  return Task;
};
