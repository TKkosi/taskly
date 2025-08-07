module.exports ={
  extends: ['expo','prettier'],
  Plugins:['prettier',"react-native"],
  rules:{
    'prettier/prettier': 'error',
    "react-native/no-unused-styles": "error",
  }
}