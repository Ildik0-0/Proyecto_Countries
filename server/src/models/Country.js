const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      unique: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgFlag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.INTEGER,
      
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    timestamps: false,
    freezeTableName: true
  });
};